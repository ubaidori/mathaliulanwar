@php
    $siteName = $siteSetting?->site_name ?? "Pondok Pesantren Mathali'ul Anwar";
    $siteTagline = $siteSetting?->site_tagline ?? 'Membina ilmu, adab, dan akhlak santri.';
    $siteDescription = $siteSetting?->site_description ?? 'Website profil resmi yang menghadirkan informasi pesantren, pendidikan, galeri, berita, dan karya santri dalam satu ruang digital yang tertata.';
    $heroPrimaryCtaLabel = $siteSetting?->hero_primary_cta_label;
    $heroPrimaryCtaUrl = $siteSetting?->hero_primary_cta_url;
    $heroSecondaryCtaLabel = $siteSetting?->hero_secondary_cta_label;
    $heroSecondaryCtaUrl = $siteSetting?->hero_secondary_cta_url;
    $socialMediaLinks = collect([
        'facebook' => $siteSetting?->facebook_url,
        'twitter' => $siteSetting?->twitter_url,
        'instagram' => $siteSetting?->instagram_url,
        'youtube' => $siteSetting?->youtube_url,
    ])->filter();
    $heroFallbackImageUrl = filled($siteSetting?->hero_fallback_image_path)
        ? asset('storage/'.$siteSetting->hero_fallback_image_path)
        : null;
    $heroVideoUrl = filled($siteSetting?->hero_video_path)
        ? asset('storage/'.$siteSetting->hero_video_path)
        : null;
    $heroVideoMimeType = match (strtolower(pathinfo($siteSetting?->hero_video_path ?? '', PATHINFO_EXTENSION))) {
        'webm' => 'video/webm',
        'mov' => 'video/quicktime',
        default => 'video/mp4',
    };
@endphp

