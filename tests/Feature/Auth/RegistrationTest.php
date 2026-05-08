<?php

use Laravel\Fortify\Features;

test('registration feature is disabled', function () {
    expect(Features::enabled(Features::registration()))->toBeFalse();
});

test('registration screen is not accessible', function () {
    $this->get('/register')
        ->assertNotFound();
});

test('new users cannot register publicly', function () {
    $response = $this->post('/register', [
        'name' => 'John Doe',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $response->assertNotFound();
    $this->assertGuest();
});
