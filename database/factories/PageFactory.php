<?php

namespace Database\Factories;

use App\Models\Page;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Page>
 */
class PageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = Str::title(fake()->unique()->words(2, true));

        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'excerpt' => fake()->sentence(),
            'content' => fake()->paragraphs(3, true),
            'featured_image_path' => null,
            'meta_title' => $title,
            'meta_description' => fake()->sentence(),
            'status' => 'draft',
            'sort_order' => fake()->numberBetween(0, 10),
            'published_at' => null,
        ];
    }

    /**
     * Indicate that the page has been published.
     */
    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'published',
            'published_at' => now(),
        ]);
    }
}