<x-layouts.public title="Homepage">
    <div class="relative overflow-x-hidden">
        <div class="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.2),_transparent_50%)]"></div>

        <x-public.header :site-setting="$siteSetting" />

        <main>
            <section class="relative isolate min-h-screen overflow-hidden bg-emerald-950 text-white">
                <div class="absolute inset-0 bg-emerald-950">
                    @if ($heroFallbackImageUrl)
                        <img
                            src="{{ $heroFallbackImageUrl }}"
                            alt="Background homepage {{ $siteName }}"
                            class="absolute inset-0 size-full object-cover"
                        >
                    @endif

                    @if ($heroVideoUrl)
                        <video
                            class="size-full object-cover"
                            autoplay
                            muted
                            loop
                            playsinline
                            preload="metadata"
                            poster="{{ $heroFallbackImageUrl ?? '' }}"
                            onerror="this.classList.add('hidden')"
                        >
                            <source src="{{ $heroVideoUrl }}" type="{{ $heroVideoMimeType }}">
                        </video>
                    @elseif (! $heroFallbackImageUrl)
                        <div class="size-full bg-[radial-gradient(circle_at_20%_20%,_rgba(251,191,36,0.18),_transparent_0_25%),linear-gradient(135deg,_rgba(6,46,33,0.92),_rgba(7,89,63,0.78)_45%,_rgba(2,44,34,0.96))]"></div>
                    @endif
                </div>
                <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,24,18,0.5)_0%,rgba(4,24,18,0.7)_55%,rgba(4,24,18,0.92)_100%)]"></div>
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_32%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),_transparent_36%)]"></div>

                <div class="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-8 lg:px-10 lg:py-12">
                    <div class="mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center">
                        <!-- <div class="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-emerald-50/90 backdrop-blur">
                            <span class="size-2 rounded-full bg-amber-300"></span>
                            Situs Resmi Pesantren
                        </div> -->

                        <div class="mt-4 space-y-4">
                            <p class="-mb-[0.25rem] max-w-4xl text-xl leading-8 font-medium text-emerald-50/96 text-balance sm:text-2xl sm:leading-9">
                                {{ $siteTagline }}
                            </p>
                            <h1 class="mt-2 -mb-[0.125rem] max-w-5xl bg-[linear-gradient(135deg,_#fef3c7_0%,_#fde68a_20%,_#ffffff_48%,_#d1fae5_72%,_#a7f3d0_100%)] bg-clip-text text-5xl leading-[1.02] font-semibold text-transparent sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                                {{ $siteName }}
                            </h1>
                            <p class="mx-auto max-w-3xl text-base leading-8 text-emerald-50/80 sm:text-lg">
                                {{ $siteDescription }}
                            </p>
                        </div>

                        @if (filled($heroPrimaryCtaLabel) && filled($heroPrimaryCtaUrl) || filled($heroSecondaryCtaLabel) && filled($heroSecondaryCtaUrl))
                            <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row pointer-events-auto">
                                @if (filled($heroPrimaryCtaLabel) && filled($heroPrimaryCtaUrl))
                                    <a href="{{ $heroPrimaryCtaUrl }}" class="inline-flex min-w-52 items-center justify-center rounded-full bg-amber-300 px-6 py-3.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-amber-300/20 transition hover:bg-amber-200">
                                        {{ $heroPrimaryCtaLabel }}
                                    </a>
                                @endif

                                @if (filled($heroSecondaryCtaLabel) && filled($heroSecondaryCtaUrl))
                                    <a href="{{ $heroSecondaryCtaUrl }}" class="inline-flex min-w-52 items-center justify-center rounded-full border border-white/18 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/14">
                                        {{ $heroSecondaryCtaLabel }}
                                    </a>
                                @endif
                            </div>
                        @endif
                    </div>
                </div>
            </section>

            <section id="profil" class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div class="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start">
                    <div class="space-y-5">
                        <p class="text-sm font-semibold tracking-[0.3em] text-emerald-700 uppercase dark:text-emerald-300">Profil</p>
                        <h2 class="max-w-2xl text-3xl lg:text-4xl font-semibold text-zinc-950 text-balance dark:text-white">
                            Pondok Pesantren Mathali'ul Anwar adalah lembaga pendidikan Islam yang fokus pada pembekalan akidah, syari'ah dan akhlak.
                        </h2>
                        <p class="max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
                            {{ $profilePage?->excerpt ?? 'Kenali lebih dekat tentang sejarah, pendiri, visi misi, struktur organisasi, dan kegiatan Pondok Pesantren Mathali\'ul Anwar.' }}
                        </p>
                    </div>

                    <article class="h-full">
                        <a href="{{ route('profil.show') }}"
                        class="group flex h-full flex-col rounded-[2rem] border border-emerald-100 bg-white/85 p-7 shadow-lg shadow-emerald-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl dark:border-emerald-900/30 dark:bg-zinc-900/88 dark:shadow-black/20 dark:hover:border-emerald-700/50">

                            @if (filled($profilePage?->featured_image_path))
                                <div class="overflow-hidden rounded-[1.5rem]">
                                    <img src="{{ asset('storage/'.$profilePage->featured_image_path) }}"
                                        alt="{{ $profilePage->title }}"
                                        class="h-auto w-full max-h-auto rounded-[1.5rem] p-4 object-contain transition duration-300 group-hover:scale-105">
                                </div>
                            @endif

                            <p class="mt-4 text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-emerald-300">
                                Profil PPMA
                            </p>

                            <div class="mt-5 flex-1 space-y-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                                <p>
                                    {{ filled($profilePage?->content)
                                        ? Str::limit(strip_tags(\App\Support\RichText::render($profilePage->content)), 120)
                                        : 'Konten profil lengkap siap dikelola dari panel admin melalui halaman dinamis berbasis slug.' }}
                                </p>
                            </div>

                            <span class="mt-6 inline-flex w-fit rounded-full bg-emerald-950 px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-emerald-800">
                                Buka Halaman Profil
                            </span>
                        </a>
                    </article>
                </div>
            </section>

            <section id="pendidikan" class="border-y border-emerald-100/80 bg-white/70 transition-colors duration-300 dark:border-emerald-900/30 dark:bg-zinc-900/56">
                <div class="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
                    <article class="h-full">
                        <a href="{{ route('pendidikan.show') }}"
                        class="group flex h-full flex-col rounded-[2rem] bg-emerald-950 p-8 text-white shadow-xl shadow-emerald-950/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

                            <p class="text-sm font-semibold tracking-[0.24em] text-amber-200 uppercase">
                                Pendidikan
                            </p>

                            <h2 class="mt-4 text-3xl font-semibold text-balance">
                                Berbagai program berbasis keislaman yang tetap mendukung pengetahuan umum.
                            </h2>

                            <p class="mt-4 flex-1 text-sm leading-7 text-emerald-50/80">
                                {{ $educationPage?->excerpt ?? 'Section ini disiapkan untuk memperkenalkan jenjang, program unggulan, dan pendekatan pendidikan pesantren secara ringkas di homepage.' }}
                            </p>

                            <span class="mt-6 inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-950 transition group-hover:bg-emerald-50">
                                Lihat Halaman Pendidikan
                            </span>
                        </a>
                    </article>

                    <div class="grid gap-4 sm:grid-cols-2">
                        <div class="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md dark:border-emerald-900/30 dark:bg-zinc-900 dark:hover:border-emerald-700/50">
                            <p class="text-lg font-semibold text-zinc-950 dark:text-white">Diniyah</p>
                            <p class="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                                Pendidikan keislaman menggunakan sistem sorogan. Kelas diniyah berjenjang dari 
                                <span class="font-bold">Isti'dadiyah</span>, 
                                <span class="font-bold">Awwaliyah</span> dan 
                                <span class="font-bold">Wustha</span>
                            </p>
                        </div>

                        <div class="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md dark:border-emerald-900/30 dark:bg-zinc-900 dark:hover:border-emerald-700/50">
                            <p class="text-lg font-semibold text-zinc-950 dark:text-white">Tahfidz</p>
                            <p class="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                                Program hafalan Al-Qur'an yang diselenggarakan untuk mendukung santri dalam menghafal dan memahami Al-Qur'an.
                            </p>
                        </div>

                        <div class="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md dark:border-emerald-900/30 dark:bg-zinc-900 dark:hover:border-emerald-700/50">
                            <p class="text-lg font-semibold text-zinc-950 dark:text-white">Sekolah Formal</p>
                            <p class="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                                Tersedia sekolah formal yakni <span class="font-bold">SMP</span> dan 
                                <span class="font-bold">SMA Yayasan Abdullah</span>
                            </p>
                        </div>

                        <div class="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md dark:border-emerald-900/30 dark:bg-zinc-900 dark:hover:border-emerald-700/50">
                            <p class="text-lg font-semibold text-zinc-950 dark:text-white">Ekstrakurikuler</p>
                            <p class="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                                Ada berbagai kegiatan ekstrakurikuler yang diselenggarakan untuk mengembangkan bakat dan minat santri.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="galeri" class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div class="space-y-4">
                        <p class="text-sm font-semibold tracking-[0.3em] text-emerald-700 uppercase dark:text-emerald-300">Galeri</p>
                        <h2 class="max-w-2xl text-3xl font-semibold text-zinc-950 text-balance dark:text-white">Dokumentasi Kegiatan Pesantren</h2>
                    </div>
                    <a class="text-emerald-800 hover:text-emerald-700 transition" href="{{ route('galeri.index') }}">
                        Lihat Semua Album <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>

                <div class="mt-10 grid gap-6 lg:grid-cols-3">
                    @forelse ($galleryAlbums as $album)
                        <article class="h-full">
                            <a href="{{ route('galeri.show', $album) }}"
                            class="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md dark:border-emerald-900/30 dark:bg-zinc-900 dark:hover:border-emerald-700/50">

                                <div class="relative h-64 overflow-hidden bg-[linear-gradient(135deg,_rgba(6,95,70,0.16),_rgba(245,158,11,0.18))]">
                                    @if (filled($album->cover_image_path))
                                        <img src="{{ asset('storage/'.$album->cover_image_path) }}"
                                            alt="{{ $album->title }}"
                                            class="size-full object-cover transition duration-500 group-hover:scale-105">
                                    @else
                                        <div class="flex size-full items-end p-6">
                                            <div class="rounded-full border border-white/60 bg-white/75 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-emerald-800 uppercase backdrop-blur">
                                                Album Unggulan
                                            </div>
                                        </div>
                                    @endif
                                </div>

                                <div class="flex flex-1 flex-col space-y-3 p-6">
                                    <p class="text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-emerald-300">
                                        {{ optional($album->event_date)?->translatedFormat('d F Y') ?? 'Dokumentasi Kegiatan' }}
                                    </p>

                                    <h3 class="text-xl font-semibold text-zinc-950 transition group-hover:text-emerald-800 dark:text-white dark:group-hover:text-emerald-300">
                                        {{ Str::limit($album->title, 40) }}
                                    </h3>

                                    <p class="flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                                        {{ Str::limit($album->description, 80) }}
                                    </p>

                                    <span class="inline-flex text-sm font-semibold text-emerald-800 transition group-hover:text-emerald-700">
                                        Buka Album
                                    </span>
                                </div>
                            </a>
                        </article>
                    @empty
                        <div class="rounded-[2rem] border border-dashed border-emerald-200 bg-white/80 p-10 text-sm leading-7 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/88 dark:text-zinc-300 lg:col-span-3">
                            Galeri akan tampil di sini setelah album dan gambar mulai diisi dari panel admin.
                        </div>
                    @endforelse
                </div>
            </section>

            <section id="berita" class="border-y border-emerald-100/80 bg-emerald-950 text-white">
                <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                    <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div class="space-y-4">
                            <p class="text-sm font-semibold tracking-[0.3em] text-amber-200 uppercase">Berita</p>
                            <h2 class="max-w-2xl text-3xl font-semibold text-balance">Kegiatan, agenda, dan kabar terbaru pesantren.</h2>
                        </div>
                        <a class="text-emerald-800 hover:text-emerald-700 transition" href="{{ route('berita.index') }}">
                            Lihat Semua Berita <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>

                    <div class="mt-10 grid gap-6 lg:grid-cols-3">
                        @forelse ($latestPosts as $post)
                            <article class="h-full">
                                <a href="{{ route('berita.show', $post) }}"
                                class="group flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/12">

                                    <div class="overflow-hidden rounded-[1.5rem] bg-white/10">
                                        @if (filled($post->featured_image_path))
                                            <img src="{{ asset('storage/'.$post->featured_image_path) }}"
                                                alt="{{ $post->title }}"
                                                class="h-52 w-full object-cover transition duration-300 group-hover:scale-105">
                                        @else
                                            <div class="flex h-52 items-end bg-[linear-gradient(135deg,_rgba(16,185,129,0.22),_rgba(245,158,11,0.24))] p-5">
                                                <div class="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-amber-100 uppercase backdrop-blur">
                                                    Berita Resmi
                                                </div>
                                            </div>
                                        @endif
                                    </div>

                                    <p class="mt-5 text-sm font-semibold tracking-[0.2em] text-amber-200 uppercase">
                                        {{ $post->category?->name ?? 'Berita' }}
                                    </p>

                                    <h3 class="mt-4 text-2xl font-semibold text-white text-balance transition group-hover:text-amber-100">
                                        {{ Str::limit($post->title, 40) }}
                                    </h3>

                                    <p class="mt-4 flex-1 text-sm leading-7 text-emerald-50/78">
                                        {{ Str::limit($post->excerpt ?: strip_tags(\App\Support\RichText::render($post->content)), 80) }}
                                    </p>

                                    <div class="mt-6 flex items-center justify-between text-xs tracking-[0.2em] text-white/58 uppercase">
                                        <span>{{ optional($post->published_at)?->translatedFormat('d M Y') ?? 'Draft' }}</span>
                                        <span>{{ $post->author?->name ?? 'Editor' }}</span>
                                    </div>

                                    <span class="mt-6 inline-flex text-sm font-semibold text-amber-200 transition group-hover:text-amber-100">
                                        Baca Detail
                                    </span>
                                </a>
                            </article>
                        @empty
                            <div class="rounded-[2rem] border border-dashed border-white/15 bg-white/6 p-10 text-sm leading-7 text-emerald-50/78 lg:col-span-3">
                                Berita terbaru akan tampil di sini setelah konten publik mulai diterbitkan.
                            </div>
                        @endforelse
                    </div>
                </div>
            </section>

            <section id="karya" class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div class="space-y-4">
                        <p class="text-sm font-semibold tracking-[0.3em] text-emerald-700 uppercase dark:text-emerald-300">Karya Santri</p>
                        <h2 class="max-w-2xl text-3xl font-semibold text-zinc-950 text-balance dark:text-white">
                            Ruang apresiasi untuk tulisan, karya visual, dan hasil belajar santri.
                        </h2>
                    </div>
                    <a class="text-emerald-800 hover:text-emerald-700 transition" href="{{ route('karya-santri.index') }}">
                        Lihat Semua<span aria-hidden="true">&rarr;</span>
                    </a>                    
                </div>

                <div class="mt-10 grid gap-6 lg:grid-cols-3">
                    @forelse ($latestWorks as $work)
                        <article class="h-full">
                            <a href="{{ route('karya-santri.show', $work) }}"
                            class="group flex h-full flex-col rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md dark:border-emerald-900/30 dark:bg-zinc-900 dark:hover:border-emerald-700/50 hover:ring-1 hover:shadow-emerald-900/10 hover:ring-1 hover:ring-emerald-200/30">

                                <div class="overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,_rgba(6,95,70,0.16),_rgba(245,158,11,0.18))]">
                                    @if (filled($work->featured_image_path))
                                        <img src="{{ asset('storage/'.$work->featured_image_path) }}"
                                            alt="{{ $work->title }}"
                                            class="h-52 w-full object-cover transition duration-300 group-hover:scale-105">
                                    @else
                                        <div class="flex h-52 items-end p-5">
                                            <div class="rounded-full border border-white/60 bg-white/75 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-emerald-800 uppercase backdrop-blur">
                                                Karya Santri
                                            </div>
                                        </div>
                                    @endif
                                </div>

                                <p class="mt-5 text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase dark:text-emerald-300">
                                    {{ $work->category?->name ?? 'Karya' }}
                                </p>

                                <h3 class="mt-4 text-2xl font-semibold text-zinc-950 text-balance transition group-hover:text-emerald-800 dark:text-white dark:group-hover:text-emerald-300">
                                    {{ Str::limit($work->title, 40) }}
                                </h3>

                                <p class="mt-4 flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                                    {{ Str::limit($work->excerpt ?: strip_tags(\App\Support\RichText::render($work->content)), 80) }}
                                </p>

                                <div class="mt-6 flex items-center justify-between text-xs tracking-[0.2em] text-zinc-500 uppercase dark:text-zinc-400">
                                    <span>{{ $work->author_name }}</span>
                                    <span>{{ optional($work->published_at)?->translatedFormat('d M Y') ?? 'Draft' }}</span>
                                </div>

                                <span class="mt-6 inline-flex text-sm font-semibold text-emerald-800 transition group-hover:text-emerald-700">
                                    Buka Detail
                                </span>
                            </a>
                        </article>
                    @empty
                        <div class="rounded-[2rem] border border-dashed border-emerald-200 bg-white/80 p-10 text-sm leading-7 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/88 dark:text-zinc-300 lg:col-span-3">
                            Karya santri akan mulai tampil di sini setelah admin atau redaksi mengunggah kontennya.
                        </div>
                    @endforelse
                </div>
            </section>

            <section id="kontak" class="bg-zinc-950 text-white">
                <div class="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8">
                    <div class="space-y-6">
                        <div class="space-y-5">
                            <p class="text-sm font-semibold tracking-[0.3em] text-amber-200 uppercase">Kontak</p>
                            <h2 class="max-w-xl text-3xl font-semibold text-balance">Hubungi Kami.</h2>
                            <p class="max-w-xl text-sm leading-8 text-zinc-300">
                                Kirim pertanyaan, atau minta informasi lebih lanjut melalui formulir ini. atau hubungi kami langsung via email, WhatsApp, atau telepon.
                            </p>
                        </div>

                        @include('public.partials.contact-info', [
                            'siteSetting' => $siteSetting,
                        ])
                    </div>

                    @include('public.partials.contact-form', [
                        'redirectRoute' => 'home',
                        'redirectFragment' => 'kontak',
                        'formId' => 'beranda-kontak',
                    ])
                </div>
            </section>
        </main>

        <x-public.footer :site-setting="$siteSetting" />
    </div>
</x-layouts.public>
