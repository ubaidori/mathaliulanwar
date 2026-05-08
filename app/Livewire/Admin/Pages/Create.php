<?php

namespace App\Livewire\Admin\Pages;

use App\Livewire\Forms\PageForm;
use Illuminate\Support\Str;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithFileUploads;

#[Title('Tambah Halaman')]
class Create extends Component
{
    use WithFileUploads;

    public PageForm $form;

    public $featuredImageUpload = null;

    public function syncSlug(): void
    {
        $this->form->slug = Str::slug($this->form->title);
    }

    public function save(): void
    {
        $this->storeFeaturedImage();

        $this->form->store();

        session()->flash('status', 'Halaman baru berhasil dibuat.');

        $this->redirectRoute('admin.pages.index');
    }

    public function removeFeaturedImage(): void
    {
        $this->featuredImageUpload = null;
        $this->form->featured_image_path = '';
    }

    public function render()
    {
        return view('livewire.admin.pages.create');
    }

    private function storeFeaturedImage(): void
    {
        $this->validate(
            [
                'featuredImageUpload' => ['nullable', 'image', 'max:4096'],
            ],
            [
                'featuredImageUpload.image' => 'Gambar utama halaman harus berupa gambar yang valid.',
                'featuredImageUpload.max' => 'Gambar utama halaman maksimal 4 MB.',
            ],
            [
                'featuredImageUpload' => 'gambar utama halaman',
            ],
        );

        if ($this->featuredImageUpload) {
            $this->form->featured_image_path = $this->featuredImageUpload->store('pages', 'public');
        }
    }
}
