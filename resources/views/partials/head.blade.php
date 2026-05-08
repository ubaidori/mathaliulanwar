<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<title>
    {{ filled($title ?? null) ? $title.' - '.config('app.name', 'PPMA') : config('app.name', 'PPMA') }}
</title>

@php
    $meta = $meta ?? [];
    $metaTitle = $meta['title'] ?? (filled($title ?? null) ? $title.' - '.config('app.name', 'PPMA') : config('app.name', 'PPMA'));
    $metaDescription = $meta['description'] ?? null;
    $metaUrl = $meta['url'] ?? url()->current();
    $metaType = $meta['type'] ?? 'website';
    $metaImage = $meta['image'] ?? null;
@endphp

@if (filled($metaDescription))
    <meta name="description" content="{{ $metaDescription }}" />
@endif

<link rel="canonical" href="{{ $metaUrl }}" />
<meta property="og:site_name" content="{{ config('app.name', 'PPMA') }}" />
<meta property="og:title" content="{{ $metaTitle }}" />
<meta property="og:url" content="{{ $metaUrl }}" />
<meta property="og:type" content="{{ $metaType }}" />

@if (filled($metaDescription))
    <meta property="og:description" content="{{ $metaDescription }}" />
    <meta name="twitter:description" content="{{ $metaDescription }}" />
@endif

@if (filled($metaImage))
    <meta property="og:image" content="{{ $metaImage }}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="{{ $metaImage }}" />
@else
    <meta name="twitter:card" content="summary" />
@endif

<meta name="twitter:title" content="{{ $metaTitle }}" />

<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">

<script>
    (() => {
        const storageKey = 'mathaliulanwar-public-theme';
        const root = document.documentElement;

        const resolveStoredTheme = () => {
            try {
                const savedTheme = localStorage.getItem(storageKey);

                if (savedTheme === 'dark' || savedTheme === 'light') {
                    return savedTheme;
                }
            } catch (error) {
                //
            }

            return 'dark'; // Default to dark if no valid theme is stored
        };

        const applyTheme = (theme) => {
            root.classList.toggle('dark', theme === 'dark');
            root.dataset.theme = theme;
        };

        const syncTheme = () => {
            applyTheme(resolveStoredTheme());
        };

        syncTheme();

        window.publicTheme = {
            current() {
                return root.classList.contains('dark') ? 'dark' : 'light';
            },
            set(theme) {
                if (theme !== 'light' && theme !== 'dark') {
                    return;
                }

                try {
                    localStorage.setItem(storageKey, theme);
                } catch (error) {
                    //
                }

                applyTheme(theme);
                window.dispatchEvent(new CustomEvent('public-theme-changed', { detail: { theme } }));
            },
            toggle() {
                this.set(this.current() === 'dark' ? 'light' : 'dark');
            },
        };

        document.addEventListener('DOMContentLoaded', syncTheme, { once: true });
        window.addEventListener('pageshow', syncTheme);
        window.addEventListener('focus', syncTheme);
    })();
</script>

@fonts

@vite(['resources/css/app.css', 'resources/js/app.js'])
@fluxAppearance
