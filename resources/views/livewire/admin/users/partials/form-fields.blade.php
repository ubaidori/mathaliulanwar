@props([
    'submitLabel' => 'Simpan',
])

<div class="mx-auto max-w-5xl space-y-6">
    <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <div class="grid gap-5 md:grid-cols-2">
            <div class="md:col-span-2">
                <flux:input wire:model="form.name" :label="__('Nama Lengkap')" type="text" required />
                @error('form.name') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            <div class="md:col-span-2">
                <flux:input wire:model="form.email" :label="__('Email Login')" type="email" required />
                @error('form.email') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            <div>
                <flux:select wire:model="form.role" :label="__('Role Akses')">
                    <option value="admin">Admin</option>
                    <option value="redaksi">Redaksi</option>
                </flux:select>
                @error('form.role') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            <div class="rounded-2xl bg-zinc-50 p-4 text-sm leading-7 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                <p class="font-medium text-zinc-900 dark:text-white">Hak akses role</p>
                <p class="mt-2"><strong>Admin</strong> dapat mengelola seluruh modul website, termasuk user, halaman, kontak, dan pengaturan situs.</p>
                <p class="mt-2"><strong>Redaksi</strong> hanya dapat mengelola berita, galeri, dan karya santri.</p>
            </div>

            <div>
                <flux:input wire:model="form.password" :label="__('Password')" type="password" autocomplete="new-password" />
                @error('form.password') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            <div>
                <flux:input wire:model="form.password_confirmation" :label="__('Konfirmasi Password')" type="password" autocomplete="new-password" />
            </div>
        </div>
    </div>

    <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <flux:button variant="primary" type="submit">
                {{ $submitLabel }}
            </flux:button>
            <flux:button :href="route('admin.users.index')" variant="ghost" wire:navigate>
                {{ __('Kembali') }}
            </flux:button>
        </div>
    </div>
</div>
