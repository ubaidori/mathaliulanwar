<?php

use App\Livewire\Admin\Gallery\Create;
use App\Livewire\Admin\Gallery\Edit;
use App\Livewire\Admin\Gallery\Index;
use App\Models\GalleryAlbum;
use App\Models\User;
use Livewire\Livewire;

test('guests are redirected from the admin gallery module', function () {
    $this->get(route('admin.gallery.index'))
        ->assertRedirect(route('login'));
});

test('users outside the allowed content roles cannot access the admin gallery module', function () {
    $user = User::factory()->create([
        'role' => 'viewer',
    ]);

    $this->actingAs($user)
        ->get(route('admin.gallery.index'))
        ->assertForbidden();
});

test('redaksi can view the compact gallery index layout', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    GalleryAlbum::factory()->create([
        'title' => 'Album Tabel Ringkas',
    ]);

    $this->actingAs($user)
        ->get(route('admin.gallery.index'))
        ->assertOk()
        ->assertSee('Daftar Album')
        ->assertSee('Gambar')
        ->assertSee('Album Tabel Ringkas')
        ->assertSee('Hapus album galeri ini?')
        ->assertDontSee('wire:confirm="Hapus album ini?"', false);
});

test('gallery create form hides manual image path inputs', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $this->actingAs($user)
        ->get(route('admin.gallery.create'))
        ->assertOk()
        ->assertDontSee('label="Cover Image Path"', false)
        ->assertDontSee('label="Image Path"', false)
        ->assertSee('Sistem akan mengelola path file secara otomatis.')
        ->assertSee('Upload Cover Album')
        ->assertSee('Upload Gambar');
});

test('redaksi can create a published gallery album with images', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $this->actingAs($user);

    Livewire::test(Create::class)
        ->set('form.title', 'Album Kegiatan Santri')
        ->set('form.slug', 'album-kegiatan-santri')
        ->set('form.description', 'Dokumentasi kegiatan santri.')
        ->set('form.event_date', '2026-04-30')
        ->set('form.status', 'published')
        ->set('form.images', [
            [
                'image_path' => 'gallery/album-kegiatan-santri-1.jpg',
                'caption' => 'Kegiatan pertama',
                'alt_text' => 'Kegiatan santri satu',
                'sort_order' => 1,
            ],
            [
                'image_path' => 'gallery/album-kegiatan-santri-2.jpg',
                'caption' => 'Kegiatan kedua',
                'alt_text' => 'Kegiatan santri dua',
                'sort_order' => 2,
            ],
        ])
        ->call('save')
        ->assertRedirect(route('admin.gallery.index'));

    $album = GalleryAlbum::query()->where('slug', 'album-kegiatan-santri')->first();

    expect($album)->not->toBeNull();
    expect($album?->published_at)->not->toBeNull();
    expect($album?->images()->count())->toBe(2);
});

test('blank gallery image rows are ignored when saving an album', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $this->actingAs($user);

    Livewire::test(Create::class)
        ->set('form.title', 'Album Tanpa Path Manual')
        ->set('form.slug', 'album-tanpa-path-manual')
        ->set('form.description', 'Baris gambar kosong seharusnya diabaikan.')
        ->set('form.status', 'published')
        ->set('form.images', [
            [
                'image_path' => '',
                'caption' => 'Draft caption',
                'alt_text' => '',
                'sort_order' => 1,
            ],
        ])
        ->call('save')
        ->assertRedirect(route('admin.gallery.index'));

    $album = GalleryAlbum::query()->where('slug', 'album-tanpa-path-manual')->firstOrFail();

    expect($album->images()->count())->toBe(0);
});

test('redaksi can update an existing gallery album and its images', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $album = GalleryAlbum::factory()->create([
        'status' => 'draft',
        'published_at' => null,
    ]);

    $album->images()->create([
        'image_path' => 'gallery/old-image.jpg',
        'caption' => 'Old image',
        'alt_text' => 'Old alt',
        'sort_order' => 1,
    ]);

    $this->actingAs($user);

    Livewire::test(Edit::class, ['galleryAlbum' => $album])
        ->set('form.title', 'Album Diperbarui')
        ->set('form.slug', 'album-diperbarui')
        ->set('form.status', 'published')
        ->set('form.images', [
            [
                'image_path' => 'gallery/new-image.jpg',
                'caption' => 'New image',
                'alt_text' => 'New alt',
                'sort_order' => 1,
            ],
        ])
        ->call('save')
        ->assertRedirect(route('admin.gallery.index'));

    $album->refresh();

    expect($album->title)->toBe('Album Diperbarui');
    expect($album->status)->toBe('published');
    expect($album->images()->count())->toBe(1);
    expect($album->images()->first()?->image_path)->toBe('gallery/new-image.jpg');
});

test('redaksi can delete gallery albums from the listing page', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $album = GalleryAlbum::factory()->create();

    $this->actingAs($user);

    Livewire::test(Index::class)
        ->call('deleteAlbum', $album->id);

    $this->assertDatabaseMissing('gallery_albums', [
        'id' => $album->id,
    ]);
});

test('redaksi can open the delete confirmation modal for a gallery album', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $album = GalleryAlbum::factory()->create([
        'title' => 'Album Akan Dihapus',
    ]);

    $this->actingAs($user);

    Livewire::test(Index::class)
        ->call('confirmDelete', $album->id)
        ->assertSet('showDeleteModal', true)
        ->assertSet('pendingDeleteId', $album->id)
        ->assertSet('pendingDeleteTitle', 'Album Akan Dihapus');
});
