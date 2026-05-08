<?php

use App\Models\GalleryAlbum;
use App\Models\Page;
use App\Models\Post;
use App\Models\SiteSetting;
use App\Models\StudentWork;
use Database\Seeders\ContentCategorySeeder;
use Database\Seeders\HomepageContentSeeder;
use Database\Seeders\SiteSettingSeeder;

test('homepage loads successfully', function () {
    $response = $this->get(route('home'));

    $response->assertOk();
});

test('homepage renders seeded public content', function () {
    $this->seed([
        SiteSettingSeeder::class,
        ContentCategorySeeder::class,
        HomepageContentSeeder::class,
    ]);

    expect(SiteSetting::query()->exists())->toBeTrue();
    expect(Page::query()->where('slug', 'profil')->exists())->toBeTrue();
    expect(Post::query()->where('status', 'published')->exists())->toBeTrue();
    expect(StudentWork::query()->where('status', 'published')->exists())->toBeTrue();
    expect(GalleryAlbum::query()->where('status', 'published')->exists())->toBeTrue();

    $response = $this->get(route('home'));

    $response
        ->assertOk()
        ->assertSee("Pondok Pesantren Mathali'ul Anwar")
        ->assertSee('Peluncuran Website Profil Pesantren')
        ->assertSee('Esai Refleksi Kehidupan Santri')
        ->assertSee('Kegiatan Asrama dan Pembinaan Harian');
});

test('public layout renders theme toggle foundation', function () {
    $response = $this->get(route('home'));

    $response
        ->assertOk()
        ->assertSee('mathaliulanwar-public-theme', false)
        ->assertSee('data-theme-toggle', false)
        ->assertSee('window.publicTheme.toggle()', false);
});
