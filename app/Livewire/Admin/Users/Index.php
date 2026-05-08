<?php

namespace App\Livewire\Admin\Users;

use App\Models\User;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithPagination;

#[Title('Manajemen User')]
class Index extends Component
{
    use WithPagination;

    public string $search = '';

    public string $roleFilter = '';

    public function updatingSearch(): void
    {
        $this->resetPage();
    }

    public function updatingRoleFilter(): void
    {
        $this->resetPage();
    }

    public function deleteUser(int $userId): void
    {
        $user = User::query()->findOrFail($userId);

        abort_if($user->is(auth()->user()), 403);

        $user->delete();

        session()->flash('status', 'User berhasil dihapus.');
    }

    public function render()
    {
        return view('livewire.admin.users.index', [
            'users' => User::query()
                ->when($this->search !== '', function ($query): void {
                    $query->where(function ($innerQuery): void {
                        $innerQuery
                            ->where('name', 'like', '%'.$this->search.'%')
                            ->orWhere('email', 'like', '%'.$this->search.'%');
                    });
                })
                ->when($this->roleFilter !== '', fn ($query) => $query->where('role', $this->roleFilter))
                ->latest('id')
                ->paginate(10),
        ]);
    }
}
