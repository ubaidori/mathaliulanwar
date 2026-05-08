<?php

namespace App\Livewire\Admin\Gallery;

use App\Models\GalleryAlbum;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithPagination;

#[Title('Galeri')]
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

    public function confirmDelete(int $albumId): void
    {
        $album = GalleryAlbum::query()->findOrFail($albumId);

        $this->pendingDeleteId = $album->id;
        $this->pendingDeleteTitle = $album->title;
        $this->showDeleteModal = true;
    }

    public function closeDeleteModal(): void
    {
        $this->reset('showDeleteModal', 'pendingDeleteId', 'pendingDeleteTitle');
    }

    public function deleteAlbum(?int $albumId = null): void
    {
        $targetId = $albumId ?? $this->pendingDeleteId;

        if (! $targetId) {
            return;
        }

        GalleryAlbum::query()->findOrFail($targetId)->delete();

        session()->flash('status', 'Album galeri berhasil dihapus.');

        $this->closeDeleteModal();
    }

    public function render()
    {
        return view('livewire.admin.gallery.index', [
            'albums' => GalleryAlbum::query()
                ->withCount('images')
                ->when($this->search !== '', function ($query): void {
                    $query->where(function ($innerQuery): void {
                        $innerQuery
                            ->where('title', 'like', '%'.$this->search.'%')
                            ->orWhere('slug', 'like', '%'.$this->search.'%')
                            ->orWhere('description', 'like', '%'.$this->search.'%');
                    });
                })
                ->when($this->statusFilter !== '', fn ($query) => $query->where('status', $this->statusFilter))
                ->orderByDesc('published_at')
                ->orderByDesc('id')
                ->paginate(10),
        ]);
    }
}
