@php
    $shareMeta = \App\Support\ShareMetadata::forGalleryAlbum($album, $siteSetting);
@endphp

<x-layouts.public :title="$album->title" :meta="$shareMeta">
    <div class="relative overflow-x-hidden">
        <x-public.header :site-setting="$siteSetting" />

        <main class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div class="space-y-8">
                    <div class="rounded-[2rem] border border-emerald-100 bg-white/90 p-8 shadow-xl shadow-emerald-900/5 transition-colors duration-300 dark:border-emerald-900/30 dark:bg-zinc-900/88 dark:shadow-black/20 lg:p-12">
                        <p class="text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-emerald-300">Album Galeri</p>
                        <h1 class="mt-4 text-2xl font-semibold text-zinc-950 text-balance dark:text-white lg:text-3xl">{{ $album->title }}</h1>
                        @if (filled($album->cover_image_path))
                            <div class="mt-8 overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-emerald-50 dark:border-emerald-900/30 dark:bg-zinc-800">
                                <img src="{{ asset('storage/'.$album->cover_image_path) }}" 
                                alt="{{ $album->title }}" 
                                class="h-auto w-full max-h-[500px] object-contain transition duration-300 hover:scale-105">
                            </div>
                        @endif
                        <p class="mt-5 text-base leading-8 text-zinc-600 dark:text-zinc-300">{{ $album->description }}</p>
                        <p class="mt-4 text-sm text-zinc-500 dark:text-zinc-400">{{ optional($album->event_date)?->translatedFormat('d F Y') }}</p>

                    </div>

                    <div class="grid gap-6 md:grid-cols-2">
                        @foreach ($album->images as $image)
                            <figure class="overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white shadow-sm transition-colors duration-300 dark:border-emerald-900/30 dark:bg-zinc-900">
                                <div class="h-auto bg-[linear-gradient(135deg,_rgba(6,95,70,0.16),_rgba(245,158,11,0.18))]">
                                    @if (filled($image->image_path))
                                        <img src="{{ asset('storage/'.$image->image_path) }}" 
                                        alt="{{ $image->alt_text ?? $album->title }}" 
                                        class="h-auto lg:h-auto w-full max-h-[300px] object-contain transition duration-300 hover:scale-105">
                                    @endif
                                </div>
                                <figcaption class="space-y-2 p-5">
                                    <p class="text-sm font-semibold text-zinc-900 dark:text-white">{{ $image->caption ?? 'Dokumentasi kegiatan' }}</p>
                                    <p class="text-xs leading-6 text-zinc-500 dark:text-zinc-400">{{ $image->alt_text ?? $album->title }}</p>
                                </figcaption>
                            </figure>
                        @endforeach
                    </div>
                </div>

                <aside class="space-y-6">
                    @if ($relatedAlbums->isNotEmpty())
                    <div class="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-emerald-900/30 dark:bg-zinc-900">
                        <p class="text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase dark:text-emerald-300">Album Lainnya</p>
                        <div class="mt-4 grid gap-4">
                            @foreach ($relatedAlbums as $relatedAlbum)
                                <a href="{{ route('galeri.show', $relatedAlbum) }}" class="rounded-2xl bg-emerald-50/80 p-4 transition hover:bg-emerald-100 dark:bg-zinc-800 dark:hover:bg-zinc-700">
                                    <p class="text-sm font-semibold text-zinc-900 dark:text-white">{{ $relatedAlbum->title }}</p>
                                    <p class="mt-2 text-xs leading-6 text-zinc-500 dark:text-zinc-400">{{ optional($relatedAlbum->event_date)?->translatedFormat('d M Y') }}</p>
                                </a>
                            @endforeach
                        </div>
                    </div>
                    @else
                    <section class="rounded-[1.75rem] border border-zinc-100 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80">
                        <p class="text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase dark:text-emerald-300">
                            Galeri Terkait
                        </p>
                        <p class="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                            Belum ada galeri terkait lainnya.
                        </p>
                        <a
                            href="{{ route('galeri.index') }}"
                            class="mt-5 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-300"
                        >
                            Lihat semua galeri
                        </a>
                    </section>
                    @endif

                    <div class="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-emerald-900/30 dark:bg-zinc-900">
                        <p class="text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase dark:text-emerald-300">Bagikan:</p>
                        <div class="mt-8 grid grid-cols-2 gap-4">
                            <a href="https://wa.me/?text={{ urlencode(request()->fullUrl()) }}" 
                            target="_blank" 
                            class="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.89 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.079 11.971c0 2.112.552 4.175 1.598 6.011L0 24l6.149-1.613a11.893 11.893 0 005.9 1.554h.005c6.604 0 11.967-5.363 11.97-11.971a11.85 11.85 0 00-3.41-8.461z" />
                                </svg>
                                WhatsApp
                            </a>

                            <a href="https://www.facebook.com/sharer/sharer.php?u={{ urlencode(request()->fullUrl()) }}" 
                            target="_blank" 
                            class="flex items-center justify-center gap-2 rounded-2xl bg-[#1877F2] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35c-0.733 0-1.325 0.593-1.325 1.326v21.348c0 0.733 0.593 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464 0.099 2.794 0.143v3.24l-1.918 0.001c-1.504 0-1.796 0.715-1.796 1.763v2.312h3.591l-0.467 3.622h-3.124v9.294h6.116c0.733 0 1.326-0.593 1.326-1.326v-21.348c0-0.733-0.593-1.326-1.326-1.326z"/>
                                </svg>
                                Facebook
                            </a>

                            <button onclick="copyCurrentUrl(this)" 
                                    class="col-span-2 flex items-center justify-center gap-2 rounded-2xl bg-zinc-100 dark:bg-zinc-800 px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 transition hover:bg-zinc-200 dark:hover:bg-zinc-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                </svg>
                                <span id="copyText">Salin Tautan Artikel</span>
                            </button>
                        </div>

                        <script>
                            function copyCurrentUrl(button) {
                                const url = window.location.href;
                                const textSpan = document.getElementById('copyText');
                                
                                navigator.clipboard.writeText(url).then(() => {
                                    const originalText = textSpan.innerText;
                                    textSpan.innerText = "Berhasil Disalin!";
                                    
                                    setTimeout(() => {
                                        textSpan.innerText = originalText;
                                    }, 2000);
                                });
                            }
                        </script>
                    </div>
                
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
                </aside>
            </div>
        </main>

        <x-public.footer :site-setting="$siteSetting" />
    </div>
</x-layouts.public>
