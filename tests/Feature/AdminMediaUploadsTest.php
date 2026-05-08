<?php

use App\Livewire\Admin\Gallery\Create as GalleryCreate;
use App\Livewire\Admin\Gallery\Edit as GalleryEdit;
use App\Livewire\Admin\Pages\Create as PageCreate;
use App\Livewire\Admin\Pages\Edit as PageEdit;
use App\Livewire\Admin\Posts\Create as PostCreate;
use App\Livewire\Admin\Posts\Edit as PostEdit;
use App\Livewire\Admin\SiteSettings\Edit as SiteSettingsEdit;
use App\Livewire\Admin\StudentWorks\Create as StudentWorkCreate;
use App\Livewire\Admin\StudentWorks\Edit as StudentWorkEdit;
use App\Models\GalleryAlbum;
use App\Models\Page;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\SiteSetting;
use App\Models\StudentWork;
use App\Models\User;
use App\Models\WorkCategory;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Livewire\Livewire;

test('livewire temporary upload limit is aligned for larger hero videos', function () {
    expect(config('livewire.temporary_file_upload.rules'))->toBe('file|max:51200');
});

test('admins can upload media for site settings', function () {
    Storage::fake('public');

    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    SiteSetting::factory()->create();

    $this->actingAs($user);

    Livewire::test(SiteSettingsEdit::class)
        ->set('form.site_name', 'Mathaliul Anwar')
        ->set('logoUpload', UploadedFile::fake()->image('logo.png'))
        ->set('heroVideoUpload', UploadedFile::fake()->create('hero.mp4', 512, 'video/mp4'))
        ->set('heroFallbackImageUpload', UploadedFile::fake()->image('hero.jpg'))
        ->call('save');

    $siteSetting = SiteSetting::query()->firstOrFail();

    expect($siteSetting->logo_path)->toStartWith('branding/');
    expect($siteSetting->hero_video_path)->toStartWith('hero/');
    expect($siteSetting->hero_fallback_image_path)->toStartWith('hero/');

    Storage::disk('public')->assertExists($siteSetting->logo_path);
    Storage::disk('public')->assertExists($siteSetting->hero_video_path);
    Storage::disk('public')->assertExists($siteSetting->hero_fallback_image_path);
});

test('admins can upload page featured images and redaksi can upload post featured images', function () {
    Storage::fake('public');

    $admin = User::factory()->create([
        'role' => 'admin',
    ]);
    $redaksi = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $category = PostCategory::factory()->create();

    $this->actingAs($admin);

    Livewire::test(PageCreate::class)
        ->set('form.title', 'Profil Baru')
        ->set('form.slug', 'profil-baru')
        ->set('form.content', 'Konten profil baru.')
        ->set('form.status', 'published')
        ->set('featuredImageUpload', UploadedFile::fake()->image('profil.jpg'))
        ->call('save')
        ->assertRedirect(route('admin.pages.index'));

    $this->actingAs($redaksi);

    Livewire::test(PostCreate::class)
        ->set('form.post_category_id', $category->id)
        ->set('form.title', 'Berita Upload')
        ->set('form.slug', 'berita-upload')
        ->set('form.content', 'Konten berita upload.')
        ->set('form.status', 'published')
        ->set('featuredImageUpload', UploadedFile::fake()->image('berita.jpg'))
        ->call('save')
        ->assertRedirect(route('admin.posts.index'));

    $page = Page::query()->where('slug', 'profil-baru')->firstOrFail();
    $post = Post::query()->where('slug', 'berita-upload')->firstOrFail();

    expect($page->featured_image_path)->toStartWith('pages/');
    expect($post->featured_image_path)->toStartWith('posts/');

    Storage::disk('public')->assertExists($page->featured_image_path);
    Storage::disk('public')->assertExists($post->featured_image_path);
});

test('redaksi can upload featured images and attachments for student works', function () {
    Storage::fake('public');

    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $category = WorkCategory::factory()->create();

    $this->actingAs($user);

    Livewire::test(StudentWorkCreate::class)
        ->set('form.work_category_id', $category->id)
        ->set('form.title', 'Karya Upload')
        ->set('form.slug', 'karya-upload')
        ->set('form.author_name', 'Santri Upload')
        ->set('form.content', 'Isi karya santri upload.')
        ->set('form.status', 'published')
        ->set('featuredImageUpload', UploadedFile::fake()->image('karya.jpg'))
        ->set('attachmentUpload', UploadedFile::fake()->create('lampiran.pdf', 256, 'application/pdf'))
        ->call('save')
        ->assertRedirect(route('admin.student-works.index'));

    $studentWork = StudentWork::query()->where('slug', 'karya-upload')->firstOrFail();

    expect($studentWork->featured_image_path)->toStartWith('student-works/');
    expect($studentWork->attachment_path)->toStartWith('student-works/');

    Storage::disk('public')->assertExists($studentWork->featured_image_path);
    Storage::disk('public')->assertExists($studentWork->attachment_path);
});

