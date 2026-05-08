@props([
    'siteSetting' => null,
])

<div class="mb-6 grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-2">
    <!-- Kiri -->
    <div class="min-w-0 rounded-[1.75rem] border border-emerald-100 bg-white/80 p-5 transition-colors duration-300 dark:border-white/10 dark:bg-white/6 sm:p-6 lg:row-span-2">
        <p class="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase dark:text-amber-200 sm:text-sm sm:tracking-[0.2em]">
            Alamat
        </p>

        <p class="mt-3 break-words text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            {{ $siteSetting?->address ?? 'Alamat pesantren belum dilengkapi.' }}
        </p>
    </div>

    <!-- Kanan atas -->
    <div class="min-w-0 rounded-[1.75rem] border border-emerald-100 bg-white/80 p-5 transition-colors duration-300 dark:border-white/10 dark:bg-white/6 sm:p-6">
        <p class="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase dark:text-amber-200 sm:text-sm sm:tracking-[0.2em]">
            WhatsApp
        </p>

        <p class="mt-3 break-words text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            {{ $siteSetting?->whatsapp_number ?? '-' }}
        </p>
    </div>

    <!-- Kanan bawah -->
    <div class="min-w-0 rounded-[1.75rem] border border-emerald-100 bg-white/80 p-5 transition-colors duration-300 dark:border-white/10 dark:bg-white/6 sm:p-6">
        <p class="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase dark:text-amber-200 sm:text-sm sm:tracking-[0.2em]">
            Email
        </p>

        <p class="mt-3 break-all text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:break-words">
            {{ $siteSetting?->email ?? '-' }}
        </p>
    </div>
</div>

@if (filled($siteSetting?->google_maps_embed))
    <div class="min-w-0 overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white/80 transition-colors duration-300 dark:border-white/10 dark:bg-white/6">
        <div class="[&>iframe]:h-[280px] [&>iframe]:w-full [&>iframe]:border-0 sm:[&>iframe]:h-[360px] lg:[&>iframe]:h-[420px]">
            {!! $siteSetting->google_maps_embed !!}
        </div>
    </div>
@endif