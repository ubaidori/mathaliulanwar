<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scheme-light dark:scheme-dark">
    <head>
        @include('partials.head', ['title' => $title ?? null])
    </head>
    <body class="bg-[radial-gradient(circle_at_top,_rgba(21,128,61,0.14),_transparent_38%),linear-gradient(180deg,_#fbf8ef_0%,_#f4f7f0_48%,_#eef3ea_100%)] text-zinc-900 antialiased transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_28%),linear-gradient(180deg,_#07120f_0%,_#0b1814_45%,_#101b18_100%)] dark:text-zinc-100">
        {{ $slot }}
    </body>
</html>
