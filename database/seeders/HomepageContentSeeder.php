<?php

namespace Database\Seeders;

use App\Models\GalleryAlbum;
use App\Models\GalleryImage;
use App\Models\Page;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\StudentWork;
use App\Models\User;
use App\Models\WorkCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class HomepageContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::query()->firstOrCreate(
            ['email' => 'admin@mathaliulanwar.test'],
            [
                'name' => 'Admin Mathali\'ul Anwar',
                'role' => 'admin',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
            ],
        );

        collect([
            [
                'title' => 'Profil',
                'slug' => 'profil',
                'excerpt' => 'Mengenal sejarah, visi misi, pendiri, struktur organisasi, dan fasilitas pesantren.',
                'content' => 'Pondok Pesantren Mathali\'ul Anwar dikembangkan sebagai ruang pendidikan yang menyeimbangkan tradisi keilmuan, pembinaan akhlak, dan kesiapan santri menghadapi tantangan zaman.',
                'status' => 'published',
                'sort_order' => 1,
                'published_at' => now(),
            ],
            [
                'title' => 'Visi Misi',
                'slug' => 'visi-misi',
                'excerpt' => 'Arah perjuangan pesantren dalam membina ilmu, akhlak, dan kontribusi sosial santri.',
                'content' => 'Halaman ini dapat diisi visi dan misi resmi Pondok Pesantren Mathali\'ul Anwar melalui admin agar tetap sesuai perkembangan lembaga.',
                'status' => 'published',
                'sort_order' => 2,
                'published_at' => now(),
            ],
            [
                'title' => 'Pendiri',
                'slug' => 'pendiri',
                'excerpt' => 'Ruang untuk mengenalkan tokoh pendiri, latar belakang, dan warisan nilai yang ditanamkan.',
                'content' => 'Halaman ini dapat diisi profil pendiri pesantren, perjalanan dakwah, serta nilai-nilai dasar yang diwariskan kepada generasi santri.',
                'status' => 'published',
                'sort_order' => 3,
                'published_at' => now(),
            ],
            [
                'title' => 'Sejarah',
                'slug' => 'sejarah',
                'excerpt' => 'Jejak pertumbuhan pesantren dari masa ke masa sebagai bagian dari identitas lembaga.',
                'content' => 'Halaman ini dapat diisi sejarah berdirinya pesantren, tonggak perkembangan, dan fase-fase penting yang membentuk Mathali\'ul Anwar hari ini.',
                'status' => 'published',
                'sort_order' => 4,
                'published_at' => now(),
            ],
            [
                'title' => 'Pendidikan',
                'slug' => 'pendidikan',
                'excerpt' => 'Program pendidikan dirancang untuk membina pemahaman agama, akademik, dan karakter secara terpadu.',
                'content' => 'Section pendidikan akan menjadi ruang untuk menjelaskan jenjang, program unggulan, kegiatan pembelajaran, dan pembinaan keseharian santri.',
                'status' => 'published',
                'sort_order' => 5,
                'published_at' => now(),
            ],
            [
                'title' => 'Struktur',
                'slug' => 'struktur',
                'excerpt' => 'Menjelaskan susunan kepemimpinan dan pembagian peran dalam pengelolaan pesantren.',
                'content' => 'Halaman ini dapat diisi struktur organisasi pesantren, penanggung jawab unit, dan jalur koordinasi yang berlaku di lembaga.',
                'status' => 'published',
                'sort_order' => 6,
                'published_at' => now(),
            ],
        ])->each(fn (array $page) => Page::query()->updateOrCreate(
            ['slug' => $page['slug']],
            $page,
        ));

        $postCategories = PostCategory::query()->get()->keyBy('slug');
        $workCategories = WorkCategory::query()->get()->keyBy('slug');

        collect([
            [
                'slug' => 'peluncuran-website-profil-pesantren',
                'post_category_id' => $postCategories['pengumuman']?->id,
                'title' => 'Peluncuran Website Profil Pesantren',
                'excerpt' => 'Website resmi mulai disiapkan sebagai pusat informasi terintegrasi bagi masyarakat, wali santri, dan mitra.',
            ],
            [
                'slug' => 'santri-gelar-bakti-lingkungan-bersama',
                'post_category_id' => $postCategories['kegiatan-pesantren']?->id,
                'title' => 'Santri Gelar Bakti Lingkungan Bersama',
                'excerpt' => 'Kegiatan kebersamaan santri memperkuat disiplin, tanggung jawab, dan kepedulian sosial di lingkungan pesantren.',
            ],
            [
                'slug' => 'prestasi-santri-di-ajang-literasi',
                'post_category_id' => $postCategories['prestasi']?->id,
                'title' => 'Prestasi Santri di Ajang Literasi',
                'excerpt' => 'Karya tulis santri menjadi langkah awal untuk menampilkan ruang apresiasi yang lebih luas melalui website resmi.',
            ],
        ])->each(function (array $post) use ($admin): void {
            Post::query()->updateOrCreate(
                ['slug' => $post['slug']],
                [
                    'post_category_id' => $post['post_category_id'],
                    'user_id' => $admin->id,
                    'title' => $post['title'],
                    'excerpt' => $post['excerpt'],
                    'content' => $post['excerpt'].' Konten lengkap berita dapat dikembangkan pada tahap berikutnya dengan halaman detail dan kategori.',
                    'featured_image_path' => null,
                    'status' => 'published',
                    'published_at' => now(),
                ],
            );
        });

        collect([
            [
                'slug' => 'esai-refleksi-kehidupan-santri',
                'work_category_id' => $workCategories['mading']?->id,
                'title' => 'Esai Refleksi Kehidupan Santri',
                'author_name' => 'Ahmad Fauzi',
                'excerpt' => 'Tulisan reflektif tentang disiplin, kebersamaan, dan pengalaman belajar di lingkungan pesantren.',
            ],
            [
                'slug' => 'poster-adab-menuntut-ilmu',
                'work_category_id' => $workCategories['kaligrafi']?->id,
                'title' => 'Poster Adab Menuntut Ilmu',
                'author_name' => 'Siti Nuraini',
                'excerpt' => 'Karya visual yang merangkum nilai adab dan semangat belajar sebagai identitas santri.',
            ],
            [
                'slug' => 'media-ringkas-materi-fikih',
                'work_category_id' => $workCategories['karya-ilmiah']?->id,
                'title' => 'Media Ringkas Materi Fikih',
                'author_name' => 'Muhammad Rafi',
                'excerpt' => 'Media pembelajaran sederhana yang membantu santri memahami materi inti secara lebih visual.',
            ],
        ])->each(function (array $work) use ($admin): void {
            StudentWork::query()->updateOrCreate(
                ['slug' => $work['slug']],
                [
                    'work_category_id' => $work['work_category_id'],
                    'user_id' => $admin->id,
                    'title' => $work['title'],
                    'author_name' => $work['author_name'],
                    'excerpt' => $work['excerpt'],
                    'content' => $work['excerpt'].' Detail karya dan lampiran file dapat dikembangkan lebih lanjut dari panel admin.',
                    'featured_image_path' => null,
                    'attachment_path' => null,
                    'status' => 'published',
                    'published_at' => now(),
                ],
            );
        });

        collect([
            [
                'slug' => 'kegiatan-asrama',
                'title' => 'Kegiatan Asrama dan Pembinaan Harian',
                'description' => 'Dokumentasi suasana kebersamaan, pembinaan, dan aktivitas keseharian santri.',
            ],
            [
                'slug' => 'momen-pembelajaran',
                'title' => 'Momen Pembelajaran Santri',
                'description' => 'Potret ruang belajar yang menggambarkan ritme pendidikan di lingkungan pesantren.',
            ],
            [
                'slug' => 'agenda-kebersamaan',
                'title' => 'Agenda Kebersamaan Pesantren',
                'description' => 'Ruang dokumentasi untuk kegiatan besar, acara khusus, dan momen penting pesantren.',
            ],
        ])->each(function (array $album): void {
            $galleryAlbum = GalleryAlbum::query()->updateOrCreate(
                ['slug' => $album['slug']],
                [
                    'title' => $album['title'],
                    'description' => $album['description'],
                    'cover_image_path' => null,
                    'event_date' => now()->toDateString(),
                    'status' => 'published',
                    'published_at' => now(),
                ],
            );

            collect([
                ['image_path' => 'gallery/'.$album['slug'].'-1.jpg', 'caption' => 'Dokumentasi utama album', 'alt_text' => $album['title'].' 1', 'sort_order' => 1],
                ['image_path' => 'gallery/'.$album['slug'].'-2.jpg', 'caption' => 'Dokumentasi pendukung album', 'alt_text' => $album['title'].' 2', 'sort_order' => 2],
            ])->each(fn (array $image) => GalleryImage::query()->updateOrCreate(
                [
                    'gallery_album_id' => $galleryAlbum->id,
                    'image_path' => $image['image_path'],
                ],
                $image,
            ));
        });
    }
}
