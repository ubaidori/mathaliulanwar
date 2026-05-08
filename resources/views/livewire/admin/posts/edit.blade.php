<div class="space-y-6">
    <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <p class="text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-emerald-300">Modul Admin</p>
        <h1 class="mt-2 text-3xl font-semibold text-zinc-950 dark:text-white">Edit Berita</h1>
        <p class="mt-2 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            Perbarui judul, slug, isi, kategori, dan status publikasi berita.
        </p>
    </div>

    <form wire:submit="save" class="space-y-6">
        @include('livewire.admin.posts.partials.form-fields', [
            'categories' => $categories,
            'submitLabel' => 'Simpan Perubahan',
        ])
    </form>
</div>
