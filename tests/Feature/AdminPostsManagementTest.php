<?php

use App\Livewire\Admin\Posts\Create;
use App\Livewire\Admin\Posts\Edit;
use App\Livewire\Admin\Posts\Index;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\User;
use Livewire\Livewire;

test('guests are redirected from the admin posts module', function () {
    $this->get(route('admin.posts.index'))
        ->assertRedirect(route('login'));
});

test('users outside the allowed content roles cannot access the admin posts module', function () {
    $user = User::factory()->create([
        'role' => 'viewer',
    ]);

    $this->actingAs($user)
        ->get(route('admin.posts.index'))
        ->assertForbidden();
});

test('redaksi can view the compact posts index layout', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    Post::factory()->create([
        'user_id' => $user->id,
        'title' => 'Berita Tabel Ringkas',
    ]);

    $this->actingAs($user)
        ->get(route('admin.posts.index'))
        ->assertOk()
        ->assertSee('Daftar Berita')
        ->assertSee('Kategori')
        ->assertSee('Berita Tabel Ringkas')
        ->assertSee('Hapus berita ini?')
        ->assertDontSee('wire:confirm="Hapus berita ini?"', false)
        ->assertDontSee('rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3', false);
});

test('post create form hides manual featured image path input', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $this->actingAs($user)
        ->get(route('admin.posts.create'))
        ->assertOk()
        ->assertDontSee('label="Featured Image Path"', false)
        ->assertSee('Upload Featured Image');
});

test('redaksi can create a published post from the admin module', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $category = PostCategory::factory()->create();

    $this->actingAs($user);

    Livewire::test(Create::class)
        ->set('form.post_category_id', $category->id)
        ->set('form.title', 'Berita Baru Pesantren')
        ->set('form.slug', 'berita-baru-pesantren')
        ->set('form.excerpt', 'Ringkasan berita baru.')
        ->set('form.content', 'Isi lengkap berita baru pesantren.')
        ->set('form.status', 'published')
        ->call('save')
        ->assertRedirect(route('admin.posts.index'));

    $post = Post::query()->where('slug', 'berita-baru-pesantren')->first();

    expect($post)->not->toBeNull();
    expect($post?->user_id)->toBe($user->id);
    expect($post?->post_category_id)->toBe($category->id);
    expect($post?->published_at)->not->toBeNull();
});

test('post content is sanitized before being stored', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $category = PostCategory::factory()->create();

    $this->actingAs($user);

    Livewire::test(Create::class)
        ->set('form.post_category_id', $category->id)
        ->set('form.title', 'Berita Aman')
        ->set('form.slug', 'berita-aman')
        ->set('form.content', '<p>Konten aman</p><script>alert(1)</script><p><strong>Tetap tampil</strong></p>')
        ->set('form.status', 'published')
        ->call('save')
        ->assertRedirect(route('admin.posts.index'));

    $post = Post::query()->where('slug', 'berita-aman')->firstOrFail();

    expect($post->content)->toContain('<p>Konten aman</p>');
    expect($post->content)->toContain('<strong>Tetap tampil</strong>');
    expect($post->content)->not->toContain('<script>');
});

test('redaksi can update an existing post from the admin module', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $post = Post::factory()->create([
        'user_id' => $user->id,
        'status' => 'draft',
        'published_at' => null,
    ]);

    $this->actingAs($user);

    Livewire::test(Edit::class, ['post' => $post])
        ->set('form.title', 'Judul Berita Diperbarui')
        ->set('form.slug', 'judul-berita-diperbarui')
        ->set('form.status', 'published')
        ->call('save')
        ->assertRedirect(route('admin.posts.index'));

    $post->refresh();

    expect($post->title)->toBe('Judul Berita Diperbarui');
    expect($post->slug)->toBe('judul-berita-diperbarui');
    expect($post->status)->toBe('published');
    expect($post->published_at)->not->toBeNull();
});

test('redaksi can delete posts from the listing page', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $post = Post::factory()->create([
        'user_id' => $user->id,
    ]);

    $this->actingAs($user);

    Livewire::test(Index::class)
        ->call('deletePost', $post->id);

    $this->assertDatabaseMissing('posts', [
        'id' => $post->id,
    ]);
});

test('redaksi can open the delete confirmation modal for a post', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $post = Post::factory()->create([
        'user_id' => $user->id,
        'title' => 'Berita Akan Dihapus',
    ]);

    $this->actingAs($user);

    Livewire::test(Index::class)
        ->call('confirmDelete', $post->id)
        ->assertSet('showDeleteModal', true)
        ->assertSet('pendingDeleteId', $post->id)
        ->assertSet('pendingDeleteTitle', 'Berita Akan Dihapus');
});
