@props([
    'siteSetting' => null,
])

@php
    $siteName = $siteSetting?->site_name ?? "Pondok Pesantren Mathali'ul Anwar";
    $logoUrl = filled($siteSetting?->logo_path) ? asset('storage/'.$siteSetting->logo_path) : null;
    $profileNavigation = \App\Models\Page::profileNavigation();
@endphp

<header
    data-public-header-shell
    class="fixed inset-x-0 top-0 z-50 border-b border-emerald-900/10 bg-white/78 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-emerald-950/85"
>
    <div
        data-public-header
        class="mx-auto max-w-7xl px-4 transition-all duration-300 sm:px-6 lg:px-8"
    >
        <div class="flex items-center justify-between gap-4 py-4 transition-all duration-300" data-public-header-inner>
        <a href="{{ route('home') }}" class="flex items-center gap-3 text-zinc-950 transition-colors dark:text-white">
            @if ($logoUrl)
                <div class="flex size-11 items-center justify-center overflow-hidden rounded-2xl">
                    <img src="{{ $logoUrl }}" alt="{{ $siteName }}" class="size-full object-contain">
                </div>
            @else
                <div class="flex size-11 items-center justify-center rounded-2xl bg-emerald-950/6 text-sm font-semibold tracking-[0.2em] text-emerald-800 dark:bg-white/10 dark:text-amber-200">
                    MA
                </div>
            @endif
            <div class="space-y-1">
                <p class="hidden sm:block max-w-56 text-sm tracking-[0.1em] text-zinc-700 dark:text-white/90">Pondok Pesantren</p>
                <p class="text-lg font-bold tracking-[0.2em] text-emerald-700 uppercase dark:text-amber-200 -mt-[0.25rem]">{{ $siteName }}</p>
            </div>
        </a>

        <nav class="hidden items-center gap-6 text-sm text-zinc-600 lg:flex dark:text-white/80">
            <a href="{{ route('home') }}" @class(['text-emerald-900 dark:text-white' => request()->routeIs('home'), 'transition hover:text-emerald-900 dark:hover:text-white'])>Home</a>

            <div class="group relative">
                <button
                    type="button"
                    @class([
                        'flex items-center gap-2 transition hover:text-emerald-900 dark:hover:text-white',
                        'text-emerald-900 dark:text-white' => request()->routeIs('profil.show', 'profil.section.show', 'pendidikan.show'),
                    ])
                >
                    <span>Profil</span>
                    <svg class="size-4 transition duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clip-rule="evenodd" />
                    </svg>
                </button>

                <div class="invisible absolute left-0 top-full pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
                    <div class="w-64 overflow-hidden rounded-3xl border border-emerald-900/10 bg-white/96 p-3 shadow-2xl shadow-emerald-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-emerald-950/95 dark:shadow-emerald-950/30">
                        <a
                            href="{{ route('profil.show') }}"
                            @class([
                                'block rounded-2xl px-4 py-3 text-sm transition hover:bg-emerald-50 hover:text-emerald-900 dark:hover:bg-white/8 dark:hover:text-white',
                                'bg-emerald-100 text-emerald-950 dark:bg-white/10 dark:text-white' => request()->routeIs('profil.show') && ! request()->routeIs('profil.section.show', 'pendidikan.show'),
                                'text-zinc-700 dark:text-white/84' => ! (request()->routeIs('profil.show') && ! request()->routeIs('profil.section.show', 'pendidikan.show')),
                            ])
                        >
                            Ringkasan Profil
                        </a>

                        @foreach ($profileNavigation as $item)
                            @php
                                $routeName = $item['slug'] === 'pendidikan' ? 'pendidikan.show' : 'profil.section.show';
                                $routeParameters = $item['slug'] === 'pendidikan' ? [] : ['page' => $item['slug']];
                                $isActive = $item['slug'] === 'pendidikan'
                                    ? request()->routeIs('pendidikan.show')
                                    : request()->routeIs('profil.section.show') && request()->route('page')?->slug === $item['slug'];
                            @endphp
                            <a
                                href="{{ route($routeName, $routeParameters) }}"
                                @class([
                                    'mt-1 block rounded-2xl px-4 py-3 text-sm transition hover:bg-emerald-50 hover:text-emerald-900 dark:hover:bg-white/8 dark:hover:text-white',
                                    'bg-emerald-100 text-emerald-950 dark:bg-white/10 dark:text-white' => $isActive,
                                    'text-zinc-700 dark:text-white/84' => ! $isActive,
                                ])
                            >
                                {{ $item['label'] }}
                            </a>
                        @endforeach
                    </div>
                </div>
            </div>

            <a href="{{ route('galeri.index') }}" @class(['text-emerald-900 dark:text-white' => request()->routeIs('galeri.index', 'galeri.show'), 'transition hover:text-emerald-900 dark:hover:text-white'])>Galeri</a>
            <a href="{{ route('berita.index') }}" @class(['text-emerald-900 dark:text-white' => request()->routeIs('berita.index', 'berita.show'), 'transition hover:text-emerald-900 dark:hover:text-white'])>Berita</a>
            <a href="{{ route('karya-santri.index') }}" @class(['text-emerald-900 dark:text-white' => request()->routeIs('karya-santri.index', 'karya-santri.show'), 'transition hover:text-emerald-900 dark:hover:text-white'])>Karya Santri</a>
            <!-- <a href="{{ route('kontak.show') }}" @class(['text-emerald-900 dark:text-white' => request()->routeIs('kontak.show'), 'transition hover:text-emerald-900 dark:hover:text-white'])>Kontak</a> -->
        </nav>

        <div class="flex items-center gap-3">
            @include('partials.public.theme-toggle')

            <button
                type="button"
                data-public-menu-toggle
                class="inline-flex size-11 items-center justify-center rounded-full border border-emerald-900/10 bg-emerald-950/6 text-zinc-900 transition hover:bg-emerald-950/10 dark:border-white/12 dark:bg-white/8 dark:text-white dark:hover:bg-white/14 lg:hidden"
                aria-expanded="false"
                aria-controls="public-mobile-menu"
                aria-label="Buka navigasi"
            >
                <span class="relative block size-5">
                    <span class="absolute inset-x-0 top-[3px] h-0.5 rounded-full bg-current transition-all duration-300" data-public-menu-line="top"></span>
                    <span class="absolute inset-x-0 top-[9px] h-0.5 rounded-full bg-current transition-all duration-300" data-public-menu-line="middle"></span>
                    <span class="absolute inset-x-0 top-[15px] h-0.5 rounded-full bg-current transition-all duration-300" data-public-menu-line="bottom"></span>
                </span>
            </button>

            <a
                href="{{ route('kontak.show') }}"
                class="hidden rounded-full border border-emerald-900/10 bg-emerald-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800 dark:border-amber-300/30 dark:bg-amber-300/12 dark:text-amber-100 dark:hover:bg-amber-300/20 lg:inline-flex"
            >
                Kontak
            </a>
        </div>
        </div>

        <div
            id="public-mobile-menu"
            data-public-mobile-menu
            class="pointer-events-none grid grid-rows-[0fr] border-t border-emerald-900/10 opacity-0 transition-all duration-300 ease-out dark:border-white/10 lg:hidden"
        >
            <div class="overflow-hidden">
            <nav class="grid gap-2 pt-4 pb-4 text-sm text-zinc-700 dark:text-zinc-100">
                <a
                    href="{{ route('home') }}"
                    @class([
                        'rounded-2xl px-4 py-3 transition hover:bg-emerald-50 hover:text-emerald-900 dark:hover:bg-white/8 dark:hover:text-white',
                        'bg-emerald-100 text-emerald-950 dark:bg-white/10 dark:text-white' => request()->routeIs('home'),
                    ])
                >
                    Home
                </a>
                <a
                    href="{{ route('profil.show') }}"
                    @class([
                        'rounded-2xl px-4 py-3 transition hover:bg-emerald-50 hover:text-emerald-900 dark:hover:bg-white/8 dark:hover:text-white',
                        'bg-emerald-100 text-emerald-950 dark:bg-white/10 dark:text-white' => request()->routeIs('profil.show', 'profil.section.show', 'pendidikan.show'),
                    ])
                >
                    Profil
                </a>

                <div class="rounded-[1.5rem] border border-emerald-900/10 bg-white/70 p-3 dark:border-white/10 dark:bg-white/4">
                    <p class="px-2 text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase dark:text-emerald-300">Profil PPMA</p>
                    <div class="mt-2 grid gap-1">
                        @foreach ($profileNavigation as $item)
                            @php
                                $routeName = $item['slug'] === 'pendidikan' ? 'pendidikan.show' : 'profil.section.show';
                                $routeParameters = $item['slug'] === 'pendidikan' ? [] : ['page' => $item['slug']];
                                $isActive = $item['slug'] === 'pendidikan'
                                    ? request()->routeIs('pendidikan.show')
                                    : request()->routeIs('profil.section.show') && request()->route('page')?->slug === $item['slug'];
                            @endphp
                            <a
                                href="{{ route($routeName, $routeParameters) }}"
                                @class([
                                    'rounded-2xl px-4 py-3 text-sm text-zinc-600 transition hover:bg-emerald-50 hover:text-emerald-900 dark:text-zinc-200 dark:hover:bg-white/8 dark:hover:text-white',
                                    'bg-emerald-100 text-emerald-950 dark:bg-white/10 dark:text-white' => $isActive,
                                ])
                            >
                                {{ $item['label'] }}
                            </a>
                        @endforeach
                    </div>
                </div>

                <a
                    href="{{ route('galeri.index') }}"
                    @class([
                        'rounded-2xl px-4 py-3 transition hover:bg-emerald-50 hover:text-emerald-900 dark:hover:bg-white/8 dark:hover:text-white',
                        'bg-emerald-100 text-emerald-950 dark:bg-white/10 dark:text-white' => request()->routeIs('galeri.index', 'galeri.show'),
                    ])
                >
                    Galeri
                </a>
                <a
                    href="{{ route('berita.index') }}"
                    @class([
                        'rounded-2xl px-4 py-3 transition hover:bg-emerald-50 hover:text-emerald-900 dark:hover:bg-white/8 dark:hover:text-white',
                        'bg-emerald-100 text-emerald-950 dark:bg-white/10 dark:text-white' => request()->routeIs('berita.index', 'berita.show'),
                    ])
                >
                    Berita
                </a>
                <a
                    href="{{ route('karya-santri.index') }}"
                    @class([
                        'rounded-2xl px-4 py-3 transition hover:bg-emerald-50 hover:text-emerald-900 dark:hover:bg-white/8 dark:hover:text-white',
                        'bg-emerald-100 text-emerald-950 dark:bg-white/10 dark:text-white' => request()->routeIs('karya-santri.index', 'karya-santri.show'),
                    ])
                >
                    Karya Santri
                </a>
                <a href="{{ route('kontak.show') }}" class="rounded-2xl bg-emerald-950 px-4 py-3 text-center font-semibold text-white transition hover:bg-emerald-800 dark:bg-amber-300/12 dark:text-amber-100 dark:hover:bg-amber-300/20">Kontak</a>
            </nav>
            </div>
        </div>
    </div>
