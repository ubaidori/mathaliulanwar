<?php

namespace App\Livewire\Forms;

use App\Models\User;
use Illuminate\Validation\Rule;
use Livewire\Form;

class UserForm extends Form
{
    public ?User $user = null;

    public string $name = '';

    public string $email = '';

    public string $role = User::ROLE_REDAKSI;

    public ?string $password = null;

    public ?string $password_confirmation = null;

    /**
     * @return array<string, mixed>
     */
    protected function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                Rule::unique('users', 'email')->ignore($this->user),
            ],
            'role' => ['required', Rule::in(User::roles())],
            'password' => $this->user
                ? ['nullable', 'string', 'min:8', 'confirmed']
                : ['required', 'string', 'min:8', 'confirmed'],
        ];
    }

    public function setUser(User $user): void
    {
        $this->user = $user;
        $this->name = $user->name;
        $this->email = $user->email;
        $this->role = $user->role;
        $this->password = null;
        $this->password_confirmation = null;
    }

    public function store(): User
    {
        $user = User::query()->create($this->payload());

        $this->user = $user;

        return $user;
    }

    public function update(): void
    {
        $this->user?->update($this->payload());
    }

    /**
     * @return array<string, mixed>
     */
    private function payload(): array
    {
        $validated = $this->validate();

        $payload = [
            'name' => $validated['name'],
            'email' => $validated['email'],
            'role' => $validated['role'],
        ];

        if (filled($validated['password'] ?? null)) {
            $payload['password'] = $validated['password'];
        }

        return $payload;
    }
}
