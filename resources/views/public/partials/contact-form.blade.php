@props([
    'redirectRoute' => 'home',
    'redirectFragment' => 'kontak',
    'formId' => 'form-kontak',
])

<div id="{{ $formId }}" class="rounded-[2rem] border border-emerald-100 bg-white/90 p-6 shadow-xl shadow-emerald-900/5 transition-colors duration-300 dark:border-white/10 dark:bg-white/8 dark:shadow-black/20 sm:p-8">
    <div class="space-y-3">
        <p class="text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-amber-200">Formulir Kontak</p>
        <h3 class="text-2xl font-semibold text-zinc-950 dark:text-white">Kirim pesan langsung ke admin</h3>
        <p class="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            Isi data dengan jelas agar tim pesantren lebih mudah menindaklanjuti kebutuhan Anda.
        </p>
    </div>

    @if (session('contact_status'))
        <div class="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/15 px-4 py-3 text-sm leading-7 text-emerald-100">
            {{ session('contact_status') }}
        </div>
    @endif

    @if ($errors->any())
        <div class="mt-6 rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm leading-7 text-rose-100">
            Mohon periksa kembali data formulir Anda.
        </div>
    @endif

    <form action="{{ route('kontak.store') }}" method="POST" class="mt-6 space-y-5">
        @csrf
        <input type="hidden" name="redirect_route" value="{{ $redirectRoute }}">
        <input type="hidden" name="redirect_fragment" value="{{ $redirectFragment }}">

        <div class="grid gap-5 sm:grid-cols-2">
            <div>
                <label for="{{ $formId }}_name" class="text-sm font-medium text-zinc-700 dark:text-zinc-200">Nama</label>
                <input
                    id="{{ $formId }}_name"
                    name="name"
                    type="text"
                    value="{{ old('name') }}"
                    class="mt-2 w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-amber-300 dark:border-white/12 dark:bg-white/8 dark:text-white"
                    placeholder="Nama lengkap Anda"
                    required
                >
                @error('name') <p class="mt-2 text-sm text-rose-200">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="{{ $formId }}_email" class="text-sm font-medium text-zinc-700 dark:text-zinc-200">Email</label>
                <input
                    id="{{ $formId }}_email"
                    name="email"
                    type="email"
                    value="{{ old('email') }}"
                    class="mt-2 w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-amber-300 dark:border-white/12 dark:bg-white/8 dark:text-white"
                    placeholder="email@contoh.com"
                    required
                >
                @error('email') <p class="mt-2 text-sm text-rose-200">{{ $message }}</p> @enderror
            </div>
        </div>

        <div class="grid gap-5 sm:grid-cols-2">
            <div>
                <label for="{{ $formId }}_phone" class="text-sm font-medium text-zinc-700 dark:text-zinc-200">Telepon / WhatsApp</label>
                <input
                    id="{{ $formId }}_phone"
                    name="phone"
                    type="text"
                    value="{{ old('phone') }}"
                    class="mt-2 w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-amber-300 dark:border-white/12 dark:bg-white/8 dark:text-white"
                    placeholder="08xxxxxxxxxx"
                >
                @error('phone') <p class="mt-2 text-sm text-rose-200">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="{{ $formId }}_subject" class="text-sm font-medium text-zinc-700 dark:text-zinc-200">Subjek</label>
                <input
                    id="{{ $formId }}_subject"
                    name="subject"
                    type="text"
                    value="{{ old('subject') }}"
                    class="mt-2 w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-amber-300 dark:border-white/12 dark:bg-white/8 dark:text-white"
                    placeholder="Contoh: Informasi pendidikan"
                >
                @error('subject') <p class="mt-2 text-sm text-rose-200">{{ $message }}</p> @enderror
            </div>
        </div>

        <div>
            <label for="{{ $formId }}_message" class="text-sm font-medium text-zinc-700 dark:text-zinc-200">Pesan</label>
            <textarea
                id="{{ $formId }}_message"
                name="message"
                rows="6"
                class="mt-2 w-full rounded-[1.5rem] border border-emerald-100 bg-white px-4 py-3 text-sm leading-7 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-amber-300 dark:border-white/12 dark:bg-white/8 dark:text-white"
                placeholder="Tulis pesan Anda di sini..."
                required
            >{{ old('message') }}</textarea>
            @error('message') <p class="mt-2 text-sm text-rose-200">{{ $message }}</p> @enderror
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-xs leading-6 text-zinc-500 dark:text-zinc-400">
                Dengan mengirim formulir ini, Anda membantu kami menanggapi kebutuhan dengan informasi yang lebih jelas.
            </p>
            <button
                type="submit"
                class="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
            >
                Kirim Pesan
            </button>
        </div>
    </form>
</div>
