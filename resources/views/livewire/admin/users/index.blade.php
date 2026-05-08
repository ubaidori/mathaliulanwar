<div class="space-y-6">
    <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
                <p class="text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-emerald-300">Modul Admin</p>
                <h1 class="mt-2 text-3xl font-semibold text-zinc-950 dark:text-white">Manajemen User</h1>
                <p class="mt-2 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    Kelola akun login website untuk peran Admin dan Redaksi secara ringkas.
                </p>
            </div>

            <flux:button :href="route('admin.users.create')" variant="primary" wire:navigate>
                Tambah User
            </flux:button>
        </div>
    </div>

    <div class="rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <div class="flex flex-col gap-4 border-b border-zinc-200 px-6 py-5 dark:border-zinc-800 lg:flex-row lg:items-center lg:justify-between">
            <div>
                <h2 class="text-lg font-semibold text-zinc-950 dark:text-white">Daftar User</h2>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">Akun admin dan redaksi yang dapat mengakses dashboard.</p>
            </div>

            <div class="grid gap-3 sm:grid-cols-[minmax(0,18rem)_12rem]">
                <flux:input wire:model.live.debounce.300ms="search" type="search" placeholder="Cari nama atau email" />
                <flux:select wire:model.live="roleFilter">
                    <option value="">Semua role</option>
                    <option value="admin">Admin</option>
                    <option value="redaksi">Redaksi</option>
                </flux:select>
            </div>
        </div>

        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
                <thead class="bg-zinc-50 dark:bg-zinc-950/60">
                    <tr class="text-left text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase dark:text-zinc-400">
                        <th class="px-6 py-4">User</th>
                        <th class="px-6 py-4">Role</th>
                        <th class="px-6 py-4">Verifikasi</th>
                        <th class="px-6 py-4">Dibuat</th>
                        <th class="px-6 py-4 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-zinc-200 dark:divide-zinc-800">
                    @forelse ($users as $user)
                        <tr class="align-top">
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-semibold text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200">
                                        {{ $user->initials() }}
                                    </div>
                                    <div>
                                        <p class="font-medium text-zinc-950 dark:text-white">{{ $user->name }}</p>
                                        <p class="text-sm text-zinc-500 dark:text-zinc-400">{{ $user->email }}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <span class="inline-flex rounded-full px-3 py-1 text-xs font-semibold {{ $user->isAdmin() ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200' : 'bg-sky-100 text-sky-800 dark:bg-sky-950/50 dark:text-sky-200' }}">
                                    {{ $user->roleLabel() }}
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-300">
                                {{ $user->email_verified_at ? 'Terverifikasi' : 'Belum verifikasi' }}
                            </td>
                            <td class="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-300">
                                {{ $user->created_at?->translatedFormat('d M Y') }}
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex justify-end gap-2">
                                    <flux:button :href="route('admin.users.edit', $user)" size="sm" variant="filled" wire:navigate>
                                        Edit
                                    </flux:button>
                                    @if (! $user->is(auth()->user()))
                                        <flux:button size="sm" variant="danger" wire:click="deleteUser({{ $user->id }})" wire:confirm="Hapus user ini?">
                                            Hapus
                                        </flux:button>
                                    @endif
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5" class="px-6 py-12 text-center text-sm text-zinc-500 dark:text-zinc-400">
                                Belum ada user yang cocok dengan pencarian ini.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <div class="border-t border-zinc-200 px-6 py-4 dark:border-zinc-800">
            {{ $users->links() }}
        </div>
    </div>
</div>
