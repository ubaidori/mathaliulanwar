<?php

namespace App\Livewire\Forms;

use App\Models\StudentWork;
use App\Models\User;
use App\Support\RichText;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Livewire\Attributes\Validate;
use Livewire\Form;

class StudentWorkForm extends Form
{
    public ?StudentWork $studentWork = null;

    public ?int $work_category_id = null;

    #[Validate]
    public string $title = '';

    #[Validate]
    public string $slug = '';

    #[Validate]
    public string $author_name = '';

    public string $excerpt = '';

    public string $content = '';

    public string $featured_image_path = '';

    public string $attachment_path = '';

    public string $status = 'draft';

    /**
     * @return array<string, mixed>
     */
    protected function rules(): array
    {
        return [
            'work_category_id' => ['nullable', 'exists:work_categories,id'],
            'title' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                Rule::unique('student_works', 'slug')->ignore($this->studentWork),
            ],
            'author_name' => ['required', 'string', 'max:255'],
            'excerpt' => ['nullable', 'string'],
            'content' => ['required', 'string'],
            'featured_image_path' => ['nullable', 'string', 'max:255'],
            'attachment_path' => ['nullable', 'string', 'max:255'],
            'status' => ['required', Rule::in(['draft', 'published'])],
        ];
    }

    public function setStudentWork(StudentWork $studentWork): void
    {
        $this->studentWork = $studentWork;
        $this->work_category_id = $studentWork->work_category_id;
        $this->title = $studentWork->title;
        $this->slug = $studentWork->slug;
        $this->author_name = $studentWork->author_name;
        $this->excerpt = $studentWork->excerpt ?? '';
        $this->content = $studentWork->content ?? '';
        $this->featured_image_path = $studentWork->featured_image_path ?? '';
        $this->attachment_path = $studentWork->attachment_path ?? '';
        $this->status = $studentWork->status;
    }

    public function store(User $user): StudentWork
    {
        $studentWork = StudentWork::create([
            ...$this->validatedPayload(),
            'user_id' => $user->id,
        ]);

        $this->studentWork = $studentWork;

        return $studentWork;
    }

    public function update(): void
    {
        $this->studentWork?->update($this->validatedPayload());
    }

    /**
     * @return array<string, mixed>
     */
    private function validatedPayload(): array
    {
        $validated = $this->validate();
        $status = $validated['status'];

        return [
            'work_category_id' => $validated['work_category_id'],
            'title' => $validated['title'],
            'slug' => Str::slug($validated['slug'] ?: $validated['title']),
            'author_name' => $validated['author_name'],
            'excerpt' => $validated['excerpt'] ?: null,
            'content' => RichText::sanitize($validated['content']),
            'featured_image_path' => $validated['featured_image_path'] ?: null,
            'attachment_path' => $validated['attachment_path'] ?: null,
            'status' => $status,
            'published_at' => $status === 'published'
                ? ($this->studentWork?->published_at ?? now())
                : null,
        ];
    }
}
