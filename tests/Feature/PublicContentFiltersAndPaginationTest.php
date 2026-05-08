<?php

use App\Models\GalleryAlbum;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\StudentWork;
use App\Models\WorkCategory;
use Database\Seeders\ContentCategorySeeder;
use Database\Seeders\HomepageContentSeeder;
use Database\Seeders\SiteSettingSeeder;

beforeEach(function () {
    $this->seed([
        SiteSettingSeeder::class,
        ContentCategorySeeder::class,
        HomepageContentSeeder::class,
    ]);
});

test('public news page supports category filters and pagination', function () {
    $selectedCategory = PostCategory::factory()->create([
        'name' => 'Agenda',
        'slug' => 'agenda',
    ]);

    $otherCategory = PostCategory::factory()->create([
        'name' => 'Arsip',
        'slug' => 'arsip',
    ]);

    collect(range(1, 7))->each(function (int $index) use ($selectedCategory): void {
        Post::factory()->published()->create([
            'post_category_id' => $selectedCategory->id,
            'title' => 'Berita Agenda '.$index,
            'slug' => 'berita-agenda-'.$index,
            'excerpt' => 'Agenda pesantren pilihan.',
        ]);
    });

    Post::factory()->published()->create([
        'post_category_id' => $otherCategory->id,
        'title' => 'Berita Arsip Khusus',
        'excerpt' => 'Arsip pesantren.',
    ]);

    $this->get(route('berita.index', [
        'category' => 'agenda',
        'search' => 'Agenda',
    ]))
        ->assertOk()
        ->assertSee('Menampilkan')
        ->assertSee('Berita Agenda 1')
        ->assertDontSee('Berita Arsip Khusus')
        ->assertSee('page=2');

    $this->get(route('berita.index', [
        'category' => 'agenda',
        'page' => 2,
    ]))
        ->assertOk()
        ->assertSee('page=1');
});

test('public student works page supports category filters and pagination', function () {
    $selectedCategory = WorkCategory::factory()->create([
        'name' => 'Puisi',
        'slug' => 'puisi',
    ]);

    $otherCategory = WorkCategory::factory()->create([
        'name' => 'Esai',
        'slug' => 'esai',
    ]);

    collect(range(1, 7))->each(function (int $index) use ($selectedCategory): void {
        StudentWork::factory()->published()->create([
            'work_category_id' => $selectedCategory->id,
            'title' => 'Karya Puisi '.$index,
            'slug' => 'karya-puisi-'.$index,
            'author_name' => 'Penulis Puisi',
            'excerpt' => 'Puisi santri pilihan.',
        ]);
    });

    StudentWork::factory()->published()->create([
        'work_category_id' => $otherCategory->id,
        'title' => 'Karya Esai Khusus',
        'author_name' => 'Penulis Esai',
        'excerpt' => 'Esai santri.',
    ]);

    $this->get(route('karya-santri.index', [
        'category' => 'puisi',
        'search' => 'Puisi',
    ]))
        ->assertOk()
        ->assertSee('Menampilkan')
        ->assertSee('Karya Puisi 1')
        ->assertDontSee('Karya Esai Khusus')
        ->assertSee('page=2');

    $this->get(route('karya-santri.index', [
        'category' => 'puisi',
        'page' => 2,
    ]))
        ->assertOk()
        ->assertSee('page=1');
});

test('public gallery page supports year filters and pagination', function () {
    collect(range(1, 7))->each(function (int $index): void {
        GalleryAlbum::factory()->published()->create([
            'title' => 'Album Tahun 2024 '.$index,
            'slug' => 'album-tahun-2024-'.$index,
            'description' => 'Dokumentasi tahun 2024',
            'event_date' => '2024-06-10',
        ]);
    });

    GalleryAlbum::factory()->published()->create([
        'title' => 'Album Tahun 2023',
        'description' => 'Dokumentasi tahun 2023',
        'event_date' => '2023-06-10',
    ]);

    $this->get(route('galeri.index', [
        'year' => '2024',
        'search' => '2024',
    ]))
        ->assertOk()
        ->assertSee('Menampilkan')
        ->assertSee('Album Tahun 2024 1')
        ->assertDontSee('Album Tahun 2023')
        ->assertSee('page=2');

    $this->get(route('galeri.index', [
        'year' => '2024',
        'page' => 2,
    ]))
        ->assertOk()
        ->assertSee('page=1');
});

test('public content pages still load their new filter forms', function () {
    $this->get(route('berita.index'))
        ->assertOk()
        ->assertSee('Cari berita');

    $this->get(route('karya-santri.index'))
        ->assertOk()
        ->assertSee('Cari karya');

    $this->get(route('galeri.index'))
        ->assertOk()
        ->assertSee('Cari album');
});
