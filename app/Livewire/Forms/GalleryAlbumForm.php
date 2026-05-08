<?php

namespace App\Livewire\Forms;

use App\Models\GalleryAlbum;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Livewire\Attributes\Validate;
use Livewire\Form;

class GalleryAlbumForm extends Form
{
    public ?GalleryAlbum $album = null;

    #[Validate]
    public string $title = '';

    #[Validate]
    public string $slug = '';

    public string $description = '';

    public string $cover_image_path = '';

    public string $event_date = '';

    public string $status = 'draft';

    /**
     * @var array<int, array{image_path: string, caption: string, alt_text: string, sort_order: int}>
     */
    public array $images = [];

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
                Rule::unique('gallery_albums', 'slug')->ignore($this->album),
            ],
            'description' => ['nullable', 'string'],
            'cover_image_path' => ['nullable', 'string', 'max:255'],
            'event_date' => ['nullable', 'date'],
            'status' => ['required', Rule::in(['draft', 'published'])],
            'images' => ['array'],
            'images.*.image_path' => ['nullable', 'string', 'max:255'],
            'images.*.caption' => ['nullable', 'string'],
            'images.*.alt_text' => ['nullable', 'string', 'max:255'],
            'images.*.sort_order' => ['required', 'integer', 'min:0'],
        ];
    }

    public function setAlbum(GalleryAlbum $album): void
    {
        $this->album = $album;
        $this->title = $album->title;
        $this->slug = $album->slug;
        $this->description = $album->description ?? '';
        $this->cover_image_path = $album->cover_image_path ?? '';
        $this->event_date = $album->event_date?->format('Y-m-d') ?? '';
        $this->status = $album->status;
        $this->images = $album->images()
            ->orderBy('sort_order')
            ->get()
            ->map(fn ($image) => [
                'image_path' => $image->image_path,
                'caption' => $image->caption ?? '',
                'alt_text' => $image->alt_text ?? '',
                'sort_order' => (int) $image->sort_order,
            ])
            ->all();
    }

    public function addImage(): void
    {
        $this->images[] = [
            'image_path' => '',
            'caption' => '',
            'alt_text' => '',
            'sort_order' => count($this->images) + 1,
        ];
    }

    public function removeImage(int $index): void
    {
        unset($this->images[$index]);

        $this->images = array_values($this->images);

        foreach ($this->images as $imageIndex => $image) {
            $this->images[$imageIndex]['sort_order'] = $imageIndex + 1;
        }
    }

    public function store(): GalleryAlbum
    {
        $album = GalleryAlbum::create($this->validatedPayload());

        $this->syncImages($album);
        $this->album = $album;

        return $album;
    }

    public function update(): void
    {
        $this->album?->update($this->validatedPayload());

        if ($this->album) {
            $this->syncImages($this->album);
        }
    }

    /**
     * @return array<string, mixed>
     */
    private function validatedPayload(): array
    {
        $validated = $this->validate();
        $status = $validated['status'];

        return [
            'title' => $validated['title'],
            'slug' => Str::slug($validated['slug'] ?: $validated['title']),
            'description' => $validated['description'] ?: null,
            'cover_image_path' => $validated['cover_image_path'] ?: null,
            'event_date' => $validated['event_date'] ?: null,
            'status' => $status,
            'published_at' => $status === 'published'
                ? ($this->album?->published_at ?? now())
                : null,
        ];
    }

    private function syncImages(GalleryAlbum $album): void
    {
        $imagesToPersist = collect($this->images)
            ->map(fn (array $image): array => [
                'image_path' => trim($image['image_path'] ?? ''),
                'caption' => trim($image['caption'] ?? ''),
                'alt_text' => trim($image['alt_text'] ?? ''),
                'sort_order' => (int) ($image['sort_order'] ?? 0),
            ])
            ->filter(fn (array $image): bool => filled($image['image_path']))
            ->values();

        $existingImages = $album->images()->get()->keyBy('id');
        $existingPaths = $existingImages->pluck('image_path')->filter()->all();
        $incomingPaths = $imagesToPersist
            ->pluck('image_path')
            ->filter()
            ->all();

        foreach (array_diff($existingPaths, $incomingPaths) as $deletedPath) {
            Storage::disk('public')->delete($deletedPath);
        }

        $album->images()->delete();

        foreach ($imagesToPersist as $image) {
            $album->images()->create([
                'image_path' => $image['image_path'],
                'caption' => $image['caption'] ?: null,
                'alt_text' => $image['alt_text'] ?: null,
                'sort_order' => $image['sort_order'],
            ]);
        }
    }
}