test('redaksi can upload cover and gallery images for albums', function () {
    Storage::fake('public');

    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $this->actingAs($user);

    Livewire::test(GalleryCreate::class)
        ->set('form.title', 'Album Upload')
        ->set('form.slug', 'album-upload')
        ->set('form.description', 'Album dengan upload gambar.')
        ->set('form.event_date', '2026-05-02')
        ->set('form.status', 'published')
        ->set('form.images', [
            [
                'image_path' => '',
                'caption' => 'Foto 1',
                'alt_text' => 'Foto pertama',
                'sort_order' => 1,
            ],
        ])
        ->set('coverImageUpload', UploadedFile::fake()->image('cover.jpg'))
        ->set('galleryImageUploads.0', UploadedFile::fake()->image('album-1.jpg'))
        ->call('save')
        ->assertRedirect(route('admin.gallery.index'));

    $album = GalleryAlbum::query()->where('slug', 'album-upload')->firstOrFail();
    $image = $album->images()->firstOrFail();

    expect($album->cover_image_path)->toStartWith('gallery/');
    expect($image->image_path)->toStartWith('gallery/');

    Storage::disk('public')->assertExists($album->cover_image_path);
    Storage::disk('public')->assertExists($image->image_path);
});

test('admins and redaksi can replace and remove media according to their module access', function () {
    Storage::fake('public');

    $admin = User::factory()->create([
        'role' => 'admin',
    ]);
    $redaksi = User::factory()->create([
        'role' => 'redaksi',
    ]);

    Storage::disk('public')->put('posts/old-post.jpg', 'old');
    Storage::disk('public')->put('student-works/old-attachment.pdf', 'old');
    Storage::disk('public')->put('gallery/old-cover.jpg', 'old');
    Storage::disk('public')->put('gallery/old-image.jpg', 'old');
    Storage::disk('public')->put('pages/old-page.jpg', 'old');

    $post = Post::factory()->create([
        'featured_image_path' => 'posts/old-post.jpg',
    ]);

    $page = Page::factory()->create([
        'featured_image_path' => 'pages/old-page.jpg',
    ]);

    $studentWork = StudentWork::factory()->create([
        'attachment_path' => 'student-works/old-attachment.pdf',
    ]);

    $album = GalleryAlbum::factory()->create([
        'cover_image_path' => 'gallery/old-cover.jpg',
    ]);

    $album->images()->create([
        'image_path' => 'gallery/old-image.jpg',
        'caption' => 'Old',
        'alt_text' => 'Old',
        'sort_order' => 1,
    ]);

    $this->actingAs($redaksi);

    Livewire::test(PostEdit::class, ['post' => $post])
        ->set('featuredImageUpload', UploadedFile::fake()->image('new-post.jpg'))
        ->call('save')
        ->assertRedirect(route('admin.posts.index'));

    Storage::disk('public')->assertMissing('posts/old-post.jpg');

    $this->actingAs($admin);

    Livewire::test(PageEdit::class, ['page' => $page])
        ->call('removeFeaturedImage')
        ->call('save')
        ->assertRedirect(route('admin.pages.index'));

    Storage::disk('public')->assertMissing('pages/old-page.jpg');
    expect($page->fresh()->featured_image_path)->toBeNull();

    $this->actingAs($redaksi);

    Livewire::test(StudentWorkEdit::class, ['studentWork' => $studentWork])
        ->call('removeAttachment')
        ->call('save')
        ->assertRedirect(route('admin.student-works.index'));

    Storage::disk('public')->assertMissing('student-works/old-attachment.pdf');
    expect($studentWork->fresh()->attachment_path)->toBeNull();

    Livewire::test(GalleryEdit::class, ['galleryAlbum' => $album])
        ->call('removeCoverImage')
        ->call('removeStoredGalleryImage', 0)
        ->call('save')
        ->assertRedirect(route('admin.gallery.index'));

    Storage::disk('public')->assertMissing('gallery/old-cover.jpg');
    Storage::disk('public')->assertMissing('gallery/old-image.jpg');

    $album->refresh();
    expect($album->cover_image_path)->toBeNull();
    expect($album->images()->count())->toBe(0);
});

test('site settings upload shows validation errors for invalid hero video format', function () {
    Storage::fake('public');

    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    SiteSetting::factory()->create();

    $this->actingAs($user);

    Livewire::test(SiteSettingsEdit::class)
        ->set('form.site_name', 'Mathaliul Anwar')
        ->set('heroVideoUpload', UploadedFile::fake()->create('hero.txt', 128, 'text/plain'))
        ->call('save')
        ->assertHasErrors([
            'heroVideoUpload',
        ]);
});

test('content uploads show validation errors for oversized images and invalid attachment formats', function () {
    Storage::fake('public');

    $admin = User::factory()->create([
        'role' => 'admin',
    ]);
    $redaksi = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $category = WorkCategory::factory()->create();

    $this->actingAs($admin);

    Livewire::test(PageCreate::class)
        ->set('form.title', 'Profil Invalid')
        ->set('form.slug', 'profil-invalid')
        ->set('form.content', 'Konten halaman invalid.')
        ->set('form.status', 'draft')
        ->set('featuredImageUpload', UploadedFile::fake()->image('profil.jpg')->size(5000))
        ->call('save')
        ->assertHasErrors([
            'featuredImageUpload' => ['max'],
        ]);

    $this->actingAs($redaksi);

    Livewire::test(StudentWorkCreate::class)
        ->set('form.work_category_id', $category->id)
        ->set('form.title', 'Lampiran Invalid')
        ->set('form.slug', 'lampiran-invalid')
        ->set('form.author_name', 'Santri Invalid')
        ->set('form.content', 'Isi karya untuk validasi.')
        ->set('form.status', 'draft')
        ->set('attachmentUpload', UploadedFile::fake()->create('script.exe', 128, 'application/octet-stream'))
        ->call('save')
        ->assertHasErrors([
            'attachmentUpload' => ['mimes'],
        ]);
});
