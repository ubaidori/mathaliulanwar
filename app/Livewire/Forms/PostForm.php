<?php

namespace App\Livewire\Forms;

use App\Models\Post;
use App\Models\User;
use App\Support\RichText;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Livewire\Attributes\Validate;
use Livewire\Form;

class PostForm extends Form
{
    public ?Post $post = null;

    public ?int $post_category_id = null;

    #[Validate]
    public string $title = '';

    #[Validate]
    public string $slug = '';

    public string $excerpt = '';

    public string $content = '';

    public string $featured_image_path = '';

    public string $status = 'draft';

    /**
     * @return array<string, mixed>
     */
    protected function rules(): array
    {
        return [
            'post_category_id' => ['nullable', 'exists:post_categories,id'],
            'title' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                Rule::unique('posts', 'slug')->ignore($this->post),
            ],
            'excerpt' => ['nullable', 'string'],
            'content' => ['required', 'string'],
            'featured_image_path' => ['nullable', 'string', 'max:255'],
            'status' => ['required', Rule::in(['draft', 'published'])],
        ];
    }

    public function setPost(Post $post): void
    {
        $this->post = $post;
        $this->post_category_id = $post->post_category_id;
        $this->title = $post->title;
        $this->slug = $post->slug;
        $this->excerpt = $post->excerpt ?? '';
        $this->content = $post->content ?? '';
        $this->featured_image_path = $post->featured_image_path ?? '';
        $this->status = $post->status;
    }

    public function store(User $user): Post
    {
        $post = Post::create([
            ...$this->validatedPayload(),
            'user_id' => $user->id,
        ]);

        $this->post = $post;

        return $post;
    }

    public function update(): void
    {
        $this->post?->update($this->validatedPayload());
    }

    /**
     * @return array<string, mixed>
     */
    private function validatedPayload(): array
    {
        $validated = $this->validate();

        $slug = Str::slug($validated['slug'] ?: $validated['title']);
        $status = $validated['status'];

        return [
            'post_category_id' => $validated['post_category_id'],
            'title' => $validated['title'],
            'slug' => $slug,
            'excerpt' => $validated['excerpt'] ?: null,
            'content' => RichText::sanitize($validated['content']),
            'featured_image_path' => $validated['featured_image_path'] ?: null,
            'status' => $status,
            'published_at' => $status === 'published'
                ? ($this->post?->published_at ?? now())
                : null,
        ];
    }
}
