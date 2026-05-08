<?php

use App\Models\GalleryAlbum;
use App\Models\Page;
use App\Models\Post;
use App\Models\SiteSetting;
use App\Models\StudentWork;
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

test('public profile and education pages can be viewed', function () {
    $this->get(route('profil.show'))
        ->assertOk()
        ->assertSee('Profil');

    $this->get(route('profil.section.show', 'visi-misi'))
        ->assertOk()
        ->assertSee('Visi Misi');

    $this->get(route('profil.section.show', 'pendiri'))
        ->assertOk()
        ->assertSee('Pendiri');

    $this->get(route('profil.section.show', 'sejarah'))
        ->assertOk()
        ->assertSee('Sejarah');

    $this->get(route('pendidikan.show'))
        ->assertOk()
        ->assertSee('Pendidikan');

    $this->get(route('profil.section.show', 'struktur'))
        ->assertOk()
        ->assertSee('Struktur');
});

test('public profile pages render stored rich text headings clearly', function () {
    Page::query()->where('slug', 'profil')->firstOrFail()->update([
        'content' => '<h2>Profil</h2><p>Deskripsi profil.</p><h2>Visi Misi</h2><p>Deskripsi visi misi.</p><h3>Sejarah</h3><p>Deskripsi sejarah.</p>',
    ]);

    $this->get(route('profil.show'))
        ->assertOk()
        ->assertSee('<h2>Profil</h2>', false)
        ->assertSee('<h2>Visi Misi</h2>', false)
        ->assertSee('<h3>Sejarah</h3>', false);
});

test('public header shows home link and profile dropdown entries', function () {
    $this->get(route('home'))
        ->assertOk()
        ->assertSee('Home')
        ->assertSee('Profil')
        ->assertSee('Visi Misi')
        ->assertSee('Pendiri')
        ->assertSee('Sejarah')
        ->assertSee('Pendidikan')
        ->assertSee('Struktur');
});

test('homepage hero renders centered site identity and optional cta buttons from site settings', function () {
    SiteSetting::query()->firstOrFail()->update([
        'site_name' => "Pondok Pesantren Mathali'ul Anwar",
        'site_tagline' => 'Tagline Hero Baru',
        'site_description' => 'Deskripsi hero yang dapat dikelola dari admin.',
        'hero_primary_cta_label' => 'Kenali Profil',
        'hero_primary_cta_url' => 'https://mathaliulanwar.test/profil',
        'hero_secondary_cta_label' => 'Baca Berita',
        'hero_secondary_cta_url' => 'https://mathaliulanwar.test/berita',
    ]);

    $this->get(route('home'))
        ->assertOk()
        ->assertSee("Pondok Pesantren Mathali'ul Anwar")
        ->assertSee('Tagline Hero Baru')
        ->assertSee('Deskripsi hero yang dapat dikelola dari admin.')
        ->assertSee('Kenali Profil')
        ->assertSee('https://mathaliulanwar.test/profil')
        ->assertSee('Baca Berita')
        ->assertSee('https://mathaliulanwar.test/berita')
        ->assertDontSee('Fokus Utama');
});

test('public header renders mobile menu and icon-only theme toggle controls', function () {
    $this->get(route('home'))
        ->assertOk()
        ->assertSee('data-public-menu-toggle', false)
        ->assertSee('data-public-mobile-menu', false)
        ->assertSee('Toggle tema tampilan')
        ->assertSee('fixed inset-x-0 top-0', false)
        ->assertDontSee('Mode Gelap')
        ->assertDontSee('Mode Terang');
});

test('public news listing and detail pages can be viewed', function () {
    $this->get(route('berita.index'))
        ->assertOk()
        ->assertSee('Peluncuran Website Profil Pesantren');

    $this->get(route('berita.show', 'peluncuran-website-profil-pesantren'))
        ->assertOk()
        ->assertSee('Peluncuran Website Profil Pesantren');
});

test('public student work listing and detail pages can be viewed', function () {
    $this->get(route('karya-santri.index'))
        ->assertOk()
        ->assertSee('Esai Refleksi Kehidupan Santri');

    $this->get(route('karya-santri.show', 'esai-refleksi-kehidupan-santri'))
        ->assertOk()
        ->assertSee('Esai Refleksi Kehidupan Santri');
});

test('public gallery listing and detail pages can be viewed', function () {
    $this->get(route('galeri.index'))
        ->assertOk()
        ->assertSee('Kegiatan Asrama dan Pembinaan Harian');

    $this->get(route('galeri.show', 'kegiatan-asrama'))
        ->assertOk()
        ->assertSee('Kegiatan Asrama dan Pembinaan Harian');
});

