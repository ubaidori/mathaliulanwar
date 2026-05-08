<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Schema;

uses(RefreshDatabase::class);

test('core content tables are created with the expected columns', function () {
    expect(Schema::hasTable('site_settings'))->toBeTrue();
    expect(Schema::hasColumns('site_settings', [
        'site_name',
        'site_tagline',
        'hero_video_path',
        'hero_fallback_image_path',
        'social_links',
    ]))->toBeTrue();

    expect(Schema::hasTable('pages'))->toBeTrue();
    expect(Schema::hasColumns('pages', [
        'title',
        'slug',
        'status',
        'sort_order',
        'published_at',
    ]))->toBeTrue();

    expect(Schema::hasTable('posts'))->toBeTrue();
    expect(Schema::hasColumns('posts', [
        'post_category_id',
        'user_id',
        'title',
        'slug',
        'status',
        'published_at',
    ]))->toBeTrue();

    expect(Schema::hasTable('student_works'))->toBeTrue();
    expect(Schema::hasColumns('student_works', [
        'work_category_id',
        'user_id',
        'author_name',
        'attachment_path',
        'status',
    ]))->toBeTrue();

    expect(Schema::hasTable('gallery_albums'))->toBeTrue();
    expect(Schema::hasTable('gallery_images'))->toBeTrue();
    expect(Schema::hasColumns('gallery_images', [
        'gallery_album_id',
        'image_path',
        'sort_order',
    ]))->toBeTrue();

    expect(Schema::hasTable('contact_messages'))->toBeTrue();
    expect(Schema::hasColumns('contact_messages', [
        'name',
        'email',
        'message',
        'is_read',
    ]))->toBeTrue();
});

test('users table includes the project role column', function () {
    expect(Schema::hasColumn('users', 'role'))->toBeTrue();
});
