<?php

namespace App\Livewire\Admin\Pages;

use App\Models\Page;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithPagination;

#[Title('Profil')]
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

    public function confirmDelete(int $pageId): void
    {
        $page = Page::query()->findOrFail($pageId);

        $this->pendingDeleteId = $page->id;
        $this->pendingDeleteTitle = $page->title;
        $this->showDeleteModal = true;
    }

    public function closeDeleteModal(): void
    {
        $this->reset('showDeleteModal', 'pendingDeleteId', 'pendingDeleteTitle');
    }

    public function deletePage(?int $pageId = null): void
    {
        $targetId = $pageId ?? $this->pendingDeleteId;

        if (! $targetId) {
            return;
        }

        Page::query()->findOrFail($targetId)->delete();

        session()->flash('status', 'Halaman berhasil dihapus.');

        $this->closeDeleteModal();
    }

    public function render()
    {
        return view('livewire.admin.pages.index', [
            'pages' => Page::query()
                ->when($this->search !== '', function ($query): void {
                    $query->where(function ($innerQuery): void {
                        $innerQuery
                            ->where('title', 'like', '%'.$this->search.'%')
                            ->orWhere('slug', 'like', '%'.$this->search.'%')
                            ->orWhere('excerpt', 'like', '%'.$this->search.'%')
                            ->orWhere('meta_title', 'like', '%'.$this->search.'%');
                    });
                })
                ->when($this->statusFilter !== '', fn ($query) => $query->where('status', $this->statusFilter))
                ->orderBy('sort_order')
                ->orderByDesc('published_at')
                ->orderByDesc('id')
                ->paginate(10),
        ]);
    }
}
