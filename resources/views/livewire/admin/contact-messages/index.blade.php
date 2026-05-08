<div class="space-y-5">
    <div class="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white px-5 py-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div class="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div class="space-y-1.5">
                <p class="text-xs font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-emerald-300">Inbox</p>
                <h1 class="text-2xl font-semibold text-zinc-950 dark:text-white">Kontak</h1>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">Kelola pesan masuk dari website.</p>
            </div>

            <!-- <div class="flex flex-wrap gap-2">
                <flux:button :href="route('admin.site-settings.edit')" variant="ghost" wire:navigate>
                    {{ __('Pengaturan Kontak') }}
                </flux:button>
            </div> -->
        </div>
    </div>

    <div class="rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div class="flex flex-col gap-3 border-b border-zinc-200 px-4 py-4 dark:border-zinc-800 md:flex-row md:items-center md:justify-between">
            <div>
                <h2 class="text-lg font-semibold text-zinc-950 dark:text-white">Pesan Masuk</h2>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">{{ $messages->total() }} item</p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row">
                <flux:input wire:model.live.debounce.300ms="search" type="text" placeholder="Cari pesan..." />
                <flux:select wire:model.live="statusFilter">
                    <option value="">{{ __('Semua status') }}</option>
                    <option value="unread">{{ __('Belum dibaca') }}</option>
                    <option value="read">{{ __('Sudah dibaca') }}</option>
                </flux:select>
            </div>
        </div>

        @if ($messages->isNotEmpty())
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
                    <thead class="bg-zinc-50/80 dark:bg-zinc-900/80">
                        <tr class="text-left text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase dark:text-zinc-400">
                            <th class="px-4 py-3">Pengirim</th>
                            <th class="px-4 py-3">Subjek</th>
                            <th class="px-4 py-3">Status</th>
                            <th class="px-4 py-3">Waktu</th>
                            <th class="px-4 py-3 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-200 dark:divide-zinc-800">
                        @foreach ($messages as $message)
                            <tr wire:key="contact-message-{{ $message->id }}" class="align-top">
                                <td class="px-4 py-4">
                                    <div class="min-w-[16rem]">
                                        <p class="font-semibold text-zinc-950 dark:text-white">{{ $message->name }}</p>
                                        <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{{ $message->email }}{{ $message->phone ? ' · '.$message->phone : '' }}</p>
                                    </div>
                                </td>
                                <td class="px-4 py-4">
                                    <div class="min-w-[18rem]">
                                        <p class="font-medium text-zinc-800 dark:text-zinc-100">{{ $message->subject ?: 'Tanpa subjek' }}</p>
                                        <p class="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300">{{ $message->message }}</p>
                                    </div>
                                </td>
                                <td class="px-4 py-4">
                                    <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-semibold {{ $message->is_read ? 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200' }}">
                                        {{ $message->is_read ? 'Sudah dibaca' : 'Belum dibaca' }}
                                    </span>
                                </td>
                                <td class="px-4 py-4 text-zinc-600 dark:text-zinc-300">{{ $message->created_at?->translatedFormat('d M Y H:i') }}</td>
                                <td class="px-4 py-4">
                                    <div class="flex justify-end gap-2">
                                        @if ($message->is_read)
                                            <flux:button type="button" size="sm" variant="ghost" wire:click="markAsUnread({{ $message->id }})">
                                                {{ __('Belum Dibaca') }}
                                            </flux:button>
                                        @else
                                            <flux:button type="button" size="sm" variant="filled" wire:click="markAsRead({{ $message->id }})">
                                                {{ __('Sudah Dibaca') }}
                                            </flux:button>
                                        @endif
                                        <flux:button type="button" size="sm" variant="danger" wire:click="confirmDelete({{ $message->id }})">
                                            {{ __('Hapus') }}
                                        </flux:button>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        @else
            <div class="px-4 py-10 text-sm text-zinc-500 dark:text-zinc-400">
                Belum ada pesan kontak yang cocok dengan filter saat ini.
            </div>
        @endif
    </div>

    <div>
        {{ $messages->links() }}
    </div>

    <flux:modal wire:model="showDeleteModal" class="mx-4 max-w-lg sm:mx-auto">
        <div class="space-y-6">
            <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 dark:bg-rose-950/40 dark:text-rose-300">
                    <flux:icon.trash class="size-6" />
                </div>
                <div>
                    <flux:heading size="lg">{{ __('Hapus pesan ini?') }}</flux:heading>
                    <flux:text class="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                        {{ __('Pesan kontak yang dihapus tidak dapat dikembalikan lagi ke inbox admin.') }}
                    </flux:text>
                </div>
            </div>

            @if ($pendingDeleteTitle !== '')
                <div class="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-200">
                    <span class="font-semibold">{{ __('Pesan terpilih:') }}</span>
                    {{ $pendingDeleteTitle }}
                </div>
            @endif

            <div class="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <flux:button type="button" variant="ghost" wire:click="closeDeleteModal">
                    {{ __('Batal') }}
                </flux:button>
                <flux:button type="button" variant="danger" wire:click="deleteMessage">
                    {{ __('Ya, hapus pesan') }}
                </flux:button>
            </div>
        </div>
    </flux:modal>
</div>
