<?php

namespace Database\Factories;

use App\Models\SiteSetting;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<SiteSetting>
 */
class SiteSettingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'site_name' => "Pondok Pesantren Mathali'ul Anwar",
            'site_tagline' => 'Membina ilmu, adab, dan akhlak santri.',
            'site_description' => fake()->paragraph(),
            'logo_path' => null,
            'hero_video_path' => null,
            'hero_fallback_image_path' => null,
            'hero_primary_cta_label' => 'Lihat Profil',
            'hero_primary_cta_url' => 'http://127.0.0.1:8000/profil',
            'hero_secondary_cta_label' => 'Lihat Berita',
            'hero_secondary_cta_url' => 'http://127.0.0.1:8000/berita',
            'address' => fake()->address(),
            'phone' => fake()->phoneNumber(),
            'whatsapp_number' => fake()->e164PhoneNumber(),
            'email' => fake()->safeEmail(),
            'google_maps_embed' => null,
            'social_links' => [
                'facebook' => null,
                'instagram' => null,
                'youtube' => null,
            ],
        ];
    }
}
