<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('partials.admin-head')
    </head>
    <body class="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <flux:header container class="border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/92">
            <flux:sidebar.toggle class="lg:hidden mr-2" icon="bars-2" inset="left" />

            <x-app-logo href="{{ route('dashboard') }}" wire:navigate />

            <flux:navbar class="-mb-px ms-4 max-lg:hidden">
                <flux:navbar.item icon="layout-grid" :href="route('dashboard')" :current="request()->routeIs('dashboard')" wire:navigate>
                    {{ __('Dashboard') }}
                </flux:navbar.item>
                @if (auth()->user()->canManageUsers())
                    <flux:navbar.item icon="users" :href="route('admin.users.index')" :current="request()->routeIs('admin.users.*')" wire:navigate>
                        {{ __('User') }}
                    </flux:navbar.item>
                @endif
                @if (auth()->user()->canManagePages())
                    <flux:navbar.item icon="document-text" :href="route('admin.pages.index')" :current="request()->routeIs('admin.pages.*')" wire:navigate>
                        {{ __('Halaman') }}
                    </flux:navbar.item>
                @endif
                @if (auth()->user()->canManagePosts())
                    <flux:navbar.item icon="newspaper" :href="route('admin.posts.index')" :current="request()->routeIs('admin.posts.*')" wire:navigate>
                        {{ __('Berita') }}
                    </flux:navbar.item>
                @endif
                @if (auth()->user()->canManageGallery())
                    <flux:navbar.item icon="photo" :href="route('admin.gallery.index')" :current="request()->routeIs('admin.gallery.*')" wire:navigate>
                        {{ __('Galeri') }}
                    </flux:navbar.item>
                @endif
                @if (auth()->user()->canManageStudentWorks())
                    <flux:navbar.item icon="academic-cap" :href="route('admin.student-works.index')" :current="request()->routeIs('admin.student-works.*')" wire:navigate>
                        {{ __('Karya Santri') }}
                    </flux:navbar.item>
                @endif
                @if (auth()->user()->canManageContactMessages())
                    <flux:navbar.item icon="envelope" :href="route('admin.contact-messages.index')" :current="request()->routeIs('admin.contact-messages.*')" wire:navigate>
                        {{ __('Kontak') }}
                    </flux:navbar.item>
                @endif
                @if (auth()->user()->canManageSiteSettings())
                    <flux:navbar.item icon="cog-6-tooth" :href="route('admin.site-settings.edit')" :current="request()->routeIs('admin.site-settings.*')" wire:navigate>
                        {{ __('Site Setting') }}
                    </flux:navbar.item>
                @endif
            </flux:navbar>

            <flux:spacer />

            <div class="me-2 flex items-center gap-2">
                <x-admin.theme-toggle />

                <flux:navbar class="space-x-0.5 rtl:space-x-reverse py-0!">
                    <flux:tooltip :content="__('Lihat Website')" position="bottom">
                        <flux:navbar.item
                            class="h-10 max-lg:hidden [&>div>svg]:size-5"
                            icon="globe-alt"
                            :href="route('home')"
                            target="_blank"
                            :label="__('Lihat Website')"
                        />
                    </flux:tooltip>
                    <flux:tooltip :content="__('Pengaturan')" position="bottom">
                        <flux:navbar.item
                            class="h-10 max-lg:hidden [&>div>svg]:size-5"
                            icon="cog-6-tooth"
                            :href="route('profile.edit')"
                            wire:navigate
                            :label="__('Pengaturan')"
                        />
                    </flux:tooltip>
                </flux:navbar>
            </div>

            <x-desktop-user-menu />
        </flux:header>

        <!-- Mobile Menu -->
        <flux:sidebar collapsible="mobile" sticky class="lg:hidden border-e border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <flux:sidebar.header>
                <x-app-logo :sidebar="true" href="{{ route('dashboard') }}" wire:navigate />
                <flux:sidebar.collapse class="in-data-flux-sidebar-on-desktop:not-in-data-flux-sidebar-collapsed-desktop:-mr-2" />
            </flux:sidebar.header>

            <flux:sidebar.nav>
                <flux:sidebar.group :heading="__('Platform')">
                    <flux:sidebar.item icon="layout-grid" :href="route('dashboard')" :current="request()->routeIs('dashboard')" wire:navigate>
                        {{ __('Dashboard')  }}
                    </flux:sidebar.item>
                    @if (auth()->user()->canManageUsers())
                        <flux:sidebar.item icon="users" :href="route('admin.users.index')" :current="request()->routeIs('admin.users.*')" wire:navigate>
                            {{ __('User') }}
                        </flux:sidebar.item>
                    @endif
                    @if (auth()->user()->canManagePages())
                        <flux:sidebar.item icon="document-text" :href="route('admin.pages.index')" :current="request()->routeIs('admin.pages.*')" wire:navigate>
                            {{ __('Halaman') }}
                        </flux:sidebar.item>
                    @endif
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
                    @if (auth()->user()->canManageContactMessages())
                        <flux:sidebar.item icon="envelope" :href="route('admin.contact-messages.index')" :current="request()->routeIs('admin.contact-messages.*')" wire:navigate>
                            {{ __('Kontak') }}
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

            <flux:sidebar.nav>
                <div class="px-2 pb-3">
                    <x-admin.theme-toggle />
                </div>
                <flux:sidebar.item icon="globe-alt" :href="route('home')" target="_blank">
                    {{ __('Lihat Website') }}
                </flux:sidebar.item>
                <flux:sidebar.item icon="cog-6-tooth" :href="route('profile.edit')" wire:navigate>
                    {{ __('Pengaturan') }}
                </flux:sidebar.item>
            </flux:sidebar.nav>
        </flux:sidebar>

        {{ $slot }}

        @persist('toast')
            <flux:toast.group>
                <flux:toast />
            </flux:toast.group>
        @endpersist

        @fluxScripts
    </body>
</html>
