<?php

use App\Models\User;
use Database\Seeders\ContentCategorySeeder;
use Database\Seeders\HomepageContentSeeder;
use Database\Seeders\SiteSettingSeeder;

test('guests are redirected to the login page', function () {
    $response = $this->get(route('dashboard'));
    $response->assertRedirect(route('login'));
});

test('authenticated users can visit the dashboard', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->get(route('dashboard'));
    $response->assertOk();
});

test('dashboard shows content overview for authenticated users', function () {
    $this->seed([
        SiteSettingSeeder::class,
        ContentCategorySeeder::class,
        HomepageContentSeeder::class,
    ]);

    $user = User::factory()->create();
    $this->actingAs($user);

    $this->get(route('dashboard'))
        ->assertOk()
        ->assertSee('Ahlan wa Sahlan!')
        ->assertSee('Ringkasan cepat untuk berita, galeri, dan karya santri yang Anda kelola.')
        ->assertSee('Berita')
        ->assertSee('Karya Santri')
        ->assertSee('Album Galeri');
});
