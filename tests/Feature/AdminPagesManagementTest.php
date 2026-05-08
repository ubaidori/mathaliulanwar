<?php

use App\Livewire\Admin\Pages\Create;
use App\Livewire\Admin\Pages\Edit;
use App\Livewire\Admin\Pages\Index;
use App\Models\Page;
use App\Models\User;
use Livewire\Livewire;

test('guests are redirected from the admin pages module', function () {
    $this->get(route('admin.pages.index'))
        ->assertRedirect(route('login'));
});

test('users outside the allowed content roles cannot access the admin pages module', function () {
    $user = User::factory()->create([
        'role' => 'viewer',
    ]);

    $this->actingAs($user)
        ->get(route('admin.pages.index'))
        ->assertForbidden();
});

test('admins can open the page editor with the rich text area', function () {
    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    $this->actingAs($user)
        ->get(route('admin.pages.create'))
        ->assertOk()
        ->assertSee('contenteditable="true"', false)
        ->assertSee('dir="ltr"', false)
        ->assertSee('x-on:focus="handleFocus()"', false)
        ->assertSee('x-on:mousedown="beginPointerFocus($event)"', false)
        ->assertSee('x-on:paste="handlePaste($event)"', false)
        ->assertSee('shouldResumeSelection', false)
        ->assertSee('prepareSelectionResume()', false)
        ->assertSee('<ui-toast-group', false)
        ->assertSee('position="top end"', false)
        ->assertSee("window.addEventListener('focus'", false)
        ->assertSee('getNodePath(node)', false)
        ->assertSee('getNodeFromPath(path)', false)
        ->assertSee("x-on:mousedown.prevent=\"format('bold')\"", false)
        ->assertSee("x-on:mousedown.prevent=\"heading('h4')\"", false)
        ->assertSee("x-on:mousedown.prevent=\"heading('h5')\"", false)
        ->assertSee('data-admin-theme-toggle', false)
        ->assertDontSee('mathaliulanwar-public-theme');
});

test('page create form hides manual featured image path input', function () {
    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    $this->actingAs($user)
        ->get(route('admin.pages.create'))
        ->assertOk()
        ->assertDontSee('label="Path Gambar Utama"', false)
        ->assertSee('Upload Gambar Utama');
});

test('admins can view the pages index with delete confirmation', function () {
    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    Page::factory()->create([
        'title' => 'Halaman Ringkas',
    ]);

    $this->actingAs($user)
        ->get(route('admin.pages.index'))
        ->assertOk()
        ->assertSee('Daftar Halaman')
        ->assertSee('Halaman Ringkas')
        ->assertSee('Hapus halaman ini?')
        ->assertDontSee('wire:confirm="Hapus halaman ini?"', false);
});

test('admins can create a published page from the admin module', function () {
    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    $this->actingAs($user);

    Livewire::test(Create::class)
        ->set('form.title', 'Fasilitas')
        ->set('form.slug', 'fasilitas')
        ->set('form.excerpt', 'Ringkasan fasilitas pesantren.')
        ->set('form.content', 'Konten fasilitas pesantren yang lengkap.')
        ->set('form.meta_title', 'Fasilitas Pesantren')
        ->set('form.meta_description', 'Meta deskripsi fasilitas pesantren.')
        ->set('form.status', 'published')
        ->set('form.sort_order', 4)
        ->call('save')
        ->assertRedirect(route('admin.pages.index'));

    $page = Page::query()->where('slug', 'fasilitas')->first();

    expect($page)->not->toBeNull();
    expect($page?->status)->toBe('published');
    expect($page?->published_at)->not->toBeNull();
    expect($page?->sort_order)->toBe(4);
});

test('admins can update an existing profile page from the admin module', function () {
    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    $page = Page::factory()->published()->create([
        'title' => 'Profil',
        'slug' => 'profil',
        'sort_order' => 1,
    ]);

    $this->actingAs($user);

    Livewire::test(Edit::class, ['page' => $page])
        ->set('form.title', 'Profil Pesantren')
        ->set('form.slug', 'profil')
        ->set('form.content', 'Konten profil pesantren yang diperbarui.')
        ->set('form.status', 'published')
        ->set('form.sort_order', 1)
        ->call('save')
        ->assertRedirect(route('admin.pages.index'));

    $page->refresh();

    expect($page->title)->toBe('Profil Pesantren');
    expect($page->slug)->toBe('profil');
    expect($page->content)->toBe('Konten profil pesantren yang diperbarui.');
    expect($page->status)->toBe('published');
});

test('page content is sanitized before being stored', function () {
    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    $this->actingAs($user);

    Livewire::test(Create::class)
        ->set('form.title', 'Profil Aman')
        ->set('form.slug', 'profil-aman')
        ->set('form.content', '<p>Profil aman</p><script>alert(1)</script><blockquote>Catatan</blockquote><h5>Sub bagian</h5><p><a href="https://example.com/profil">Profil resmi</a></p>')
        ->set('form.status', 'published')
        ->set('form.sort_order', 3)
        ->call('save')
        ->assertRedirect(route('admin.pages.index'));

    $page = Page::query()->where('slug', 'profil-aman')->firstOrFail();

    expect($page->content)->toContain('<p>Profil aman</p>');
    expect($page->content)->toContain('<blockquote>Catatan</blockquote>');
    expect($page->content)->toContain('<h5>Sub bagian</h5>');
    expect($page->content)->toContain('href="https://example.com/profil"');
    expect($page->content)->not->toContain('<script>');
});

test('admins can delete pages from the listing page', function () {
    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    $page = Page::factory()->create();

    $this->actingAs($user);

    Livewire::test(Index::class)
        ->call('deletePage', $page->id);

    $this->assertDatabaseMissing('pages', [
        'id' => $page->id,
    ]);
});

test('admins can open the delete confirmation modal for a page', function () {
    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    $page = Page::factory()->create([
        'title' => 'Halaman Akan Dihapus',
    ]);

    $this->actingAs($user);

    Livewire::test(Index::class)
        ->call('confirmDelete', $page->id)
        ->assertSet('showDeleteModal', true)
        ->assertSet('pendingDeleteId', $page->id)
        ->assertSet('pendingDeleteTitle', 'Halaman Akan Dihapus');
});

test('redaksi cannot access the admin pages module', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $this->actingAs($user)
        ->get(route('admin.pages.index'))
        ->assertForbidden();
});
