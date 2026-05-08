<?php

namespace App\Livewire\Admin\Posts;

use App\Livewire\Forms\PostForm;
use App\Models\PostCategory;
use Illuminate\Support\Str;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithFileUploads;

#[Title('Tambah Berita')]
class Create extends Component
{
    use WithFileUploads;

    public PostForm $form;

    public $featuredImageUpload = null;

    public function syncSlug(): void
    {
        $this->form->slug = Str::slug($this->form->title);
    }

    public function save(): void
    {
        $this->storeFeaturedImage();

        $this->form->store(auth()->user());

        session()->flash('status', 'Berita baru berhasil dibuat.');

        $this->redirectRoute('admin.posts.index');
    }

    public function removeFeaturedImage(): void
    {
        $this->featuredImageUpload = null;
        $this->form->featured_image_path = '';
    }

    public function render()
    {
        return view('livewire.admin.posts.create', [
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
            $this->form->featured_image_path = $this->featuredImageUpload->store('posts', 'public');
        }
    }
}
