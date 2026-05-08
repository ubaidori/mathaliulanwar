@props([
    'submitLabel' => 'Simpan Album',
])

<div class="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
    <div class="space-y-6">
        <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
            <div class="grid gap-5">
                <div>
                    <flux:input wire:model="form.title" :label="__('Judul Album')" type="text" required />
                    @error('form.title') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                </div>

                <div>
                    <div class="flex items-center justify-between gap-3">
                        <flux:text class="text-sm font-medium text-zinc-700 dark:text-zinc-200">{{ __('Slug') }}</flux:text>
                        <flux:button type="button" size="sm" variant="filled" wire:click="syncSlug">
                            {{ __('Generate dari judul') }}
                        </flux:button>
                    </div>
                    <flux:input wire:model="form.slug" class="mt-2" type="text" required />
                    @error('form.slug') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                </div>

                <div>
                    <flux:textarea wire:model="form.description" :label="__('Deskripsi Album')" rows="5" />
                    @error('form.description') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                </div>

                <input type="hidden" wire:model="form.cover_image_path">

                <div x-data="{ uploading: false, progress: 0 }" x-on:livewire-upload-start="uploading = true; progress = 0" x-on:livewire-upload-finish="uploading = false" x-on:livewire-upload-cancel="uploading = false" x-on:livewire-upload-error="uploading = false" x-on:livewire-upload-progress="progress = $event.detail.progress">
                    <flux:input wire:model="coverImageUpload" :label="__('Upload Cover Album')" type="file" accept="image/*" />
                    <p class="mt-2 text-xs leading-6 text-zinc-500 dark:text-zinc-400">{{ __('Format gambar umum didukung. Ukuran maksimal 4 MB.') }}</p>
                    @error('coverImageUpload') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                    <div x-cloak x-show="uploading" class="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                        <div class="flex items-center justify-between gap-3 text-xs font-medium text-emerald-900 dark:text-emerald-100">
                            <span>{{ __('Mengunggah cover album...') }}</span>
                            <span x-text="`${progress}%`"></span>
                        </div>
                        <div class="mt-2 h-2 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-900/40">
                            <div class="h-full rounded-full bg-emerald-600 transition-all duration-300" x-bind:style="`width: ${progress}%`"></div>
                        </div>
                    </div>
                    @if ($coverImageUpload)
                        <div class="mt-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
                            <img src="{{ $coverImageUpload->temporaryUrl() }}" alt="Preview cover album" class="h-44 w-full object-cover">
                        </div>
                        <div class="mt-3">
                            <flux:button type="button" size="sm" variant="ghost" wire:click="removeCoverImage">
                                {{ __('Batalkan Upload') }}
                            </flux:button>
                        </div>
                    @elseif (filled($form->cover_image_path))
                        <div class="mt-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
                            <img src="{{ asset('storage/'.$form->cover_image_path) }}" 
                            alt="Cover album" 
                            class="max-h-64 w-full p-3 object-contain object-center">
                        </div>
                        <p class="mt-3 text-xs leading-6 text-zinc-500 dark:text-zinc-400">
                            {{ __('File cover sudah tersimpan dan dikelola otomatis oleh sistem.') }}
                        </p>
                        <div class="mt-3 flex flex-wrap gap-3">
                            <flux:button type="button" size="sm" variant="ghost" :href="asset('storage/'.$form->cover_image_path)" target="_blank">
                                {{ __('Lihat File') }}
                            </flux:button>
                            <flux:button type="button" size="sm" variant="danger" wire:click="removeCoverImage">
                                {{ __('Hapus Cover') }}
                            </flux:button>
                        </div>
                    @endif
                </div>
            </div>
        </div>

        <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
            <div class="flex items-center justify-between gap-4">
                <div>
                    <h2 class="text-lg font-semibold text-zinc-950 dark:text-white">{{ __('Gambar Album') }}</h2>
                    <p class="text-sm text-zinc-500 dark:text-zinc-400">{{ __('Upload gambar album langsung. Sistem akan mengelola path file secara otomatis.') }}</p>
                </div>
                <flux:button type="button" variant="primary" wire:click="addImage">
                    {{ __('Tambah Gambar') }}
                </flux:button>
            </div>

            <div class="mt-6 grid gap-4">
                @foreach ($form->images as $index => $image)
                    <div wire:key="gallery-image-{{ $index }}" class="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-800">
                        <div class="flex items-center justify-between gap-3">
                            <p class="text-sm font-semibold text-zinc-900 dark:text-white">{{ __('Gambar') }} {{ $index + 1 }}</p>
                            <flux:button type="button" variant="danger" size="sm" wire:click="removeImage({{ $index }})">
                                {{ __('Hapus') }}
                            </flux:button>
                        </div>

                        <div class="mt-4 grid gap-4 md:grid-cols-2">
                            <input type="hidden" wire:model="form.images.{{ $index }}.image_path">

                            <div class="md:col-span-2" x-data="{ uploading: false, progress: 0 }" x-on:livewire-upload-start="uploading = true; progress = 0" x-on:livewire-upload-finish="uploading = false" x-on:livewire-upload-cancel="uploading = false" x-on:livewire-upload-error="uploading = false" x-on:livewire-upload-progress="progress = $event.detail.progress">
                                <flux:input wire:model="galleryImageUploads.{{ $index }}" :label="__('Upload Gambar')" type="file" accept="image/*" />
                                <p class="mt-2 text-xs leading-6 text-zinc-500 dark:text-zinc-400">{{ __('Setiap gambar album maksimal 4 MB.') }}</p>
                                @error("galleryImageUploads.$index") <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                                <div x-cloak x-show="uploading" class="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                                    <div class="flex items-center justify-between gap-3 text-xs font-medium text-emerald-900 dark:text-emerald-100">
                                        <span>{{ __('Mengunggah gambar album...') }}</span>
                                        <span x-text="`${progress}%`"></span>
                                    </div>
                                    <div class="mt-2 h-2 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-900/40">
                                        <div class="h-full rounded-full bg-emerald-600 transition-all duration-300" x-bind:style="`width: ${progress}%`"></div>
                                    </div>
                                </div>
                                @if (! empty($galleryImageUploads[$index]))
                                    <div class="mt-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
                                        <img src="{{ $galleryImageUploads[$index]->temporaryUrl() }}" 
                                        alt="Preview gambar album" 
                                        class="max-h-64 w-full p-3 object-contain object-center">
                                    </div>
                                    <div class="mt-3">
                                        <flux:button type="button" size="sm" variant="ghost" wire:click="clearGalleryImageUpload({{ $index }})">
                                            {{ __('Batalkan Upload') }}
                                        </flux:button>
                                    </div>
                                @elseif (filled($form->images[$index]['image_path'] ?? null))
                                    <div class="mt-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
                                        <img src="{{ asset('storage/'.$form->images[$index]['image_path']) }}" 
                                        alt="{{ $form->images[$index]['alt_text'] ?: 'Gambar album' }}" 
                                        class="max-h-64 w-full p-3 object-contain object-center">
                                    </div>
                                    <p class="mt-3 text-xs leading-6 text-zinc-500 dark:text-zinc-400">
                                        {{ __('File gambar sudah tersimpan dan dikelola otomatis oleh sistem.') }}
                                    </p>
                                    <div class="mt-3 flex flex-wrap gap-3">
                                        <flux:button type="button" size="sm" variant="ghost" :href="asset('storage/'.$form->images[$index]['image_path'])" target="_blank">
                                            {{ __('Lihat File') }}
                                        </flux:button>
                                        <flux:button type="button" size="sm" variant="danger" wire:click="removeStoredGalleryImage({{ $index }})">
                                            {{ __('Hapus Gambar') }}
                                        </flux:button>
                                    </div>
                                @endif
                            </div>

                            <div>
                                <flux:input wire:model="form.images.{{ $index }}.caption" :label="__('Caption')" type="text" />
                                @error("form.images.$index.caption") <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                            </div>

                            <div>
                                <flux:input wire:model="form.images.{{ $index }}.alt_text" :label="__('Alt Text')" type="text" />
                                @error("form.images.$index.alt_text") <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                            </div>

                            <div class="md:max-w-40">
                                <flux:input wire:model="form.images.{{ $index }}.sort_order" :label="__('Urutan')" type="number" min="0" />
                                @error("form.images.$index.sort_order") <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>

    <div class="space-y-6">
        <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
            <div class="grid gap-5">
                <div>
                    <flux:input wire:model="form.event_date" :label="__('Tanggal Kegiatan')" type="date" max="2999-12-31" />
                    @error('form.event_date') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                </div>

                <div>
                    <flux:select wire:model="form.status" :label="__('Status Publikasi')">
                        <option value="draft">{{ __('Draft') }}</option>
                        <option value="published">{{ __('Published') }}</option>
                    </flux:select>
                    @error('form.status') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                </div>

                <div class="rounded-2xl bg-zinc-50 p-4 text-sm leading-7 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    <p class="font-medium text-zinc-900 dark:text-white">{{ __('Catatan') }}</p>
                    <p class="mt-2">
                        Admin cukup upload gambar, lalu isi caption, alt text, dan urutan. Path file tidak perlu diisi manual.
                    </p>
                </div>

                <div class="flex flex-wrap gap-3">
                    <flux:button variant="primary" type="submit" wire:loading.attr="disabled" wire:target="coverImageUpload,galleryImageUploads,save">
                        {{ $submitLabel }}
                    </flux:button>
                    <flux:button :href="route('admin.gallery.index')" variant="ghost" wire:navigate>
                        {{ __('Kembali') }}
                    </flux:button>
                </div>
            </div>
        </div>
    </div>
</div>
