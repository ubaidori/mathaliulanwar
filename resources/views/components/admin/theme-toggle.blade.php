<button
    type="button"
    x-data
    data-admin-theme-toggle
    x-on:click="$flux.appearance = $flux.dark ? 'light' : 'dark'"
    x-bind:aria-label="$flux.dark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'"
    class="inline-flex size-10 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-emerald-700 dark:hover:text-emerald-300"
>
    <svg x-show="! $flux.dark" x-cloak class="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4.5"></circle>
        <path d="M12 2.5v2.5"></path>
        <path d="M12 19v2.5"></path>
        <path d="m4.93 4.93 1.77 1.77"></path>
        <path d="m17.3 17.3 1.77 1.77"></path>
        <path d="M2.5 12H5"></path>
        <path d="M19 12h2.5"></path>
        <path d="m4.93 19.07 1.77-1.77"></path>
        <path d="m17.3 6.7 1.77-1.77"></path>
    </svg>

    <svg x-show="$flux.dark" x-cloak class="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"></path>
    </svg>
</button>