</header>

<div class="h-[88px] sm:h-[92px]"></div>

<script>
    (() => {
        const initializePublicHeader = () => {
            const shell = document.querySelector('[data-public-header-shell]');
            const header = document.querySelector('[data-public-header]');
            const inner = document.querySelector('[data-public-header-inner]');
            const toggle = document.querySelector('[data-public-menu-toggle]');
            const menu = document.querySelector('[data-public-mobile-menu]');
            const topLine = document.querySelector('[data-public-menu-line="top"]');
            const middleLine = document.querySelector('[data-public-menu-line="middle"]');
            const bottomLine = document.querySelector('[data-public-menu-line="bottom"]');

            if (! shell || ! header || ! inner) {
                return;
            }

            const syncScrollState = () => {
                const isScrolled = window.scrollY > 16;

                shell.classList.toggle('bg-white/95', isScrolled);
                shell.classList.toggle('shadow-lg', isScrolled);
                shell.classList.toggle('shadow-emerald-900/10', isScrolled);
                shell.classList.toggle('dark:bg-emerald-950/94', isScrolled);

                inner.classList.toggle('py-4', ! isScrolled);
                inner.classList.toggle('py-3', isScrolled);
                inner.classList.toggle('translate-y-0', true);
            };

            const syncMenuState = (isOpen) => {
                if (! toggle || ! menu) {
                    return;
                }

                toggle.setAttribute('aria-expanded', String(isOpen));
                menu.classList.toggle('grid-rows-[0fr]', ! isOpen);
                menu.classList.toggle('grid-rows-[1fr]', isOpen);
                menu.classList.toggle('opacity-0', ! isOpen);
                menu.classList.toggle('opacity-100', isOpen);
                menu.classList.toggle('pointer-events-none', ! isOpen);
                menu.classList.toggle('pointer-events-auto', isOpen);

                if (topLine && middleLine && bottomLine) {
                    topLine.classList.toggle('translate-y-[6px]', isOpen);
                    topLine.classList.toggle('rotate-45', isOpen);
                    middleLine.classList.toggle('opacity-0', isOpen);
                    bottomLine.classList.toggle('-translate-y-[6px]', isOpen);
                    bottomLine.classList.toggle('-rotate-45', isOpen);
                }
            };

            syncScrollState();
            window.addEventListener('scroll', syncScrollState, { passive: true });
            syncMenuState(false);

            if (toggle && menu) {
                toggle.addEventListener('click', () => {
                    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
                    syncMenuState(! isOpen);
                });

                menu.querySelectorAll('a').forEach((link) => {
                    link.addEventListener('click', () => {
                        syncMenuState(false);
                    });
                });

                window.addEventListener('resize', () => {
                    if (window.innerWidth >= 1024) {
                        syncMenuState(false);
                    }
                });
            }
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializePublicHeader, { once: true });
        } else {
            initializePublicHeader();
        }
    })();
</script>