test('public pages render storage media urls when media paths exist', function () {
    SiteSetting::query()->firstOrFail()->update([
        'logo_path' => 'branding/logo.png',
        'hero_video_path' => 'hero/homepage.webm',
        'hero_fallback_image_path' => 'hero/homepage.jpg',
    ]);

    Page::query()->where('slug', 'profil')->firstOrFail()->update([
        'featured_image_path' => 'pages/profil.jpg',
    ]);

    Post::query()->where('slug', 'peluncuran-website-profil-pesantren')->firstOrFail()->update([
        'featured_image_path' => 'posts/berita.jpg',
    ]);

    StudentWork::query()->where('slug', 'esai-refleksi-kehidupan-santri')->firstOrFail()->update([
        'featured_image_path' => 'student-works/karya.jpg',
        'attachment_path' => 'student-works/lampiran.pdf',
    ]);

    GalleryAlbum::query()->where('slug', 'kegiatan-asrama')->firstOrFail()->update([
        'cover_image_path' => 'gallery/cover.jpg',
    ]);

    $this->get(route('home'))
        ->assertOk()
        ->assertSee('storage/branding/logo.png')
        ->assertSee('storage/hero/homepage.webm')
        ->assertSee('storage/hero/homepage.jpg')
        ->assertSee('type="video/webm"', false)
        ->assertSee('storage/gallery/cover.jpg');

    $this->get(route('profil.show'))
        ->assertOk()
        ->assertSee('storage/pages/profil.jpg');

    $this->get(route('berita.show', 'peluncuran-website-profil-pesantren'))
        ->assertOk()
        ->assertSee('storage/posts/berita.jpg');

    $this->get(route('karya-santri.show', 'esai-refleksi-kehidupan-santri'))
        ->assertOk()
        ->assertSee('storage/student-works/karya.jpg')
        ->assertSee('storage/student-works/lampiran.pdf');

    $this->get(route('galeri.show', 'kegiatan-asrama'))
        ->assertOk()
        ->assertSee('storage/gallery/cover.jpg')
        ->assertSee('storage/gallery/kegiatan-asrama-1.jpg');
});

test('public pages render stored rich text with paragraphs', function () {
    Post::query()->where('slug', 'peluncuran-website-profil-pesantren')->firstOrFail()->update([
        'content' => '<h2>Judul Bagian</h2><p>Paragraf pertama.</p><p>Paragraf kedua.</p>',
    ]);

    Page::query()->where('slug', 'profil')->firstOrFail()->update([
        'content' => '<div>Baris pertama</div><div>Baris kedua</div><div>Baris ketiga</div>',
    ]);

    StudentWork::query()->where('slug', 'esai-refleksi-kehidupan-santri')->firstOrFail()->update([
        'content' => '<div>Paragraf karya pertama.</div><div>Paragraf karya kedua.</div>',
    ]);

    $this->get(route('berita.show', 'peluncuran-website-profil-pesantren'))
        ->assertOk()
        ->assertSee('<h2>Judul Bagian</h2>', false)
        ->assertSee('<p>Paragraf pertama.</p>', false);

    $this->get(route('profil.show'))
        ->assertOk()
        ->assertSee('<p>Baris pertama</p>', false)
        ->assertSee('<p>Baris ketiga</p>', false);

    $this->get(route('karya-santri.show', 'esai-refleksi-kehidupan-santri'))
        ->assertOk()
        ->assertSee('<p>Paragraf karya pertama.</p>', false)
        ->assertSee('<p>Paragraf karya kedua.</p>', false);
});

test('homepage preview cards render plain text instead of raw rich text tags', function () {
    Post::query()->where('slug', 'peluncuran-website-profil-pesantren')->firstOrFail()->update([
        'excerpt' => null,
        'content' => '<p>Preview berita homepage.</p>',
    ]);

    StudentWork::query()->where('slug', 'esai-refleksi-kehidupan-santri')->firstOrFail()->update([
        'excerpt' => null,
        'content' => '<p>Preview karya homepage.</p>',
    ]);

    Page::query()->where('slug', 'profil')->firstOrFail()->update([
        'content' => '<p>Preview profil homepage.</p>',
    ]);

    $this->get(route('home'))
        ->assertOk()
        ->assertSee('Preview berita homepage.')
        ->assertSee('Preview karya homepage.')
        ->assertSee('Preview profil homepage.')
        ->assertDontSee('&lt;p&gt;Preview berita homepage.&lt;/p&gt;', false)
        ->assertDontSee('&lt;p&gt;Preview karya homepage.&lt;/p&gt;', false)
        ->assertDontSee('&lt;p&gt;Preview profil homepage.&lt;/p&gt;', false);
});
