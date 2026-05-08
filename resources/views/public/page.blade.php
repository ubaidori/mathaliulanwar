@php
    $shareMeta = \App\Support\ShareMetadata::forPage($page, $siteSetting);
@endphp

<x-layouts.public :title="$page->title" :meta="$shareMeta">
    @php
        $featuredImageUrl = filled($page->featured_image_path)
            ? asset('storage/' . $page->featured_image_path)
            : null;

        $currentUrl = request()->fullUrl();
        $shareText = $page->title . ' - ' . $currentUrl;
    @endphp

    <div class="relative overflow-x-hidden">
        <x-public.header :site-setting="$siteSetting" />

        <main class="mx-auto max-w-6xl px-6 py-8 lg:px-4 lg:py-8">
            <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">

                {{-- Main Content --}}
                <article class="w-full rounded-[2rem] border border-emerald-100 bg-white/85 p-6 shadow-xl shadow-emerald-900/5 transition-colors duration-300 dark:border-emerald-900/30 dark:bg-zinc-900/90 dark:shadow-black/20 sm:p-8 lg:p-12">
                    <div class="max-w-3xl">
                        <p class="text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-emerald-300">
                            Halaman
                        </p>

                        <h1 class="mt-4 text-3xl font-semibold leading-tight text-zinc-950 text-balance dark:text-white lg:text-4xl">
                            {{ $page->title }}
                        </h1>

                        @if (filled($page->excerpt))
                            <p class="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-300">
                                {{ $page->excerpt }}
                            </p>
                        @endif
                    </div>

                    @if ($featuredImageUrl)
                        <figure class="mt-8 overflow-hidden rounded-[1.5rem]">
                            <img
                                src="{{ $featuredImageUrl }}"
                                alt="{{ $page->title }}"
                                class="h-auto max-h-[420px] w-full object-contain"
                                loading="lazy"
                            >
                        </figure>
                    @endif

                    <div class="rich-content mt-10 text-base leading-8 text-zinc-700 dark:text-zinc-200">
                        {!! \App\Support\RichText::render($page->content) !!}
                    </div>
                </article>

                {{-- Sidebar / Aside --}}
                <aside class="lg:sticky lg:top-24">
                    <div class="space-y-6">

                        @if (! empty($profilePages) && $profilePages->isNotEmpty())
                        <section class="rounded-[1.75rem] border border-emerald-100 bg-white/90 p-6 shadow-sm transition-colors duration-300 dark:border-emerald-900/30 dark:bg-zinc-900/90">
                            <p class="text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase dark:text-emerald-300">
                                Profil
                            </p>

                            <h2 class="mt-3 text-lg font-semibold text-zinc-950 dark:text-white">
                                PP. Mathali'ul Anwar
                            </h2>

                            <nav class="mt-5 space-y-2" aria-label="Navigasi halaman profil">
                                @foreach ($profilePages as $profilePage)
                                    @php
                                        $isActive = $page->id === $profilePage->id;
                                    @endphp

                                    <a
                                        href="{{ route('profil.section.show', $profilePage->slug) }}"
                                        @class([
                                            'flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition',
                                            'bg-emerald-600 text-white shadow-sm shadow-emerald-900/10' => $isActive,
                                            'bg-zinc-50 text-zinc-700 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-zinc-800/70 dark:text-zinc-300 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300' => ! $isActive,
                                        ])
                                    >
                                        <span>{{ $profilePage->title }}</span>

                                        @if ($isActive)
                                            <span class="text-xs font-semibold opacity-80">
                                                Aktif
                                            </span>
                                        @else
                                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        @endif
                                    </a>
                                @endforeach
                            </nav>
                        </section>
                        @endif

                        {{-- Share Card --}}
                        <section class="rounded-[1.75rem] border border-emerald-100 bg-white/90 p-6 shadow-sm transition-colors duration-300 dark:border-emerald-900/30 dark:bg-zinc-900/90">
                            <div>
                                <p class="text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase dark:text-emerald-300">
                                    Bagikan
                                </p>
                            </div>

                            <div class="mt-6 grid gap-3 grid-cols-2">
                                <a
                                    href="https://wa.me/?text={{ urlencode($shareText) }}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Bagikan ke WhatsApp"
                                    class="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.89 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.079 11.971c0 2.112.552 4.175 1.598 6.011L0 24l6.149-1.613a11.893 11.893 0 005.9 1.554h.005c6.604 0 11.967-5.363 11.97-11.971a11.85 11.85 0 00-3.41-8.461z" />
                                    </svg>
                                    WhatsApp
                                </a>

                                <a
                                    href="https://www.facebook.com/sharer/sharer.php?u={{ urlencode($currentUrl) }}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Bagikan ke Facebook"
                                    class="flex items-center justify-center gap-2 rounded-2xl bg-[#1877F2] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M22.675 0h-21.35c-0.733 0-1.325 0.593-1.325 1.326v21.348c0 0.733 0.593 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464 0.099 2.794 0.143v3.24l-1.918 0.001c-1.504 0-1.796 0.715-1.796 1.763v2.312h3.591l-0.467 3.622h-3.124v9.294h6.116c0.733 0 1.326-0.593 1.326-1.326v-21.348c0-0.733-0.593-1.326-1.326-1.326z" />
                                    </svg>
                                    Facebook
                                </a>

                            </div>
                                <button
                                    type="button"
                                    onclick="copyCurrentUrl(this)"
                                    class="mt-4 w-full flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-900"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                    </svg>

                                    <span data-copy-text class="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                                        Salin Tautan
                                    </span>
                                </button>
                        </section>

                        @if (! empty($latestGalleryAlbums) && $latestGalleryAlbums->isNotEmpty())
                        <section class="rounded-[1.75rem] border border-zinc-100 bg-white/80 p-6 shadow-sm transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-900/80">
                            <div class="flex items-center justify-between gap-4">
                                <div>
                                    <p class="text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase dark:text-emerald-300">
                                        Galeri Terbaru
                                    </p>

                                    <!-- <h2 class="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">
                                        Galeri Terbaru
                                    </h2> -->
                                </div>
                            </div>

                            <div class="mt-5 space-y-4">
                                @foreach ($latestGalleryAlbums as $album)
                                    @php
                                        $coverImage = $album->images->first();
                                        $coverUrl = $coverImage?->image_path
                                            ? asset('storage/' . $coverImage->image_path)
                                            : null;
                                    @endphp

                                    <a
                                        href="{{ route('galeri.show', $album->slug) }}"
                                        class="group flex gap-3 rounded-2xl border border-zinc-100 bg-zinc-50 p-3 transition hover:border-emerald-200 hover:bg-emerald-50 dark:border-zinc-800 dark:bg-zinc-800/70 dark:hover:border-emerald-900/40 dark:hover:bg-emerald-950/30"
                                    >
                                        <div class="h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
                                            @if ($coverUrl)
                                                <img
                                                    src="{{ $coverUrl }}"
                                                    alt="{{ $album->title }}"
                                                    class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                                    loading="lazy"
                                                >
                                            @else
                                                <div class="flex h-full w-full items-center justify-center text-xs text-zinc-500 dark:text-zinc-400">
                                                    Galeri
                                                </div>
                                            @endif
                                        </div>

                                        <div class="min-w-0">
                                            <h3 class="line-clamp-2 text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
                                                {{ $album->title }}
                                            </h3>

                                            @if (filled($album->published_at))
                                                <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                                                    {{ $album->published_at->translatedFormat('d F Y') }}
                                                </p>
                                            @endif
                                        </div>
                                    </a>
                                @endforeach
                            </div>

                            <a
                                href="{{ route('galeri.index') }}"
                                class="mt-5 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200"
                            >
                                Lihat semua galeri
                            </a>
                        </section>
                        @endif

                        @if (! empty($latestStudentWorks) && $latestStudentWorks->isNotEmpty())
                        <section class="rounded-[1.75rem] border border-zinc-100 bg-white/80 p-6 shadow-sm transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-900/80">
                            <div>
                                <p class="text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase dark:text-emerald-300">
                                    Karya Santri
                                </p>

                                <!-- <h2 class="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">
                                    Karya Terbaru
                                </h2> -->
                            </div>

                            <div class="mt-5 space-y-4">
                                @foreach ($latestStudentWorks as $work)
                                    <a
                                        href="{{ route('karya-santri.show', $work->slug) }}"
                                        class="block rounded-2xl border border-zinc-100 bg-zinc-50 p-4 transition hover:border-emerald-200 hover:bg-emerald-50 dark:border-zinc-800 dark:bg-zinc-800/70 dark:hover:border-emerald-900/40 dark:hover:bg-emerald-950/30"
                                    >
                                        @if ($work->category)
                                            <p class="mb-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                                                {{ $work->category->name }}
                                            </p>
                                        @endif

                                        <h3 class="line-clamp-2 text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
                                            {{ $work->title }}
                                        </h3>

                                        @if (filled($work->author_name))
                                            <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                                                Oleh {{ $work->author_name }}
                                            </p>
                                        @endif

                                        @if (filled($work->published_at))
                                            <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                                                {{ $work->published_at->translatedFormat('d F Y') }}
                                            </p>
                                        @endif
                                    </a>
                                @endforeach
                            </div>

                            <a
                                href="{{ route('karya-santri.index') }}"
                                class="mt-5 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200"
                            >
                                Lihat semua karya santri
                            </a>
                        </section>
                        @endif

                        @if (! empty($latestPosts) && $latestPosts->isNotEmpty())
                        <section class="rounded-[1.75rem] border border-zinc-100 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80">
                            <p class="text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase dark:text-emerald-300">
                                Berita Terbaru
                            </p>

                            <div class="mt-5 space-y-4">
                                @foreach ($latestPosts as $latestPost)
                                    <a
                                        href="{{ route('berita.show', $latestPost->slug) }}"
                                        class="block rounded-2xl border border-zinc-100 bg-zinc-50 p-4 transition hover:border-emerald-200 hover:bg-emerald-50 dark:border-zinc-800 dark:bg-zinc-800/70 dark:hover:border-emerald-900/40 dark:hover:bg-emerald-950/30"
                                    >
                                        <h3 class="line-clamp-2 text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
                                            {{ $latestPost->title }}
                                        </h3>

                                        @if (filled($latestPost->published_at))
                                            <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                                                {{ $latestPost->published_at->translatedFormat('d F Y') }}
                                            </p>
                                        @endif
                                    </a>
                                @endforeach
                            </div>

                            <a
                                href="{{ route('berita.index') }}"
                                class="mt-5 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-300"
                            >
                                Lihat semua berita
                            </a>
                        </section>
                        @endif



                        <section class="rounded-[1.75rem] border border-emerald-100 bg-emerald-50/70 p-6 shadow-sm dark:border-emerald-900/30 dark:bg-emerald-950/20">
                            <p class="text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase dark:text-emerald-300">
                                Butuh Informasi?
                            </p>

                            <h2 class="mt-3 text-lg font-semibold text-zinc-950 dark:text-white">
                                Hubungi Kami
                            </h2>

                            <p class="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                                Silakan hubungi kami untuk informasi lebih lanjut.
                            </p>

                            <div class="mt-5 space-y-3">
                                <a
                                    href="{{ route('kontak.show') }}"
                                    class="flex items-center justify-center rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                                >
                                    Kontak
                                </a>

                                @if (filled($siteSetting?->phone))
                                    <a
                                        href="https://wa.me/{{ preg_replace('/[^0-9]/', '', $siteSetting->phone) }}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="flex items-center justify-center rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 dark:border-emerald-900/40 dark:bg-zinc-900 dark:text-emerald-300 dark:hover:bg-emerald-950/40"
                                    >
                                        Chat WhatsApp
                                    </a>
                                @endif
                            </div>
                        </section>

                        <!-- {{-- Optional Info Card --}}
                        <section class="rounded-[1.75rem] border border-zinc-100 bg-white/80 p-6 shadow-sm transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-900/80">
                            <p class="text-sm font-semibold text-zinc-950 dark:text-white">
                                Informasi Halaman
                            </p>

                            <dl class="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                                <div class="flex items-center justify-between gap-4">
                                    <dt>Judul</dt>
                                    <dd class="text-right font-medium text-zinc-900 dark:text-zinc-200">
                                        {{ $page->title }}
                                    </dd>
                                </div>

                                @if (filled($page->updated_at))
                                    <div class="flex items-center justify-between gap-4">
                                        <dt>Diperbarui</dt>
                                        <dd class="text-right font-medium text-zinc-900 dark:text-zinc-200">
                                            {{ $page->updated_at->translatedFormat('d F Y') }}
                                        </dd>
                                    </div>
                                @endif
                            </dl>
                        </section> -->

                    </div>
                </aside>
            </div>
        </main>

        <x-public.footer :site-setting="$siteSetting" />
    </div>

    @push('scripts')
        <script>
            function copyCurrentUrl(button) {
                const url = window.location.href;
                const textSpan = button.querySelector('[data-copy-text]');
                const originalText = textSpan.innerText;

                const setCopiedState = () => {
                    textSpan.innerText = 'Berhasil Disalin!';

                    setTimeout(() => {
                        textSpan.innerText = originalText;
                    }, 2000);
                };

                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(url).then(setCopiedState);
                    return;
                }

                const textarea = document.createElement('textarea');
                textarea.value = url;
                textarea.setAttribute('readonly', '');
                textarea.style.position = 'absolute';
                textarea.style.left = '-9999px';

                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);

                setCopiedState();
            }
        </script>
    @endpush
</x-layouts.public>
