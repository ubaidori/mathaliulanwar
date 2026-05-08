<?php

namespace App\Livewire\Admin\ContactMessages;

use App\Models\ContactMessage;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithPagination;

#[Title('Pesan')]
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

    public function markAsRead(int $messageId): void
    {
        ContactMessage::query()->findOrFail($messageId)->update([
            'is_read' => true,
            'read_at' => now(),
        ]);

        session()->flash('status', 'Pesan ditandai sebagai sudah dibaca.');
    }

    public function markAsUnread(int $messageId): void
    {
        ContactMessage::query()->findOrFail($messageId)->update([
            'is_read' => false,
            'read_at' => null,
        ]);

        session()->flash('status', 'Pesan dikembalikan ke status belum dibaca.');
    }

    public function confirmDelete(int $messageId): void
    {
        $message = ContactMessage::query()->findOrFail($messageId);

        $this->pendingDeleteId = $message->id;
        $this->pendingDeleteTitle = $message->subject ?: $message->name;
        $this->showDeleteModal = true;
    }

    public function closeDeleteModal(): void
    {
        $this->reset('showDeleteModal', 'pendingDeleteId', 'pendingDeleteTitle');
    }

    public function deleteMessage(?int $messageId = null): void
    {
        $targetId = $messageId ?? $this->pendingDeleteId;

        if (! $targetId) {
            return;
        }

        ContactMessage::query()->findOrFail($targetId)->delete();

        session()->flash('status', 'Pesan kontak berhasil dihapus.');

        $this->closeDeleteModal();
    }

    public function render()
    {
        return view('livewire.admin.contact-messages.index', [
            'messages' => ContactMessage::query()
                ->when($this->search !== '', function ($query): void {
                    $query->where(function ($innerQuery): void {
                        $innerQuery
                            ->where('name', 'like', '%'.$this->search.'%')
                            ->orWhere('email', 'like', '%'.$this->search.'%')
                            ->orWhere('phone', 'like', '%'.$this->search.'%')
                            ->orWhere('subject', 'like', '%'.$this->search.'%')
                            ->orWhere('message', 'like', '%'.$this->search.'%');
                    });
                })
                ->when($this->statusFilter === 'read', fn ($query) => $query->where('is_read', true))
                ->when($this->statusFilter === 'unread', fn ($query) => $query->where('is_read', false))
                ->latest()
                ->paginate(10),
        ]);
    }
}
