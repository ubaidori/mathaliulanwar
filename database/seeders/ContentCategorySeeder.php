<?php

namespace Database\Seeders;

use App\Models\PostCategory;
use App\Models\WorkCategory;
use Illuminate\Database\Seeder;

class ContentCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'name' => 'Berita',
                'slug' => 'berita',
                'description' => 'Informasi terkini seputar kegiatan, prestasi, dan perkembangan pesantren.',
            ],
            [
                'name' => 'Kegiatan Pesantren',
                'slug' => 'kegiatan-pesantren',
                'description' => 'Informasi kegiatan utama dan agenda pesantren.',
            ],
            [
                'name' => 'Pengumuman',
                'slug' => 'pengumuman',
                'description' => 'Informasi resmi dan pengumuman terbaru.',
            ],
            [
                'name' => 'Prestasi',
                'slug' => 'prestasi',
                'description' => 'Kabar capaian dan prestasi santri maupun lembaga.',
            ],
            [
                'name' => 'Artikel',
                'slug' => 'artikel',
                'description' => 'Artikel informatif dan edukatif tentang pesantren.',
            ],
            [
                'name' => 'Opini',
                'slug' => 'opini',
                'description' => 'Tulisan-tulisan pribadi dan pandangan tentang isu-isu terkait pesantren.',
            ],
            [
                'name' => 'Islami',
                'slug' => 'islami',
                'description' => 'Konten yang berkaitan dengan aspek keislaman dan pembelajaran agama.',
            ],
        ])->each(fn (array $category) => PostCategory::query()->updateOrCreate(
            ['slug' => $category['slug']],
            $category,
        ));

        collect([
            [
                'name' => 'Mading',
                'slug' => 'mading',
                'description' => 'Majalah dinding dan karya kreatif yang dipajang di lingkungan pesantren.',
            ],
            [
                'name' => 'Puisi',
                'slug' => 'puisi',
                'description' => 'puisi-puisi karya santri',
            ],
            [
                'name' => 'Cerpen',
                'slug' => 'cerpen',
                'description' => 'Cerita pendek karya santri.',
            ],
            [
                'name' => 'Kaligrafi',
                'slug' => 'kaligrafi',
                'description' => 'Karya kaligrafi karya santri.',
            ],
            [
                'name' => 'Karya Ilmiah',
                'slug' => 'karya-ilmiah',
                'description' => 'Karya ilmiah santri.',
            ],
            [
                'name' => 'Bahtsul Masail',
                'slug' => 'bahtsul-masail',
                'description' => 'Bahtsul masail pesantren.',
            ],
            [
                'name' => 'Opini',
                'slug' => 'opini',
                'description' => 'Tulisan-tulisan pribadi dan pandangan tentang isu-isu terkait pesantren.',
            ],
            [
                'name' => 'Artikel',
                'slug' => 'artikel',
                'description' => 'Artikel informatif dan edukatif karya santri.',
            ],
            [
                'name' => 'Anekdot',
                'slug' => 'anekdot',
                'description' => 'Anekdot karya santri.',
            ],
            [
                'name' => 'Terjemah Kitab',
                'slug' => 'terjemah-kitab',
                'description' => 'Terjemahan kitab-kitab keilmuan.',
            ],
        ])->each(fn (array $category) => WorkCategory::query()->updateOrCreate(
            ['slug' => $category['slug']],
            $category,
        ));
    }
}
