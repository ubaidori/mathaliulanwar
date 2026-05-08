<?php

namespace App\Livewire\Admin\Users;

use App\Livewire\Forms\UserForm;
use App\Models\User;
use Livewire\Attributes\Title;
use Livewire\Component;

#[Title('Edit User')]
class Edit extends Component
{
    public UserForm $form;

    public User $user;

    public function mount(User $user): void
    {
        $this->user = $user;
        $this->form->setUser($user);
    }

    public function save(): void
    {
        $this->form->update();

        session()->flash('status', 'User berhasil diperbarui.');

        $this->redirectRoute('admin.users.index');
    }

    public function render()
    {
        return view('livewire.admin.users.edit');
    }
}
