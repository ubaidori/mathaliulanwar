<?php

namespace App\Livewire\Admin\Pages;

use App\Livewire\Forms\PageForm;
use App\Models\Page;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithFileUploads;

#[Title('Edit Halaman')]
class Edit extends Component
{
    use WithFileUploads;

    public PageForm $form;

    public $featuredImageUpload = null;

    public function mount(Page $page): void
    {
        $this->form->setPage($page);
    }

    public function syncSlug(): void
    {
        $this->form->slug = Str::slug($this->form->title);
    }

    public function save(): void
    {
        $this->storeFeaturedImage();

        $this->form->update();

        session()->flash('status', 'Perubahan halaman berhasil disimpan.');

        $this->redirectRoute('admin.pages.index');
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
        return view('livewire.admin.pages.edit');
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
            if (filled($this->form->featured_image_path)) {
                Storage::disk('public')->delete($this->form->featured_image_path);
            }

            $this->form->featured_image_path = $this->featuredImageUpload->store('pages', 'public');
        }
    }
}
