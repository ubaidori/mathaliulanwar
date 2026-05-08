@props([
    'categories' => collect(),
    'submitLabel' => 'Simpan Karya',
])

<div class="mx-auto max-w-6xl space-y-6">
    <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <div class="grid gap-5">
            <div>
                <flux:input wire:model="form.title" :label="__('Judul Karya')" type="text" required />
                @error('form.title') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            <div>
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <flux:text class="text-sm font-medium text-zinc-700 dark:text-zinc-200">{{ __('Slug') }}</flux:text>
                    <flux:button type="button" size="sm" variant="filled" wire:click="syncSlug">
                        {{ __('Generate dari judul') }}
                    </flux:button>
                </div>
                <flux:input wire:model="form.slug" class="mt-2" type="text" required />
                @error('form.slug') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            <div>
                <flux:input wire:model="form.author_name" :label="__('Nama Penulis / Santri')" type="text" required />
                @error('form.author_name') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            <div>
                <flux:textarea wire:model="form.excerpt" :label="__('Ringkasan Singkat')" rows="4" />
                @error('form.excerpt') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            <div>
                <x-admin.rich-text-editor
                    :label="__('Isi Karya / Deskripsi')"
                    model="form.content"
                    :value="$form->content"
                    :required="true"
                    min-height="min-h-[26rem]"
                    :error="$errors->first('form.content')"
                />
                @error('form.content') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>
        </div>
    </div>

    <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <div class="grid gap-5 lg:grid-cols-2">
            <div>
                <flux:select wire:model="form.work_category_id" :label="__('Kategori Karya')">
                    <option value="">{{ __('Tanpa kategori') }}</option>
                    @foreach ($categories as $category)
                        <option value="{{ $category->id }}">{{ $category->name }}</option>
                    @endforeach
                </flux:select>
                @error('form.work_category_id') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            <div>
                <flux:select wire:model="form.status" :label="__('Status Publikasi')">
                    <option value="draft">{{ __('Draft') }}</option>
                    <option value="published">{{ __('Published') }}</option>
                </flux:select>
                @error('form.status') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            <input type="hidden" wire:model="form.featured_image_path">

            <div class="lg:col-span-2" x-data="{ uploading: false, progress: 0 }" x-on:livewire-upload-start="uploading = true; progress = 0" x-on:livewire-upload-finish="uploading = false" x-on:livewire-upload-cancel="uploading = false" x-on:livewire-upload-error="uploading = false" x-on:livewire-upload-progress="progress = $event.detail.progress">
                <flux:input wire:model="featuredImageUpload" :label="__('Upload Featured Image')" type="file" accept="image/*" />
                <p class="mt-2 text-xs leading-6 text-zinc-500 dark:text-zinc-400">{{ __('Format gambar umum didukung. Ukuran maksimal 4 MB.') }}</p>
                @error('featuredImageUpload') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                <div x-cloak x-show="uploading" class="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                    <div class="flex items-center justify-between gap-3 text-xs font-medium text-emerald-900 dark:text-emerald-100">
                        <span>{{ __('Mengunggah featured image...') }}</span>
                        <span x-text="`${progress}%`"></span>
                    </div>
                    <div class="mt-2 h-2 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-900/40">
                        <div class="h-full rounded-full bg-emerald-600 transition-all duration-300" x-bind:style="`width: ${progress}%`"></div>
                    </div>
                </div>
                @if ($featuredImageUpload)
                    <div class="mt-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
                        <img src="{{ $featuredImageUpload->temporaryUrl() }}" 
                        alt="Preview karya santri" 
                        class="max-h-64 w-full p-3 object-contain">
                    </div>
                    <div class="mt-3">
                        <flux:button type="button" size="sm" variant="ghost" wire:click="removeFeaturedImage">
                            {{ __('Batalkan Upload') }}
                        </flux:button>
                    </div>
                @elseif (filled($form->featured_image_path))
                    <div class="mt-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
                        <img src="{{ asset('storage/'.$form->featured_image_path) }}" 
                        alt="Featured image karya santri" 
                        class="max-h-64 w-full p-3 object-contain">
                    </div>
                    <p class="mt-3 text-xs leading-6 text-zinc-500 dark:text-zinc-400">
                        {{ __('Featured image sudah tersimpan dan dikelola otomatis oleh sistem.') }}
                    </p>
                    <div class="mt-3 flex flex-wrap gap-3">
                        <flux:button type="button" size="sm" variant="ghost" :href="asset('storage/'.$form->featured_image_path)" target="_blank">
                            {{ __('Lihat File') }}
                        </flux:button>
                        <flux:button type="button" size="sm" variant="danger" wire:click="removeFeaturedImage">
                            {{ __('Hapus Media') }}
                        </flux:button>
                    </div>
                @endif
            </div>

            <input type="hidden" wire:model="form.attachment_path">

            <div class="lg:col-span-2" x-data="{ uploading: false, progress: 0 }" x-on:livewire-upload-start="uploading = true; progress = 0" x-on:livewire-upload-finish="uploading = false" x-on:livewire-upload-cancel="uploading = false" x-on:livewire-upload-error="uploading = false" x-on:livewire-upload-progress="progress = $event.detail.progress">
                <flux:input wire:model="attachmentUpload" :label="__('Upload Lampiran')" type="file" />
                <p class="mt-2 text-xs leading-6 text-zinc-500 dark:text-zinc-400">{{ __('Format yang didukung: PDF, Word, PowerPoint, Excel, gambar, atau MP4. Ukuran maksimal 10 MB.') }}</p>
                @error('attachmentUpload') <p class="mt-2 text-sm text-red-600">{{ $message }}</p> @enderror
                <div x-cloak x-show="uploading" class="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                    <div class="flex items-center justify-between gap-3 text-xs font-medium text-emerald-900 dark:text-emerald-100">
                        <span>{{ __('Mengunggah lampiran...') }}</span>
                        <span x-text="`${progress}%`"></span>
                    </div>
                    <div class="mt-2 h-2 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-900/40">
                        <div class="h-full rounded-full bg-emerald-600 transition-all duration-300" x-bind:style="`width: ${progress}%`"></div>
                    </div>
                </div>
                @if ($attachmentUpload)
                    <div class="mt-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                        {{ __('File siap diunggah:') }} <strong>{{ $attachmentUpload->getClientOriginalName() }}</strong>
                    </div>
                @endif
                @if (filled($form->attachment_path))
                    <p class="mt-3 text-xs leading-6 text-zinc-500 dark:text-zinc-400">
                        {{ __('Lampiran sudah tersimpan dan dikelola otomatis oleh sistem.') }}
                    </p>
                    <div class="mt-3 flex flex-wrap gap-3">
                        <flux:button type="button" size="sm" variant="ghost" :href="asset('storage/'.$form->attachment_path)" target="_blank">
                            {{ __('Lihat Lampiran') }}
                        </flux:button>
                        <flux:button type="button" size="sm" variant="danger" wire:click="removeAttachment">
                            {{ __('Hapus Lampiran') }}
                        </flux:button>
                    </div>
                @endif
            </div>
        </div>
    </div>

    <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <div class="grid gap-5">
            <div class="rounded-2xl bg-zinc-50 p-4 text-sm leading-7 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                <p class="font-medium text-zinc-900 dark:text-white">{{ __('Catatan') }}</p>
                <p class="mt-2">
                    Featured image cukup diunggah langsung. Path file gambar tidak perlu diisi manual.
                </p>
                <p class="mt-2">
                    Lampiran juga cukup diunggah langsung. Path file lampiran tidak perlu diisi manual.
                </p>
                <p class="mt-2">
                    Isi karya sekarang mendukung paragraf, subjudul, list, kutipan, dan tautan agar lebih nyaman ditulis dan dibaca.
                </p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <flux:button variant="primary" type="submit" wire:loading.attr="disabled" wire:target="featuredImageUpload,attachmentUpload,save">
                    {{ $submitLabel }}
                </flux:button>
                <flux:button :href="route('admin.student-works.index')" variant="ghost" wire:navigate>
                    {{ __('Kembali') }}
                </flux:button>
            </div>
        </div>
    </div>
</div>
