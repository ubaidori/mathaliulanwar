<?php

use App\Models\ContactMessage;
use Database\Seeders\ContentCategorySeeder;
use Database\Seeders\HomepageContentSeeder;
use Database\Seeders\SiteSettingSeeder;

beforeEach(function () {
    $this->seed([
        SiteSettingSeeder::class,
        ContentCategorySeeder::class,
        HomepageContentSeeder::class,
    ]);
});

test('public contact form can store a new message', function () {
    $response = $this->post(route('kontak.store'), [
        'name' => 'Ahmad Fauzi',
        'email' => 'ahmad@example.com',
        'phone' => '08123456789',
        'subject' => 'Informasi Pendidikan',
        'message' => 'Saya ingin mengetahui informasi program pendidikan yang tersedia di pesantren ini.',
        'redirect_route' => 'kontak.show',
        'redirect_fragment' => 'form-kontak',
    ]);

    $response
        ->assertRedirect(route('kontak.show').'#form-kontak')
        ->assertSessionHas('contact_status');

    $this->assertDatabaseHas('contact_messages', [
        'name' => 'Ahmad Fauzi',
        'email' => 'ahmad@example.com',
        'phone' => '08123456789',
        'subject' => 'Informasi Pendidikan',
        'is_read' => false,
    ]);
});

test('public contact form validates required input before storing message', function () {
    $response = $this->from(route('kontak.show').'#form-kontak')->post(route('kontak.store'), [
        'name' => '',
        'email' => 'bukan-email',
        'message' => 'singkat',
        'redirect_route' => 'kontak.show',
        'redirect_fragment' => 'form-kontak',
    ]);

    $response
        ->assertRedirect(route('kontak.show').'#form-kontak')
        ->assertSessionHasErrors([
            'name',
            'email',
            'message',
        ]);

    expect(ContactMessage::query()->count())->toBe(0);
});

test('public contact page can be viewed', function () {
    $this->get(route('kontak.show'))
        ->assertOk()
        ->assertSee('Kontak Resmi')
        ->assertSee('Kirim pesan langsung ke admin');
});
