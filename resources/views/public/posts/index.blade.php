<x-layouts.public :title="__('Berita')">
    <div class="relative overflow-x-hidden">
        <x-public.header :site-setting="$siteSetting" />

        <main class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div class="space-y-4">
                    <p class="text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-emerald-300">Berita</p>
                    <!-- <h1 class="max-w-3xl text-4xl font-semibold text-zinc-950 text-balance dark:text-white lg:text-5xl">Kabar terbaru dan informasi resmi pesantren.</h1> -->
                </div>
                <!-- <p class="max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">Temukan berita berdasarkan kategori atau kata kunci tertentu, lalu telusuri arsipnya per halaman tanpa kehilangan filter yang sedang dipakai.</p> -->
            </div>

            <form action="{{ route('berita.index') }}" method="GET" class="mt-10 grid gap-4 rounded-[2rem] border border-emerald-100 bg-white/90 p-6 shadow-sm transition-colors duration-300 dark:border-emerald-900/30 dark:bg-zinc-900/88 lg:grid-cols-[minmax(0,1.2fr)_minmax(220px,0.6fr)_auto]">
                <div>
                    <label for="news_search" class="text-sm font-medium text-zinc-700 dark:text-zinc-200">Cari berita</label>
                    <input id="news_search" name="search" type="text" value="{{ request('search') }}" placeholder="Judul atau isi singkat berita..." class="mt-2 w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-emerald-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-500">
                </div>
                <div>
                    <label for="news_category" class="text-sm font-medium text-zinc-700 dark:text-zinc-200">Kategori</label>
                    <select id="news_category" name="category" class="mt-2 w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-emerald-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white">
                        <option value="">Semua kategori</option>
                        @foreach ($postCategories as $category)
                            <option value="{{ $category->slug }}" @selected(request('category') === $category->slug)>{{ $category->name }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="flex items-end gap-3">
                    <button type="submit" class="inline-flex w-full items-center justify-center rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
                        Terapkan
                    </button>
                    @if (request()->filled('search') || request()->filled('category'))
                        <a href="{{ route('berita.index') }}" class="inline-flex w-full items-center justify-center rounded-full border border-emerald-200 px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:border-emerald-300 hover:bg-emerald-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800">
                            Reset
                        </a>
                    @endif
                </div>
            </form>

            <div id="daftar-berita" class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p class="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    Menampilkan <span class="font-semibold text-zinc-900 dark:text-white">{{ $posts->count() }}</span> dari
                    <span class="font-semibold text-zinc-900 dark:text-white">{{ $posts->total() }}</span> berita.
                </p>
                @if (request()->filled('search') || request()->filled('category'))
                    <p class="text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                        Hasil difilter{{ request('search') ? ' untuk "'.request('search').'"' : '' }}{{ request('category') ? ' pada kategori terpilih' : '' }}.
                    </p>
                @endif
            </div>

            <div class="mt-8 grid gap-6 lg:grid-cols-3">
@forelse ($posts as $post)
    <article class="h-full">
        <a href="{{ route('berita.show', $post) }}"
           class="group flex h-full flex-col rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-emerald-200 hover:shadow-md dark:border-emerald-900/30 dark:bg-zinc-900 dark:hover:border-emerald-700/50 hover:-translate-y-1 dark:hover:-translate-y-0.5">

            <div class="overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,_rgba(6,95,70,0.16),_rgba(245,158,11,0.18))]">
                @if (filled($post->featured_image_path))
                    <img src="{{ asset('storage/'.$post->featured_image_path) }}"
                         alt="{{ $post->title }}"
                         class="w-full h-auto max-h-[300px] object-contain transition duration-300 group-hover:scale-105">
                @else
                    <div class="flex h-56 items-end p-5">
                        <div class="rounded-full border border-white/60 bg-white/75 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-emerald-800 uppercase backdrop-blur">
                            Berita Pesantren
                        </div>
                    </div>
                @endif
            </div>

            <p class="mt-5 text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase dark:text-emerald-300">
                {{ $post->category?->name ?? 'Berita' }}
            </p>

            <h2 class="mt-4 text-2xl font-semibold text-zinc-950 text-balance transition group-hover:text-emerald-800 dark:text-white dark:group-hover:text-emerald-300">
                {{ $post->title }}
            </h2>

            <p class="mt-4 flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {{ $post->excerpt }}
            </p>

            <div class="mt-6 flex items-center justify-between text-xs tracking-[0.2em] text-zinc-500 uppercase dark:text-zinc-400">
                <span>{{ optional($post->published_at)?->translatedFormat('d M Y') }}</span>
                <span>{{ $post->author?->name ?? 'Editor' }}</span>
            </div>

            <span class="mt-6 inline-flex w-fit rounded-full bg-emerald-950 px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-emerald-800">
                Baca Detail
            </span>
        </a>
    </article>
@empty
                    <div class="rounded-[2rem] border border-dashed border-emerald-200 bg-white/80 p-10 text-sm leading-7 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/88 dark:text-zinc-300 lg:col-span-3">
                        Belum ada berita yang cocok dengan filter saat ini.
                    </div>
                @endforelse
            </div>

            <div class="mt-10">
                {{ $posts->links() }}
            </div>
        </main>

        <x-public.footer :site-setting="$siteSetting" />
    </div>
</x-layouts.public>
