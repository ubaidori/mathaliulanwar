<x-layouts::app :title="__('Dashboard')">
    <div class="flex h-full w-full flex-1 flex-col gap-5">
        <div class="rounded-3xl border border-zinc-200 bg-white px-5 py-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div class="space-y-2">
                    <p class="text-xs font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-emerald-300">Ahlan wa Sahlan!</p>
                    <h1 class="text-2xl font-semibold text-zinc-950 dark:text-white">
                        {{ auth()->user()->name }}
                    </h1>
                    <p class="max-w-3xl text-sm text-zinc-500 dark:text-zinc-400">
                        @if (auth()->user()->isAdmin())
                            Ringkasan cepat untuk modul inti website, pengaturan situs, dan akun pengelola.
                        @else
                            Ringkasan cepat untuk berita, galeri, dan karya santri yang Anda kelola.
                        @endif
                    </p>
                </div>
                <div class="flex flex-wrap gap-3">
                    <a href="{{ route('home') }}" class="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-emerald-700 dark:hover:text-emerald-300">
                        Lihat Website
                    </a>
                    @if (auth()->user()->canManagePosts())
                        <a href="{{ route('admin.posts.index') }}" class="inline-flex rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600">
                            Kelola Berita
                        </a>
                    @endif
                </div>
            </div>
        </div>

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            @if (! is_null($stats['pages']))
                <div class="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                    <p class="text-sm text-zinc-500 dark:text-zinc-400">Halaman</p>
                    <p class="mt-2 text-3xl font-semibold text-zinc-950 dark:text-white">{{ $stats['pages'] }}</p>
                </div>
            @endif
            @if (! is_null($stats['posts']))
                <div class="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                    <p class="text-sm text-zinc-500 dark:text-zinc-400">Berita</p>
                    <p class="mt-2 text-3xl font-semibold text-zinc-950 dark:text-white">{{ $stats['posts'] }}</p>
                </div>
            @endif
            @if (! is_null($stats['studentWorks']))
                <div class="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                    <p class="text-sm text-zinc-500 dark:text-zinc-400">Karya Santri</p>
                    <p class="mt-2 text-3xl font-semibold text-zinc-950 dark:text-white">{{ $stats['studentWorks'] }}</p>
                </div>
            @endif
            @if (! is_null($stats['galleryAlbums']))
                <div class="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                    <p class="text-sm text-zinc-500 dark:text-zinc-400">Album Galeri</p>
                    <p class="mt-2 text-3xl font-semibold text-zinc-950 dark:text-white">{{ $stats['galleryAlbums'] }}</p>
                </div>
            @endif
        </div>

        <div class="grid gap-6 xl:grid-cols-3">
            @if ($latestPosts->isNotEmpty())
                <section class="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                    <h2 class="text-lg font-semibold text-zinc-950 dark:text-white">Berita Terbaru</h2>
                    <div class="mt-6 grid gap-4">
                        @foreach ($latestPosts as $post)
                            <div class="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-900">
                                <p class="text-sm font-semibold text-zinc-950 dark:text-white">{{ $post->title }}</p>
                                <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{{ $post->category?->name ?? 'Berita' }}</p>
                            </div>
                        @endforeach
                    </div>
                </section>
            @endif

            @if ($latestWorks->isNotEmpty())
                <section class="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                    <h2 class="text-lg font-semibold text-zinc-950 dark:text-white">Karya Santri</h2>
                    <div class="mt-6 grid gap-4">
                        @foreach ($latestWorks as $work)
                            <div class="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-900">
                                <p class="text-sm font-semibold text-zinc-950 dark:text-white">{{ $work->title }}</p>
                                <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{{ $work->author_name }}</p>
                            </div>
                        @endforeach
                    </div>
                </section>
            @endif

            @if ($latestAlbums->isNotEmpty())
                <section class="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                    <h2 class="text-lg font-semibold text-zinc-950 dark:text-white">Galeri</h2>
                    <div class="mt-6 grid gap-4">
                        @foreach ($latestAlbums as $album)
                            <div class="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-900">
                                <p class="text-sm font-semibold text-zinc-950 dark:text-white">{{ $album->title }}</p>
                                <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{{ optional($album->event_date)?->translatedFormat('d M Y') }}</p>
                            </div>
                        @endforeach
                    </div>
                </section>
            @endif
        </div>
    </div>
</x-layouts::app>
