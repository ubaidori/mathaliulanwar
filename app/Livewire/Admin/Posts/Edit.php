<?php

namespace App\Livewire\Admin\Posts;

use App\Livewire\Forms\PostForm;
use App\Models\Post;
use App\Models\PostCategory;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithFileUploads;

#[Title('Edit Berita')]
class Edit extends Component
{
    use WithFileUploads;

    public PostForm $form;

    public $featuredImageUpload = null;

    public function mount(Post $post): void
    {
        $this->form->setPost($post);
    }

    public function syncSlug(): void
    {
        $this->form->slug = Str::slug($this->form->title);
    }

    public function save(): void
    {
        $this->storeFeaturedImage();

        $this->form->update();

        session()->flash('status', 'Perubahan berita berhasil disimpan.');

        $this->redirectRoute('admin.posts.index');
    }

    public function removeFeaturedImage(): void
    {
        if (filled($this->form->featured_image_path)) {
            Storage::disk('public')->delete($this->form->featured_image_path);
        }

        $this->featuredImageUpload = null;
        $this->form->featured_image_path = '';
    }

    public function render()
    {
        return view('livewire.admin.posts.edit', [
            'categories' => PostCategory::query()->orderBy('name')->get(),
        ]);
    }

    private function storeFeaturedImage(): void
    {
        $this->validate(
            [
                'featuredImageUpload' => ['nullable', 'image', 'max:4096'],
            ],
            [
                'featuredImageUpload.image' => 'Featured image berita harus berupa gambar yang valid.',
                'featuredImageUpload.max' => 'Featured image berita maksimal 4 MB.',
            ],
            [
                'featuredImageUpload' => 'featured image berita',
            ],
        );

        if ($this->featuredImageUpload) {
            if (filled($this->form->featured_image_path)) {
                Storage::disk('public')->delete($this->form->featured_image_path);
            }

            $this->form->featured_image_path = $this->featuredImageUpload->store('posts', 'public');
        }
    }
}
