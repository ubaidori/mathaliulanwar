<?php

use App\Livewire\Admin\ContactMessages\Index;
use App\Models\ContactMessage;
use App\Models\User;
use Livewire\Livewire;

test('guests are redirected from the admin contact messages module', function () {
    $this->get(route('admin.contact-messages.index'))
        ->assertRedirect(route('login'));
});

test('users outside the allowed content roles cannot access the admin contact messages module', function () {
    $user = User::factory()->create([
        'role' => 'viewer',
    ]);

    $this->actingAs($user)
        ->get(route('admin.contact-messages.index'))
        ->assertForbidden();
});

test('admins can view the compact contact messages index layout', function () {
    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    ContactMessage::factory()->create([
        'name' => 'Pengirim Ringkas',
        'subject' => 'Subjek Ringkas',
    ]);

    $this->actingAs($user)
        ->get(route('admin.contact-messages.index'))
        ->assertOk()
        ->assertSee('Pesan Masuk')
        ->assertSee('Pengirim')
        ->assertSee('Pengirim Ringkas')
        ->assertSee('Hapus pesan ini?')
        ->assertDontSee('wire:confirm="Hapus pesan ini?"', false);
});

test('admins can mark a contact message as read and unread', function () {
    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    $message = ContactMessage::factory()->create([
        'is_read' => false,
        'read_at' => null,
    ]);

    $this->actingAs($user);

    Livewire::test(Index::class)
        ->call('markAsRead', $message->id);

    $message->refresh();

    expect($message->is_read)->toBeTrue();
    expect($message->read_at)->not->toBeNull();

    Livewire::test(Index::class)
        ->call('markAsUnread', $message->id);

    $message->refresh();

    expect($message->is_read)->toBeFalse();
    expect($message->read_at)->toBeNull();
});

test('admins can delete contact messages from the listing page', function () {
    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    $message = ContactMessage::factory()->create();

    $this->actingAs($user);

    Livewire::test(Index::class)
        ->call('deleteMessage', $message->id);

    $this->assertDatabaseMissing('contact_messages', [
        'id' => $message->id,
    ]);
});

test('admins can open the delete confirmation modal for a contact message', function () {
    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    $message = ContactMessage::factory()->create([
        'subject' => 'Pesan Akan Dihapus',
    ]);

    $this->actingAs($user);

    Livewire::test(Index::class)
        ->call('confirmDelete', $message->id)
        ->assertSet('showDeleteModal', true)
        ->assertSet('pendingDeleteId', $message->id)
        ->assertSet('pendingDeleteTitle', 'Pesan Akan Dihapus');
});

test('redaksi cannot access the admin contact messages module', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $this->actingAs($user)
        ->get(route('admin.contact-messages.index'))
        ->assertForbidden();
});
