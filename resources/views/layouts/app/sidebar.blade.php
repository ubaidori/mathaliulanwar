<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('partials.admin-head')
    </head>
    <body class="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <flux:sidebar sticky collapsible="mobile" class="border-e border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <flux:sidebar.header>
                <x-app-logo :sidebar="true" href="{{ route('dashboard') }}" wire:navigate />
                <flux:sidebar.collapse class="lg:hidden" />
            </flux:sidebar.header>

            <flux:sidebar.nav>
                <flux:sidebar.item icon="home" :href="route('dashboard')" :current="request()->routeIs('dashboard')" wire:navigate>
                    {{ __('Dashboard') }}
                </flux:sidebar.item>
                <flux:sidebar.group :heading="__('Konten')" class="grid">
                    @if (auth()->user()->canManagePosts())
                        <flux:sidebar.item icon="newspaper" :href="route('admin.posts.index')" :current="request()->routeIs('admin.posts.*')" wire:navigate>
                            {{ __('Berita') }}
                        </flux:sidebar.item>
                    @endif
                    @if (auth()->user()->canManageGallery())
                        <flux:sidebar.item icon="photo" :href="route('admin.gallery.index')" :current="request()->routeIs('admin.gallery.*')" wire:navigate>
                            {{ __('Galeri') }}
                        </flux:sidebar.item>
                    @endif
                    @if (auth()->user()->canManageStudentWorks())
                        <flux:sidebar.item icon="academic-cap" :href="route('admin.student-works.index')" :current="request()->routeIs('admin.student-works.*')" wire:navigate>
                            {{ __('Karya Santri') }}
                        </flux:sidebar.item>
                    @endif
                </flux:sidebar.group>
                <flux:sidebar.group :heading="__('Setting')" class="grid">
                    @if (auth()->user()->canManagePages())
                        <flux:sidebar.item icon="document-text" :href="route('admin.pages.index')" :current="request()->routeIs('admin.pages.*')" wire:navigate>
                            {{ __('Profil') }}
                        </flux:sidebar.item>
                    @endif
                    @if (auth()->user()->canManageContactMessages())
                        <flux:sidebar.item icon="envelope" :href="route('admin.contact-messages.index')" :current="request()->routeIs('admin.contact-messages.*')" wire:navigate>
                            {{ __('Pesan') }}
                        </flux:sidebar.item>
                    @endif
                    @if (auth()->user()->canManageUsers())
                        <flux:sidebar.item icon="users" :href="route('admin.users.index')" :current="request()->routeIs('admin.users.*')" wire:navigate>
                            {{ __('User') }}
                        </flux:sidebar.item>
                    @endif
                    @if (auth()->user()->canManageSiteSettings())
                        <flux:sidebar.item icon="cog-6-tooth" :href="route('admin.site-settings.edit')" :current="request()->routeIs('admin.site-settings.*')" wire:navigate>
                            {{ __('Site Setting') }}
                        </flux:sidebar.item>
                    @endif

                </flux:sidebar.group>
            </flux:sidebar.nav>

            <flux:spacer />

            <!-- <flux:sidebar.nav>
                <div class="px-2 pb-3">
                    <x-admin.theme-toggle />
                </div>
                <flux:sidebar.item icon="globe-alt" :href="route('home')" target="_blank">
                    {{ __('Lihat Website') }}
                </flux:sidebar.item>

                <flux:sidebar.item icon="user-circle" :href="route('profile.edit')" :current="request()->routeIs('profile.edit')" wire:navigate>
                    {{ __('Pengaturan') }}
                </flux:sidebar.item>
            </flux:sidebar.nav> -->

            <x-desktop-user-menu class="hidden lg:block" :name="auth()->user()->name" />
        </flux:sidebar>

        <!-- Mobile User Menu -->
        <flux:header class="border-b border-zinc-200/80 bg-white/92 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/92 lg:hidden">
            <flux:sidebar.toggle class="lg:hidden" icon="bars-2" inset="left" />

            <flux:spacer />

            <x-admin.theme-toggle />

            <flux:dropdown position="top" align="end">
                <flux:profile
                    :initials="auth()->user()->initials()"
                    icon-trailing="chevron-down"
                />

                <flux:menu>
                    <flux:menu.radio.group>
                        <div class="p-0 text-sm font-normal">
                            <div class="flex items-center gap-2 px-1 py-1.5 text-start text-sm">
                                <flux:avatar
                                    :name="auth()->user()->name"
                                    :initials="auth()->user()->initials()"
                                />

                                <div class="grid flex-1 text-start text-sm leading-tight">
                                    <flux:heading class="truncate">{{ auth()->user()->name }}</flux:heading>
                                    <flux:text class="truncate">{{ auth()->user()->email }}</flux:text>
                                    <flux:text class="truncate text-xs">{{ auth()->user()->roleLabel() }}</flux:text>
                                </div>
                            </div>
                        </div>
                    </flux:menu.radio.group>

                    <flux:menu.separator />

                    <flux:menu.radio.group>
                        <flux:menu.item :href="route('profile.edit')" icon="cog" wire:navigate>
                            {{ __('Settings') }}
                        </flux:menu.item>
                    </flux:menu.radio.group>

                    <flux:menu.separator />

                    <form method="POST" action="{{ route('logout') }}" class="w-full">
                        @csrf
                        <flux:menu.item
                            as="button"
                            type="submit"
                            icon="arrow-right-start-on-rectangle"
                            class="w-full cursor-pointer"
                            data-test="logout-button"
                        >
                            {{ __('Log out') }}
                        </flux:menu.item>
                    </form>
                </flux:menu>
            </flux:dropdown>
        </flux:header>

        {{ $slot }}

        @persist('toast')
            <flux:toast.group position="top end">
                <flux:toast />
            </flux:toast.group>
        @endpersist

        @if (session('status'))
            <div
                id="admin-flash-toast"
                class="hidden"
                data-message="{{ session('status') }}"
                data-variant="success"
            ></div>
        @endif

        @fluxScripts

        @if (session('status'))
            <script>
                window.addEventListener('load', () => {
                    const toastPayload = document.getElementById('admin-flash-toast');

                    if (! toastPayload) {
                        return;
                    }

                    requestAnimationFrame(() => {
                        setTimeout(() => {
                            document.dispatchEvent(new CustomEvent('toast-show', {
                                detail: {
                                    slots: {
                                        text: toastPayload.dataset.message,
                                    },
                                    dataset: {
                                        variant: toastPayload.dataset.variant || 'success',
                                    },
                                },
                            }));
                        }, 60);
                    });
                }, { once: true });
            </script>
        @endif
    </body>
</html>
