<?php

namespace App\Livewire\Admin\Users;

use App\Livewire\Forms\UserForm;
use Livewire\Attributes\Title;
use Livewire\Component;

#[Title('Tambah User')]
class Create extends Component
{
    public UserForm $form;

    public function save(): void
    {
        $this->form->store();

        session()->flash('status', 'User baru berhasil dibuat.');

        $this->redirectRoute('admin.users.index');
    }

    public function render()
    {
        return view('livewire.admin.users.create');
    }
}
