<?php

use App\Livewire\Admin\StudentWorks\Create;
use App\Livewire\Admin\StudentWorks\Edit;
use App\Livewire\Admin\StudentWorks\Index;
use App\Models\StudentWork;
use App\Models\User;
use App\Models\WorkCategory;
use Livewire\Livewire;

test('guests are redirected from the admin student works module', function () {
    $this->get(route('admin.student-works.index'))
        ->assertRedirect(route('login'));
});

test('users outside the allowed content roles cannot access the admin student works module', function () {
    $user = User::factory()->create([
        'role' => 'viewer',
    ]);

    $this->actingAs($user)
        ->get(route('admin.student-works.index'))
        ->assertForbidden();
});

test('redaksi can view the compact student works index layout', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    StudentWork::factory()->create([
        'user_id' => $user->id,
        'title' => 'Karya Tabel Ringkas',
    ]);

    $this->actingAs($user)
        ->get(route('admin.student-works.index'))
        ->assertOk()
        ->assertSee('Daftar Karya')
        ->assertSee('Penulis')
        ->assertSee('Karya Tabel Ringkas')
        ->assertSee('Hapus karya santri ini?')
        ->assertDontSee('wire:confirm="Hapus karya ini?"', false);
});

test('student work create form hides manual featured image path input', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $this->actingAs($user)
        ->get(route('admin.student-works.create'))
        ->assertOk()
        ->assertDontSee('label="Featured Image Path"', false)
        ->assertDontSee('label="Attachment Path"', false)
        ->assertSee('Upload Featured Image');
});

test('redaksi can create a published student work from the admin module', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $category = WorkCategory::factory()->create();

    $this->actingAs($user);

    Livewire::test(Create::class)
        ->set('form.work_category_id', $category->id)
        ->set('form.title', 'Karya Tulis Santri Baru')
        ->set('form.slug', 'karya-tulis-santri-baru')
        ->set('form.author_name', 'Ahmad Santri')
        ->set('form.excerpt', 'Ringkasan karya tulis santri.')
        ->set('form.content', 'Isi lengkap karya tulis santri.')
        ->set('form.attachment_path', 'student-works/karya-tulis-santri.pdf')
        ->set('form.status', 'published')
        ->call('save')
        ->assertRedirect(route('admin.student-works.index'));

    $studentWork = StudentWork::query()->where('slug', 'karya-tulis-santri-baru')->first();

    expect($studentWork)->not->toBeNull();
    expect($studentWork?->user_id)->toBe($user->id);
    expect($studentWork?->work_category_id)->toBe($category->id);
    expect($studentWork?->published_at)->not->toBeNull();
});

test('redaksi can update an existing student work from the admin module', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $studentWork = StudentWork::factory()->create([
        'user_id' => $user->id,
        'status' => 'draft',
        'published_at' => null,
    ]);

    $this->actingAs($user);

    Livewire::test(Edit::class, ['studentWork' => $studentWork])
        ->set('form.title', 'Karya Santri Diperbarui')
        ->set('form.slug', 'karya-santri-diperbarui')
        ->set('form.author_name', 'Siti Santri')
        ->set('form.status', 'published')
        ->call('save')
        ->assertRedirect(route('admin.student-works.index'));

    $studentWork->refresh();

    expect($studentWork->title)->toBe('Karya Santri Diperbarui');
    expect($studentWork->slug)->toBe('karya-santri-diperbarui');
    expect($studentWork->author_name)->toBe('Siti Santri');
    expect($studentWork->status)->toBe('published');
    expect($studentWork->published_at)->not->toBeNull();
});

test('student work content is sanitized before being stored', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $this->actingAs($user);

    Livewire::test(Create::class)
        ->set('form.title', 'Karya Santri dengan Paragraf')
        ->set('form.slug', 'karya-santri-dengan-paragraf')
        ->set('form.author_name', 'Fatimah Santri')
        ->set('form.content', '<div>Paragraf pertama</div><script>alert(1)</script><div>Paragraf kedua</div>')
        ->call('save')
        ->assertRedirect(route('admin.student-works.index'));

    $studentWork = StudentWork::query()->where('slug', 'karya-santri-dengan-paragraf')->firstOrFail();

    expect($studentWork->content)->toContain('<p>Paragraf pertama</p>');
    expect($studentWork->content)->toContain('<p>Paragraf kedua</p>');
    expect($studentWork->content)->not->toContain('<script>');
});

test('redaksi can delete student works from the listing page', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $studentWork = StudentWork::factory()->create([
        'user_id' => $user->id,
    ]);

    $this->actingAs($user);

    Livewire::test(Index::class)
        ->call('deleteStudentWork', $studentWork->id);

    $this->assertDatabaseMissing('student_works', [
        'id' => $studentWork->id,
    ]);
});

test('redaksi can open the delete confirmation modal for a student work', function () {
    $user = User::factory()->create([
        'role' => 'redaksi',
    ]);

    $studentWork = StudentWork::factory()->create([
        'user_id' => $user->id,
        'title' => 'Karya Akan Dihapus',
    ]);

    $this->actingAs($user);

    Livewire::test(Index::class)
        ->call('confirmDelete', $studentWork->id)
        ->assertSet('showDeleteModal', true)
        ->assertSet('pendingDeleteId', $studentWork->id)
        ->assertSet('pendingDeleteTitle', 'Karya Akan Dihapus');
});
