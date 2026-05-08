<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class SiteSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SiteSetting::query()->updateOrCreate(
            ['site_name' => "Pondok Pesantren Mathali'ul Anwar"],
            [
                'site_tagline' => 'Membina ilmu, adab, dan akhlak santri untuk masa depan umat.',
                'site_description' => 'Pondok Pesantren Mathali\'ul Anwar hadir sebagai ruang pendidikan yang menautkan tradisi keilmuan, pembinaan karakter, dan semangat berkarya dalam lingkungan yang tertata.',
                'logo_path' => null,
                'hero_video_path' => null,
                'hero_fallback_image_path' => null,
                'address' => 'Jl. Kartini Gg. VI No.05, Pangarangan, Kec. Kota Sumenep, Kabupaten Sumenep, Jawa Timur 69417',
                'phone' => '0813-3685-7778',
                'whatsapp_number' => '0813-3685-7778',
                'email' => 'mathaliulanwar1@gmail.com',
                'google_maps_embed' => null,
                'social_links' => [
                    'facebook' => 'https://www.facebook.com/p.p.mathaliulanwar',
                    'instagram' => 'https://www.instagram.com/mathaliul.anwar/',
                    'youtube' => 'https://www.youtube.com/@pp.mathaliulanwar285',
                ],
            ],
        );
    }
}
