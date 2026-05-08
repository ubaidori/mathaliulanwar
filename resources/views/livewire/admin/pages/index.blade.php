<div class="space-y-5">
    <div class="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white px-5 py-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div class="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div class="space-y-1.5">
                <p class="text-xs font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-emerald-300">Konten</p>
                <h1 class="text-2xl font-semibold text-zinc-950 dark:text-white">Profil dan Halaman</h1>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">Pondok Pesantren Mathali'ul Anwar.</p>
            </div>

            <div class="flex flex-wrap gap-2">
                <flux:button :href="route('home')" target="_blank" variant="ghost">
                    {{ __('Lihat Website') }}
                </flux:button>
                <flux:button :href="route('admin.pages.create')" variant="primary" wire:navigate>
                    {{ __('Tambah Halaman') }}
                </flux:button>
            </div>
        </div>
    </div>

    <div class="rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div class="flex flex-col gap-3 border-b border-zinc-200 px-4 py-4 dark:border-zinc-800 md:flex-row md:items-center md:justify-between">
            <div>
                <h2 class="text-lg font-semibold text-zinc-950 dark:text-white">Daftar Halaman</h2>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">{{ $pages->total() }} item</p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row">
                <flux:input wire:model.live.debounce.300ms="search" type="text" placeholder="Cari halaman..." />
                <flux:select wire:model.live="statusFilter">
                    <option value="">{{ __('Semua status') }}</option>
                    <option value="draft">{{ __('Draft') }}</option>
                    <option value="published">{{ __('Published') }}</option>
                </flux:select>
            </div>
        </div>

        @if ($pages->isNotEmpty())
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
                    <thead class="bg-zinc-50/80 dark:bg-zinc-900/80">
                        <tr class="text-left text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase dark:text-zinc-400">
                            <th class="px-4 py-3">Halaman</th>
                            <th class="px-4 py-3">Status</th>
                            <th class="px-4 py-3">Urutan</th>
                            <th class="px-4 py-3">Meta</th>
                            <th class="px-4 py-3">Publikasi</th>
                            <th class="px-4 py-3 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-200 dark:divide-zinc-800">
                        @foreach ($pages as $page)
                            <tr wire:key="page-{{ $page->id }}" class="align-top">
                                <td class="px-4 py-4">
                                    <div class="min-w-[18rem]">
                                        <div class="flex flex-wrap items-center gap-2">
                                            <p class="font-semibold text-zinc-950 dark:text-white">{{ $page->title }}</p>
                                            @if (in_array($page->slug, ['profil', 'pendidikan'], true))
                                                <span class="inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                                                    Utama
                                                </span>
                                            @endif
                                        </div>
                                        <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">/{{ $page->slug }}</p>
                                        <p class="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300">
                                            {{ $page->excerpt ?: \Illuminate\Support\Str::limit(strip_tags(\App\Support\RichText::render($page->content ?? '')), 140) }}
                                        </p>
                                    </div>
                                </td>
                                <td class="px-4 py-4">
                                    <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-semibold {{ $page->status === 'published' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200' }}">
                                        {{ $page->status }}
                                    </span>
                                </td>
                                <td class="px-4 py-4 text-zinc-600 dark:text-zinc-300">{{ $page->sort_order }}</td>
                                <td class="px-4 py-4 text-zinc-600 dark:text-zinc-300">{{ $page->meta_title ?: 'Tanpa meta' }}</td>
                                <td class="px-4 py-4 text-zinc-600 dark:text-zinc-300">{{ optional($page->published_at)?->translatedFormat('d M Y') ?? 'Belum tayang' }}</td>
                                <td class="px-4 py-4">
                                    <div class="flex justify-end gap-2">
                                        @if ($page->slug === 'profil')
                                            <flux:button :href="route('profil.show')" target="_blank" size="sm" variant="ghost">
                                                {{ __('Lihat') }}
                                            </flux:button>
                                        @elseif ($page->slug === 'pendidikan')
                                            <flux:button :href="route('pendidikan.show')" target="_blank" size="sm" variant="ghost">
                                                {{ __('Lihat') }}
                                            </flux:button>
                                        @endif
                                        <flux:button :href="route('admin.pages.edit', $page)" size="sm" variant="filled" wire:navigate>
                                            {{ __('Edit') }}
                                        </flux:button>
                                        <flux:button type="button" size="sm" variant="danger" wire:click="confirmDelete({{ $page->id }})">
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
                Belum ada halaman yang cocok dengan filter saat ini.
            </div>
        @endif
    </div>

    <div>
        {{ $pages->links() }}
    </div>

    <flux:modal wire:model="showDeleteModal" class="mx-4 max-w-lg sm:mx-auto">
        <div class="space-y-6">
            <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 dark:bg-rose-950/40 dark:text-rose-300">
                    <flux:icon.trash class="size-6" />
                </div>
                <div>
                    <flux:heading size="lg">{{ __('Hapus halaman ini?') }}</flux:heading>
                    <flux:text class="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                        {{ __('Halaman yang dihapus akan hilang dari navigasi dan tidak bisa diakses publik.') }}
                    </flux:text>
                </div>
            </div>

            @if ($pendingDeleteTitle !== '')
                <div class="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-200">
                    <span class="font-semibold">{{ __('Halaman terpilih:') }}</span>
                    {{ $pendingDeleteTitle }}
                </div>
            @endif

            <div class="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <flux:button type="button" variant="ghost" wire:click="closeDeleteModal">
                    {{ __('Batal') }}
                </flux:button>
                <flux:button type="button" variant="danger" wire:click="deletePage">
                    {{ __('Ya, hapus halaman') }}
                </flux:button>
            </div>
        </div>
    </flux:modal>
</div>
