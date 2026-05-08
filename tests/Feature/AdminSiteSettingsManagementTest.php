<?php

use App\Livewire\Admin\SiteSettings\Edit;
use App\Models\SiteSetting;
use App\Models\User;
use Livewire\Livewire;

test('guests are redirected from the admin site settings module', function () {
    $this->get(route('admin.site-settings.edit'))
        ->assertRedirect(route('login'));
});

test('users outside the allowed content roles cannot access the admin site settings module', function () {
    $user = User::factory()->create([
        'role' => 'viewer',
    ]);

    $this->actingAs($user)
        ->get(route('admin.site-settings.edit'))
        ->assertForbidden();
});

test('admins can update site settings from the admin module', function () {
    $user = User::factory()->create([
        'role' => 'admin',
    ]);

    $siteSetting = SiteSetting::factory()->create();

    $this->actingAs($user);

    Livewire::test(Edit::class)
        ->set('form.site_name', "Pondok Pesantren Mathali'ul Anwar Digital")
        ->set('form.site_tagline', 'Membina ilmu dan akhlak.')
        ->set('form.site_description', 'Deskripsi baru untuk website resmi pesantren.')
        ->set('form.hero_video_path', 'hero/homepage.mp4')
        ->set('form.hero_fallback_image_path', 'hero/homepage.jpg')
        ->set('form.hero_primary_cta_label', 'Kenali Pesantren')
        ->set('form.hero_primary_cta_url', 'https://mathaliulanwar.test/profil')
        ->set('form.hero_secondary_cta_label', 'Baca Berita')
        ->set('form.hero_secondary_cta_url', 'https://mathaliulanwar.test/berita')
        ->set('form.address', 'Jl. Pesantren No. 1')
        ->set('form.phone', '021000111')
        ->set('form.whatsapp_number', '628111111111')
        ->set('form.email', 'kontak@mathaliulanwar.test')
        ->set('form.social_links.instagram', 'https://instagram.com/mathaliulanwar')
        ->call('save');

    $siteSetting->refresh();

    expect($siteSetting->site_name)->toBe("Pondok Pesantren Mathali'ul Anwar Digital");
    expect($siteSetting->hero_video_path)->toBe('hero/homepage.mp4');
    expect($siteSetting->hero_primary_cta_label)->toBe('Kenali Pesantren');
    expect($siteSetting->hero_secondary_cta_url)->toBe('https://mathaliulanwar.test/berita');
    expect($siteSetting->whatsapp_number)->toBe('628111111111');
    expect($siteSetting->email)->toBe('kontak@mathaliulanwar.test');
    expect($siteSetting->social_links['instagram'])->toBe('https://instagram.com/mathaliulanwar');
});

test('redaksi cannot access the admin site settings module', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $this->actingAs($user)
        ->get(route('admin.site-settings.edit'))
        ->assertForbidden();
});
