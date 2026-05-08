<x-layouts.public title="Virtual Tour">
    <div class="relative overflow-x-hidden">
        <x-public.header :site-setting="$siteSetting" />

        <main class="h-full mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
            <section class="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/85 shadow-xl shadow-emerald-900/5 transition-colors duration-300 dark:border-emerald-900/30 dark:bg-zinc-900/90 dark:shadow-black/20">
                <div class="border-b border-emerald-100 px-6 py-6 dark:border-emerald-900/30 sm:px-8">
                    <p class="text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-emerald-300">
                        Jelajahi Pesantren
                    </p>
                    <h1 class="mt-3 text-2xl font-semibold text-zinc-950 dark:text-white sm:text-3xl">
                        Virtual Tour PP. Mathali'ul Anwar
                    </h1>
                    <!-- <p class="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                        Lihat lingkungan pesantren secara interaktif melalui tur virtual. Gunakan navigasi di dalam tampilan untuk berpindah sudut pandang.
                    </p> -->
                </div>

                <iframe
                    src="{{ asset('virtual-tour/index.htm') }}"
                    title="Virtual Tour Pondok Pesantren Mathali'ul Anwar"
                    class="block h-[70vh] min-h-[32rem] w-full border-0 bg-zinc-950 sm:h-[78vh]"
                    allowfullscreen
                    allow="fullscreen; gyroscope; accelerometer"
                ></iframe>
            </section>
        </main>

        <x-public.footer :site-setting="$siteSetting" />
    </div>
</x-layouts.public>
