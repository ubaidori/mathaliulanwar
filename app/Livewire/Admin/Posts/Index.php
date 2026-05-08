<?php

namespace App\Livewire\Admin\Posts;

use App\Models\Post;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithPagination;

#[Title('Berita')]
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

    public function confirmDelete(int $postId): void
    {
        $post = Post::query()->findOrFail($postId);

        $this->pendingDeleteId = $post->id;
        $this->pendingDeleteTitle = $post->title;
        $this->showDeleteModal = true;
    }

    public function closeDeleteModal(): void
    {
        $this->reset('showDeleteModal', 'pendingDeleteId', 'pendingDeleteTitle');
    }

    public function deletePost(?int $postId = null): void
    {
        $targetId = $postId ?? $this->pendingDeleteId;

        if (! $targetId) {
            return;
        }

        Post::query()->findOrFail($targetId)->delete();

        session()->flash('status', 'Berita berhasil dihapus.');

        $this->closeDeleteModal();
    }

    public function render()
    {
        return view('livewire.admin.posts.index', [
            'posts' => Post::query()
                ->with(['category', 'author'])
                ->when($this->search !== '', function ($query): void {
                    $query->where(function ($innerQuery): void {
                        $innerQuery
                            ->where('title', 'like', '%'.$this->search.'%')
                            ->orWhere('slug', 'like', '%'.$this->search.'%')
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
