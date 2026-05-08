<?php

namespace App\Livewire\Admin\StudentWorks;

use App\Models\StudentWork;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithPagination;

#[Title('Karya Santri')]
class Index extends Component
{
    use WithPagination;

    public string $search = '';

    public string $statusFilter = '';

    public bool $showDeleteModal = false;

    public ?int $pendingDeleteId = null;

    public string $pendingDeleteTitle = '';

    public function updatingSearch(): void
    {
        $this->resetPage();
    }

    public function updatingStatusFilter(): void
    {
        $this->resetPage();
    }

    public function confirmDelete(int $studentWorkId): void
    {
        $studentWork = StudentWork::query()->findOrFail($studentWorkId);

        $this->pendingDeleteId = $studentWork->id;
        $this->pendingDeleteTitle = $studentWork->title;
        $this->showDeleteModal = true;
    }

    public function closeDeleteModal(): void
    {
        $this->reset('showDeleteModal', 'pendingDeleteId', 'pendingDeleteTitle');
    }

    public function deleteStudentWork(?int $studentWorkId = null): void
    {
        $targetId = $studentWorkId ?? $this->pendingDeleteId;

        if (! $targetId) {
            return;
        }

        StudentWork::query()->findOrFail($targetId)->delete();

        session()->flash('status', 'Karya santri berhasil dihapus.');

        $this->closeDeleteModal();
    }

    public function render()
    {
        return view('livewire.admin.student-works.index', [
            'studentWorks' => StudentWork::query()
                ->with(['category', 'uploader'])
                ->when($this->search !== '', function ($query): void {
                    $query->where(function ($innerQuery): void {
                        $innerQuery
                            ->where('title', 'like', '%'.$this->search.'%')
                            ->orWhere('slug', 'like', '%'.$this->search.'%')
                            ->orWhere('author_name', 'like', '%'.$this->search.'%')
                            ->orWhere('excerpt', 'like', '%'.$this->search.'%');
                    });
                })
                ->when($this->statusFilter !== '', fn ($query) => $query->where('status', $this->statusFilter))
                ->orderByDesc('published_at')
                ->orderByDesc('id')
                ->paginate(10),
        ]);
    }
}
