<?php

namespace App\Livewire\Admin\Gallery;

use App\Livewire\Forms\GalleryAlbumForm;
use Illuminate\Support\Str;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithFileUploads;

#[Title('Tambah Album Galeri')]
class Create extends Component
{
    use WithFileUploads;

    public GalleryAlbumForm $form;

    public $coverImageUpload = null;

    public array $galleryImageUploads = [];

    public function mount(): void
    {
        $this->form->addImage();
    }

    public function syncSlug(): void
    {
        $this->form->slug = Str::slug($this->form->title);
    }

    public function addImage(): void
    {
        $this->form->addImage();
    }

    public function removeImage(int $index): void
    {
        $this->form->removeImage($index);
        unset($this->galleryImageUploads[$index]);
        $this->galleryImageUploads = array_values($this->galleryImageUploads);
    }

    public function save(): void
    {
        $this->storeUploads();

        $this->form->store();

        session()->flash('status', 'Album galeri berhasil dibuat.');

        $this->redirectRoute('admin.gallery.index');
    }

    public function removeCoverImage(): void
    {
        $this->coverImageUpload = null;
        $this->form->cover_image_path = '';
    }

    public function clearGalleryImageUpload(int $index): void
    {
        unset($this->galleryImageUploads[$index]);
        $this->galleryImageUploads = array_values($this->galleryImageUploads);
    }

    public function removeStoredGalleryImage(int $index): void
    {
        $this->clearGalleryImageUpload($index);
        $this->form->removeImage($index);
    }

    public function render()
    {
        return view('livewire.admin.gallery.create');
    }

    private function storeUploads(): void
    {
        $this->validate(
            [
                'coverImageUpload' => ['nullable', 'image', 'max:4096'],
                'galleryImageUploads.*' => ['nullable', 'image', 'max:4096'],
            ],
            [
                'coverImageUpload.image' => 'Cover album harus berupa gambar yang valid.',
                'coverImageUpload.max' => 'Cover album maksimal 4 MB.',
                'galleryImageUploads.*.image' => 'Gambar album harus berupa gambar yang valid.',
                'galleryImageUploads.*.max' => 'Setiap gambar album maksimal 4 MB.',
            ],
            [
                'coverImageUpload' => 'cover album',
                'galleryImageUploads.*' => 'gambar album',
            ],
        );

        if ($this->coverImageUpload) {
            $this->form->cover_image_path = $this->coverImageUpload->store('gallery', 'public');
        }

        foreach ($this->galleryImageUploads as $index => $upload) {
            if ($upload) {
                $this->form->images[$index]['image_path'] = $upload->store('gallery', 'public');
            }
        }
    }
}
