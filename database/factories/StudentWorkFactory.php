<?php

namespace Database\Factories;

use App\Models\StudentWork;
use App\Models\User;
use App\Models\WorkCategory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<StudentWork>
 */
class StudentWorkFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = Str::title(fake()->unique()->sentence(3));

        return [
            'work_category_id' => WorkCategory::factory(),
            'user_id' => User::factory(),
            'title' => $title,
            'slug' => Str::slug($title),
            'author_name' => fake()->name(),
            'excerpt' => fake()->sentence(),
            'content' => fake()->paragraphs(4, true),
            'featured_image_path' => null,
            'attachment_path' => null,
            'status' => 'draft',
            'published_at' => null,
        ];
    }

    /**
     * Indicate that the student work has been published.
     */
    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'published',
            'published_at' => now(),
        ]);
    }
}
