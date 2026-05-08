<div class="space-y-6">
    <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <p class="text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-emerald-300">Pengaturan Situs</p>
        <h1 class="mt-2 text-3xl font-semibold text-zinc-950 dark:text-white">Kelola Identitas dan Kontak Website</h1>
        <p class="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            Ubah nama situs, hero media, alamat, WhatsApp, email, peta, dan tautan sosial media yang dipakai di halaman publik.
        </p>
    </div>

    <form wire:submit="save" class="space-y-6">
        <div class="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
            <div class="space-y-6">
                <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                    <div class="grid gap-5">
                        <div>
                            <flux:input wire:model="form.site_name" :label="__('Nama Situs')" type="text" required />
                            @error('form.site_name') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                        </div>

                        <div>
                            <flux:input wire:model="form.site_tagline" :label="__('Tagline')" type="text" />
                            @error('form.site_tagline') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                        </div>

                        <div>
                            <flux:textarea wire:model="form.site_description" :label="__('Deskripsi Situs')" rows="5" />
                            @error('form.site_description') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                        </div>

                        <div class="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 dark:border-emerald-900/30 dark:bg-emerald-950/20">
                            <p class="text-sm font-semibold tracking-[0.2em] text-emerald-800 uppercase dark:text-emerald-300">{{ __('Tombol Hero Homepage') }}</p>
                            <div class="mt-4 grid gap-5 lg:grid-cols-2">
                                <div class="space-y-4">
                                    <div>
                                        <flux:input wire:model="form.hero_primary_cta_label" :label="__('Teks Tombol Utama')" type="text" placeholder="Lihat Profil" />
                                        @error('form.hero_primary_cta_label') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                                    </div>
                                    <div>
                                        <flux:input wire:model="form.hero_primary_cta_url" :label="__('Link Tombol Utama')" type="url" placeholder="https://domainanda.test/profil" />
                                        @error('form.hero_primary_cta_url') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                                    </div>
                                </div>

                                <div class="space-y-4">
                                    <div>
                                        <flux:input wire:model="form.hero_secondary_cta_label" :label="__('Teks Tombol Kedua')" type="text" placeholder="Lihat Berita" />
                                        @error('form.hero_secondary_cta_label') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                                    </div>
                                    <div>
                                        <flux:input wire:model="form.hero_secondary_cta_url" :label="__('Link Tombol Kedua')" type="url" placeholder="https://domainanda.test/berita" />
                                        @error('form.hero_secondary_cta_url') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                                    </div>
                                </div>
                            </div>
                            <p class="mt-4 text-xs leading-6 text-zinc-600 dark:text-zinc-300">
                                Kosongkan salah satu pasangan teks + link jika tombol itu tidak ingin ditampilkan di hero homepage.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                    <div class="grid gap-5 md:grid-cols-2">
                        <div x-data="{ uploading: false, progress: 0 }" x-on:livewire-upload-start="uploading = true; progress = 0" x-on:livewire-upload-finish="uploading = false" x-on:livewire-upload-cancel="uploading = false" x-on:livewire-upload-error="uploading = false" x-on:livewire-upload-progress="progress = $event.detail.progress">
                            <flux:input wire:model="form.logo_path" :label="__('Path Logo')" type="text" placeholder="branding/logo.png" />
                            @error('form.logo_path') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                            <flux:input wire:model="logoUpload" class="mt-4" :label="__('Upload Logo')" type="file" accept="image/*" />
                            <p class="mt-2 text-xs leading-6 text-zinc-500 dark:text-zinc-400">{{ __('Format gambar umum didukung. Ukuran maksimal 4 MB.') }}</p>
                            @error('logoUpload') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                            <div x-cloak x-show="uploading" class="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                                <div class="flex items-center justify-between gap-3 text-xs font-medium text-emerald-900 dark:text-emerald-100">
                                    <span>{{ __('Mengunggah logo...') }}</span>
                                    <span x-text="`${progress}%`"></span>
                                </div>
                                <div class="mt-2 h-2 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-900/40">
                                    <div class="h-full rounded-full bg-emerald-600 transition-all duration-300" x-bind:style="`width: ${progress}%`"></div>
                                </div>
                            </div>
                            @if ($logoUpload)
                                <div class="mt-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
                                    <img src="{{ $logoUpload->temporaryUrl() }}" alt="Preview logo" class="h-28 w-28 object-cover">
                                </div>
                                <div class="mt-3">
                                    <flux:button type="button" size="sm" variant="ghost" wire:click="removeLogo">
                                        {{ __('Batalkan Upload') }}
                                    </flux:button>
                                </div>
                            @elseif (filled($form->logo_path))
                                <div class="mt-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
                                    <img src="{{ asset('storage/'.$form->logo_path) }}" 
                                    alt="Logo situs" 
                                    class="max-h-64 w-full p-3 object-contain object-center">
                                </div>
                                <div class="mt-3 flex flex-wrap gap-3">
                                    <flux:button type="button" size="sm" variant="ghost" :href="asset('storage/'.$form->logo_path)" target="_blank">
                                        {{ __('Lihat File') }}
                                    </flux:button>
                                    <flux:button type="button" size="sm" variant="danger" wire:click="removeLogo">
                                        {{ __('Hapus Logo') }}
                                    </flux:button>
                                </div>
                            @endif
                        </div>

                        <div x-data="{ uploading: false, progress: 0 }" x-on:livewire-upload-start="uploading = true; progress = 0" x-on:livewire-upload-finish="uploading = false" x-on:livewire-upload-cancel="uploading = false" x-on:livewire-upload-error="uploading = false" x-on:livewire-upload-progress="progress = $event.detail.progress">
                            <flux:input wire:model="form.hero_video_path" :label="__('Path Video Background Hero')" type="text" placeholder="hero/homepage.mp4" />
                            @error('form.hero_video_path') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                            <flux:input wire:model="heroVideoUpload" class="mt-4" :label="__('Upload Video Background Hero')" type="file" accept=".mp4,.webm,.mov,video/mp4,video/webm,video/quicktime" />
                            <p class="mt-2 text-xs leading-6 text-zinc-500 dark:text-zinc-400">{{ __('Format yang didukung: MP4, WebM, MOV. Ukuran maksimal 50 MB. Jika video diisi, homepage akan memprioritaskan video ini sebagai background utama.') }}</p>
                            @error('heroVideoUpload') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                            <div x-cloak x-show="uploading" class="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                                <div class="flex items-center justify-between gap-3 text-xs font-medium text-emerald-900 dark:text-emerald-100">
                                    <span>{{ __('Mengunggah video hero...') }}</span>
                                    <span x-text="`${progress}%`"></span>
                                </div>
                                <div class="mt-2 h-2 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-900/40">
                                    <div class="h-full rounded-full bg-emerald-600 transition-all duration-300" x-bind:style="`width: ${progress}%`"></div>
                                </div>
                            </div>
                            @if (filled($form->hero_video_path))
                                <div class="mt-3 flex flex-wrap gap-3">
                                    <flux:button type="button" size="sm" variant="ghost" :href="asset('storage/'.$form->hero_video_path)" target="_blank">
                                        {{ __('Lihat Video') }}
                                    </flux:button>
                                    <flux:button type="button" size="sm" variant="danger" wire:click="removeHeroVideo">
                                        {{ __('Hapus Video') }}
                                    </flux:button>
                                </div>
                            @endif
                        </div>

                        <div class="md:col-span-2" x-data="{ uploading: false, progress: 0 }" x-on:livewire-upload-start="uploading = true; progress = 0" x-on:livewire-upload-finish="uploading = false" x-on:livewire-upload-cancel="uploading = false" x-on:livewire-upload-error="uploading = false" x-on:livewire-upload-progress="progress = $event.detail.progress">
                            <flux:input wire:model="form.hero_fallback_image_path" :label="__('Path Gambar Background Hero / Fallback')" type="text" placeholder="hero/homepage-fallback.jpg" />
                            @error('form.hero_fallback_image_path') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                            <flux:input wire:model="heroFallbackImageUpload" class="mt-4" :label="__('Upload Gambar Background Hero / Fallback')" type="file" accept="image/*" />
                            <p class="mt-2 text-xs leading-6 text-zinc-500 dark:text-zinc-400">{{ __('Gunakan gambar landscape yang ringan. Ukuran maksimal 4 MB. Jika video hero kosong atau gagal diputar, gambar ini akan tampil sebagai background homepage.') }}</p>
                            @error('heroFallbackImageUpload') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                            <div x-cloak x-show="uploading" class="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                                <div class="flex items-center justify-between gap-3 text-xs font-medium text-emerald-900 dark:text-emerald-100">
                                    <span>{{ __('Mengunggah gambar fallback...') }}</span>
                                    <span x-text="`${progress}%`"></span>
                                </div>
                                <div class="mt-2 h-2 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-900/40">
                                    <div class="h-full rounded-full bg-emerald-600 transition-all duration-300" x-bind:style="`width: ${progress}%`"></div>
                                </div>
                            </div>
                            @if ($heroFallbackImageUpload)
                                <div class="mt-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
                                    <img src="{{ $heroFallbackImageUpload->temporaryUrl() }}" 
                                    alt="Preview fallback hero" 
                                    class="max-h-64 w-full p-3 object-contain object-center">
                                </div>
                                <div class="mt-3">
                                    <flux:button type="button" size="sm" variant="ghost" wire:click="removeHeroFallbackImage">
                                        {{ __('Batalkan Upload') }}
                                    </flux:button>
                                </div>
                            @elseif (filled($form->hero_fallback_image_path))
                                <div class="mt-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
                                    <img src="{{ asset('storage/'.$form->hero_fallback_image_path) }}" 
                                    alt="Fallback hero" 
                                    class="max-h-64 w-full p-3 object-contain object-center">
                                </div>
                                <div class="mt-3 flex flex-wrap gap-3">
                                    <flux:button type="button" size="sm" variant="ghost" :href="asset('storage/'.$form->hero_fallback_image_path)" target="_blank">
                                        {{ __('Lihat File') }}
                                    </flux:button>
                                    <flux:button type="button" size="sm" variant="danger" wire:click="removeHeroFallbackImage">
                                        {{ __('Hapus Gambar') }}
                                    </flux:button>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>

                <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                    <div class="grid gap-5">
                        <div>
                            <flux:textarea wire:model="form.address" :label="__('Alamat')" rows="4" />
                            @error('form.address') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                        </div>

                        <div class="grid gap-5 md:grid-cols-3">
                            <div>
                                <flux:input wire:model="form.phone" :label="__('Telepon')" type="text" />
                                @error('form.phone') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                            </div>

                            <div>
                                <flux:input wire:model="form.whatsapp_number" :label="__('WhatsApp')" type="text" />
                                @error('form.whatsapp_number') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                            </div>

                            <div>
                                <flux:input wire:model="form.email" :label="__('Email')" type="email" />
                                @error('form.email') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                            </div>
                        </div>

                        <div>
                            <flux:textarea wire:model="form.google_maps_embed" :label="__('Embed Google Maps')" rows="5" />
                            @error('form.google_maps_embed') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                    <div class="grid gap-5">
                        <div>
                            <flux:input wire:model="form.social_links.facebook" :label="__('Facebook URL')" type="url" />
                            @error('form.social_links.facebook') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                        </div>

                        <div>
                            <flux:input wire:model="form.social_links.instagram" :label="__('Instagram URL')" type="url" />
                            @error('form.social_links.instagram') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                        </div>

                        <div>
                            <flux:input wire:model="form.social_links.youtube" :label="__('YouTube URL')" type="url" />
                            @error('form.social_links.youtube') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                        </div>

                        <div>
                            <flux:input wire:model="form.social_links.tiktok" :label="__('TikTok URL')" type="url" />
                            @error('form.social_links.tiktok') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                        </div>

                        <div class="rounded-2xl bg-zinc-50 p-4 text-sm leading-7 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                            <p class="font-medium text-zinc-900 dark:text-white">{{ __('Catatan') }}</p>
                            <p class="mt-2">
                                Field path media memakai path file relatif terhadap `storage/app/public`, misalnya `hero/homepage.mp4`.
                            </p>
                            <p class="mt-2">
                                Jika Anda ingin homepage memakai gambar saja, kosongkan atau hapus video hero. Jika video hero terisi, homepage akan memakai video sebagai background utama dan gambar hanya menjadi fallback.
                            </p>
                            <p class="mt-2">
                                Perubahan kontak dan hero akan langsung memengaruhi halaman publik yang sudah membaca `site_settings`.
                            </p>
                        </div>

                        <div class="flex flex-wrap gap-3">
                            <flux:button variant="primary" type="submit" wire:loading.attr="disabled" wire:target="logoUpload,heroVideoUpload,heroFallbackImageUpload,save">
                                {{ __('Simpan Pengaturan') }}
                            </flux:button>
                            <flux:button :href="route('home')" target="_blank" variant="ghost">
                                {{ __('Lihat Website') }}
                            </flux:button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
