<?php

use App\Livewire\Admin\Users\Create;
use App\Livewire\Admin\Users\Edit;
use App\Livewire\Admin\Users\Index;
use App\Models\User;
use Livewire\Livewire;

test('guests are redirected from the admin users module', function () {
    $this->get(route('admin.users.index'))
        ->assertRedirect(route('login'));
});

test('redaksi cannot access the admin users module', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $this->actingAs($user)
        ->get(route('admin.users.index'))
        ->assertForbidden();
});

test('admins can view the compact users index layout', function () {
    $user = User::factory()->admin()->create();

    User::factory()->create([
        'name' => 'Tim Redaksi Web',
        'email' => 'redaksi@example.com',
        'role' => 'redaksi',
    ]);

    $this->actingAs($user)
        ->get(route('admin.users.index'))
        ->assertOk()
        ->assertSee('Manajemen User')
        ->assertSee('Role')
        ->assertSee('Tim Redaksi Web');
});

test('admins can create a redaksi user from the admin module', function () {
    $user = User::factory()->admin()->create();

    $this->actingAs($user);

    Livewire::test(Create::class)
        ->set('form.name', 'Redaksi Baru')
        ->set('form.email', 'redaksi-baru@example.com')
        ->set('form.role', 'redaksi')
        ->set('form.password', 'password123')
        ->set('form.password_confirmation', 'password123')
        ->call('save')
        ->assertRedirect(route('admin.users.index'));

    $createdUser = User::query()->where('email', 'redaksi-baru@example.com')->firstOrFail();

    expect($createdUser->name)->toBe('Redaksi Baru');
    expect($createdUser->role)->toBe('redaksi');
});

test('admins can update a user role from the admin module', function () {
    $user = User::factory()->admin()->create();
    $managedUser = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $this->actingAs($user);

    Livewire::test(Edit::class, ['user' => $managedUser])
        ->set('form.name', 'Admin Operasional')
        ->set('form.role', 'admin')
        ->call('save')
        ->assertRedirect(route('admin.users.index'));

    $managedUser->refresh();

    expect($managedUser->name)->toBe('Admin Operasional');
    expect($managedUser->role)->toBe('admin');
});

test('admins can delete another user from the listing page', function () {
    $user = User::factory()->admin()->create();
    $managedUser = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $this->actingAs($user);

    Livewire::test(Index::class)
        ->call('deleteUser', $managedUser->id);

    $this->assertDatabaseMissing('users', [
        'id' => $managedUser->id,
    ]);
});

test('admins cannot delete themselves from the listing page', function () {
    $user = User::factory()->admin()->create();

    $this->actingAs($user);

    Livewire::test(Index::class)
        ->call('deleteUser', $user->id)
        ->assertForbidden();

    $this->assertDatabaseHas('users', [
        'id' => $user->id,
    ]);
});
