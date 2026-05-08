@props([
    'siteSetting' => null,
])

@php
    $siteName = $siteSetting?->site_name ?? "Pondok Pesantren Mathali'ul Anwar";
@endphp

<footer class="border-t border-emerald-900/10 bg-white/72 text-zinc-900 transition-colors duration-300 dark:border-white/10 dark:bg-emerald-950 dark:text-white">
    <div class="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
            <p class="text-lg font-semibold ">mathaliulanwar<span class="text-emerald-700 dark:text-amber-200">.net</span></p>
            <p class="mt-3 max-w-md text-sm leading-7 text-zinc-600 dark:text-emerald-50/75">
                Pondok Pesantren Mathali'ul Anwar adalah lembaga pendidikan Islam yang fokus pada pembekalan akidah, syari'ah dan akhlak. Didirikan oleh K. Abdullah Bin Husain pada tahun 1935M atau 1354H.
            </p>
        </div>
        <div>
            <p class="text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-amber-200">Navigasi</p>
            <div class="mt-4 grid gap-2 text-sm text-zinc-600 dark:text-emerald-50/75">
                <a href="{{ route('home') }}" class="transition hover:text-emerald-900 dark:hover:text-white">Home</a>
                <a href="{{ route('profil.show') }}" class="transition hover:text-emerald-900 dark:hover:text-white">Profil</a>
                <a href="{{ route('pendidikan.show') }}" class="transition hover:text-emerald-900 dark:hover:text-white">Pendidikan</a>
                <a href="{{ route('berita.index') }}" class="transition hover:text-emerald-900 dark:hover:text-white">Berita</a>
                <a href="{{ route('galeri.index') }}" class="transition hover:text-emerald-900 dark:hover:text-white">Galeri</a>
                <a href="{{ route('kontak.show') }}" class="transition hover:text-emerald-900 dark:hover:text-white">Kontak</a>
            </div>
        </div>
        <div>
            <p class="text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-amber-200">Kontak</p>
            <div class="mt-4 space-y-2 text-sm text-zinc-600 dark:text-emerald-50/75">
                <p>{{ $siteSetting?->address ?? 'Alamat pesantren belum dilengkapi.' }}</p>
                <p>{{ $siteSetting?->phone ?? '-' }}</p>
                <p>{{ $siteSetting?->email ?? '-' }}</p>
            </div>
        </div>            
    </div>
    <div class="lg:col-span-3 mb-4 px-6 text-center text-sm text-zinc-500 dark:text-zinc-400 lg:px-8">
        <p class="text-center text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {{ date('Y') }} 
            <span class="text-emerald-700 dark:text-amber-200">{{ $siteName }}. </span>
            All rights reserved.
        </p>
    </div>
</footer>
