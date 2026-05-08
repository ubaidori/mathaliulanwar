<?php

namespace App\Livewire\Forms;

use App\Models\Page;
use App\Support\RichText;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Livewire\Attributes\Validate;
use Livewire\Form;

class PageForm extends Form
{
    public ?Page $page = null;

    #[Validate]
    public string $title = '';

    #[Validate]
    public string $slug = '';

    public string $excerpt = '';

    public string $content = '';

    public string $featured_image_path = '';

    public string $meta_title = '';

    public string $meta_description = '';

    public string $status = 'draft';

    public int $sort_order = 0;

    /**
     * @return array<string, mixed>
     */
    protected function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                Rule::unique('pages', 'slug')->ignore($this->page),
            ],
            'excerpt' => ['nullable', 'string'],
            'content' => ['required', 'string'],
            'featured_image_path' => ['nullable', 'string', 'max:255'],
            'meta_title' => ['nullable', 'string', 'max:255'],
            'meta_description' => ['nullable', 'string'],
            'status' => ['required', Rule::in(['draft', 'published'])],
            'sort_order' => ['required', 'integer', 'min:0'],
        ];
    }

    public function setPage(Page $page): void
    {
        $this->page = $page;
        $this->title = $page->title;
        $this->slug = $page->slug;
        $this->excerpt = $page->excerpt ?? '';
        $this->content = $page->content ?? '';
        $this->featured_image_path = $page->featured_image_path ?? '';
        $this->meta_title = $page->meta_title ?? '';
        $this->meta_description = $page->meta_description ?? '';
        $this->status = $page->status;
        $this->sort_order = $page->sort_order;
    }

    public function store(): Page
    {
        $page = Page::create($this->validatedPayload());

        $this->page = $page;

        return $page;
    }

    public function update(): void
    {
        $this->page?->update($this->validatedPayload());
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
            'title' => $validated['title'],
            'slug' => $slug,
            'excerpt' => $validated['excerpt'] ?: null,
            'content' => RichText::sanitize($validated['content']),
            'featured_image_path' => $validated['featured_image_path'] ?: null,
            'meta_title' => $validated['meta_title'] ?: null,
            'meta_description' => $validated['meta_description'] ?: null,
            'status' => $status,
            'sort_order' => $validated['sort_order'],
            'published_at' => $status === 'published'
                ? ($this->page?->published_at ?? now())
                : null,
        ];
    }
}
