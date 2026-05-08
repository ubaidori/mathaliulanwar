<?php

namespace App\Livewire\Admin\StudentWorks;

use App\Livewire\Forms\StudentWorkForm;
use App\Models\StudentWork;
use App\Models\WorkCategory;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithFileUploads;

#[Title('Edit Karya Santri')]
class Edit extends Component
{
    use WithFileUploads;

    public StudentWorkForm $form;

    public $featuredImageUpload = null;

    public $attachmentUpload = null;

    public function mount(StudentWork $studentWork): void
    {
        $this->form->setStudentWork($studentWork);
    }

    public function syncSlug(): void
    {
        $this->form->slug = Str::slug($this->form->title);
    }

    public function save(): void
    {
        $this->storeUploads();

        $this->form->update();

        session()->flash('status', 'Perubahan karya santri berhasil disimpan.');

        $this->redirectRoute('admin.student-works.index');
    }

    public function removeFeaturedImage(): void
    {
        if (filled($this->form->featured_image_path)) {
            Storage::disk('public')->delete($this->form->featured_image_path);
        }

        $this->featuredImageUpload = null;
        $this->form->featured_image_path = '';
    }

    public function removeAttachment(): void
    {
        if (filled($this->form->attachment_path)) {
            Storage::disk('public')->delete($this->form->attachment_path);
        }

        $this->attachmentUpload = null;
        $this->form->attachment_path = '';
    }

    public function render()
    {
        return view('livewire.admin.student-works.edit', [
            'categories' => WorkCategory::query()->orderBy('name')->get(),
        ]);
    }

    private function storeUploads(): void
    {
        $this->validate(
            [
                'featuredImageUpload' => ['nullable', 'image', 'max:4096'],
                'attachmentUpload' => ['nullable', 'file', 'max:10240', 'mimes:pdf,doc,docx,ppt,pptx,xls,xlsx,jpg,jpeg,png,webp,mp4'],
            ],
            [
                'featuredImageUpload.image' => 'Featured image karya harus berupa gambar yang valid.',
                'featuredImageUpload.max' => 'Featured image karya maksimal 4 MB.',
                'attachmentUpload.file' => 'Lampiran karya harus berupa file yang valid.',
                'attachmentUpload.max' => 'Lampiran karya maksimal 10 MB.',
                'attachmentUpload.mimes' => 'Lampiran karya harus berformat PDF, Word, PowerPoint, Excel, gambar, atau MP4.',
            ],
            [
                'featuredImageUpload' => 'featured image karya',
                'attachmentUpload' => 'lampiran karya',
            ],
        );

        if ($this->featuredImageUpload) {
            if (filled($this->form->featured_image_path)) {
                Storage::disk('public')->delete($this->form->featured_image_path);
            }

            $this->form->featured_image_path = $this->featuredImageUpload->store('student-works', 'public');
        }

        if ($this->attachmentUpload) {
            if (filled($this->form->attachment_path)) {
                Storage::disk('public')->delete($this->form->attachment_path);
            }

            $this->form->attachment_path = $this->attachmentUpload->store('student-works', 'public');
        }
    }
}
