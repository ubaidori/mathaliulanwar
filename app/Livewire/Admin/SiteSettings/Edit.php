<?php

namespace App\Livewire\Admin\SiteSettings;

use App\Livewire\Forms\SiteSettingForm;
use App\Models\SiteSetting;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\File;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithFileUploads;

#[Title('Pengaturan Website')]
class Edit extends Component
{
    use WithFileUploads;

    public SiteSettingForm $form;

    public $logoUpload = null;

    public $heroVideoUpload = null;

    public $heroFallbackImageUpload = null;

    public function mount(): void
    {
        $siteSetting = SiteSetting::query()->first() ?? SiteSetting::query()->create([
            'site_name' => "Pondok Pesantren Mathali'ul Anwar",
        ]);

        $this->form->setSiteSetting($siteSetting);
    }

    public function save(): void
    {
        $this->storeUploads();

        $this->form->save();

        session()->flash('status', 'Pengaturan situs berhasil diperbarui.');
    }

    public function removeLogo(): void
    {
        if (filled($this->form->logo_path)) {
            Storage::disk('public')->delete($this->form->logo_path);
        }

        $this->logoUpload = null;
        $this->form->logo_path = '';
    }

    public function removeHeroVideo(): void
    {
        if (filled($this->form->hero_video_path)) {
            Storage::disk('public')->delete($this->form->hero_video_path);
        }

        $this->heroVideoUpload = null;
        $this->form->hero_video_path = '';
    }

    public function removeHeroFallbackImage(): void
    {
        if (filled($this->form->hero_fallback_image_path)) {
            Storage::disk('public')->delete($this->form->hero_fallback_image_path);
        }

        $this->heroFallbackImageUpload = null;
        $this->form->hero_fallback_image_path = '';
    }

    public function render()
    {
        return view('livewire.admin.site-settings.edit');
    }

    private function storeUploads(): void
    {
        $this->validate(
            [
                'logoUpload' => ['nullable', 'image', 'max:4096'],
                'heroVideoUpload' => [
                    'nullable',
                    File::types(['mp4', 'webm', 'mov'])->max(51200),
                ],
                'heroFallbackImageUpload' => ['nullable', 'image', 'max:4096'],
            ],
            [
                'logoUpload.image' => 'Logo situs harus berupa gambar yang valid.',
                'logoUpload.max' => 'Logo situs maksimal 4 MB.',
                'heroVideoUpload.file' => 'Video hero harus berupa file yang valid.',
                'heroVideoUpload.max' => 'Video hero maksimal 50 MB.',
                'heroVideoUpload.extensions' => 'Video hero harus berformat MP4, WebM, atau MOV.',
                'heroVideoUpload.mimetypes' => 'Video hero harus berformat MP4, WebM, atau MOV.',
                'heroFallbackImageUpload.image' => 'Gambar fallback hero harus berupa gambar yang valid.',
                'heroFallbackImageUpload.max' => 'Gambar fallback hero maksimal 4 MB.',
            ],
            [
                'logoUpload' => 'logo situs',
                'heroVideoUpload' => 'video hero',
                'heroFallbackImageUpload' => 'gambar fallback hero',
            ],
        );

        if ($this->logoUpload) {
            if (filled($this->form->logo_path)) {
                Storage::disk('public')->delete($this->form->logo_path);
            }

            $this->form->logo_path = $this->logoUpload->store('branding', 'public');
        }

        if ($this->heroVideoUpload) {
            if (filled($this->form->hero_video_path)) {
                Storage::disk('public')->delete($this->form->hero_video_path);
            }

            $this->form->hero_video_path = $this->heroVideoUpload->store('hero', 'public');
        }

        if ($this->heroFallbackImageUpload) {
            if (filled($this->form->hero_fallback_image_path)) {
                Storage::disk('public')->delete($this->form->hero_fallback_image_path);
            }

            $this->form->hero_fallback_image_path = $this->heroFallbackImageUpload->store('hero', 'public');
        }
    }
}
