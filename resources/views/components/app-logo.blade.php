@props([
    'sidebar' => false,
])

@if($sidebar)
    <flux:sidebar.brand name="PP. Mathali'ul Anwar" {{ $attributes }}>
        <x-slot name="logo" class="flex aspect-square size-9 items-center justify-center overflow-hidden text-accent-foreground">
            <img src="{{ asset('favicon.svg') }}" alt="PPMA" class="size-6 shrink-0">
        </x-slot>
    </flux:sidebar.brand>
@else
    <flux:brand name="PP. Mathali'ul Anwar" {{ $attributes }}>
        <x-slot name="logo" class="flex aspect-square size-9 items-center justify-center overflow-hidden text-accent-foreground">
            <img src="{{ asset('favicon.svg') }}" alt="PPMA" class="size-6 shrink-0">
        </x-slot>
    </flux:brand>
@endif
