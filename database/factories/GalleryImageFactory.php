<?php

namespace Database\Factories;

use App\Models\GalleryAlbum;
use App\Models\GalleryImage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<GalleryImage>
 */
class GalleryImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'gallery_album_id' => GalleryAlbum::factory(),
            'image_path' => 'gallery/'.fake()->uuid().'.jpg',
            'caption' => fake()->sentence(),
            'alt_text' => fake()->words(5, true),
            'sort_order' => fake()->numberBetween(0, 20),
        ];
    }
}
