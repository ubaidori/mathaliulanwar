<?php

namespace App\Livewire\Forms;

use App\Models\SiteSetting;
use Livewire\Attributes\Validate;
use Livewire\Form;

class SiteSettingForm extends Form
{
    public ?SiteSetting $siteSetting = null;

    #[Validate]
    public string $site_name = '';

    public string $site_tagline = '';

    public string $site_description = '';

    public string $logo_path = '';

    public string $hero_video_path = '';

    public string $hero_fallback_image_path = '';

    public string $hero_primary_cta_label = '';

    public string $hero_primary_cta_url = '';

    public string $hero_secondary_cta_label = '';

    public string $hero_secondary_cta_url = '';

    public string $address = '';

    public string $phone = '';

    public string $whatsapp_number = '';

    public string $email = '';

    public string $google_maps_embed = '';

    /**
     * @var array<string, string>
     */
    public array $social_links = [
        'facebook' => '',
        'instagram' => '',
        'youtube' => '',
        'tiktok' => '',
    ];

    /**
     * @return array<string, mixed>
     */
    protected function rules(): array
    {
        return [
            'site_name' => ['required', 'string', 'max:255'],
            'site_tagline' => ['nullable', 'string', 'max:255'],
            'site_description' => ['nullable', 'string'],
            'logo_path' => ['nullable', 'string', 'max:255'],
            'hero_video_path' => ['nullable', 'string', 'max:255'],
            'hero_fallback_image_path' => ['nullable', 'string', 'max:255'],
            'hero_primary_cta_label' => ['nullable', 'string', 'max:255'],
            'hero_primary_cta_url' => ['nullable', 'url', 'max:255'],
            'hero_secondary_cta_label' => ['nullable', 'string', 'max:255'],
            'hero_secondary_cta_url' => ['nullable', 'url', 'max:255'],
            'address' => ['nullable', 'string'],
            'phone' => ['nullable', 'string', 'max:255'],
            'whatsapp_number' => ['nullable', 'string', 'max:255'],
            'email' => ['nullable', 'email', 'max:255'],
            'google_maps_embed' => ['nullable', 'string'],
            'social_links' => ['nullable', 'array'],
            'social_links.facebook' => ['nullable', 'url', 'max:255'],
            'social_links.instagram' => ['nullable', 'url', 'max:255'],
            'social_links.youtube' => ['nullable', 'url', 'max:255'],
            'social_links.tiktok' => ['nullable', 'url', 'max:255'],
        ];
    }

    public function setSiteSetting(SiteSetting $siteSetting): void
    {
        $this->siteSetting = $siteSetting;
        $this->site_name = $siteSetting->site_name;
        $this->site_tagline = $siteSetting->site_tagline ?? '';
        $this->site_description = $siteSetting->site_description ?? '';
        $this->logo_path = $siteSetting->logo_path ?? '';
        $this->hero_video_path = $siteSetting->hero_video_path ?? '';
        $this->hero_fallback_image_path = $siteSetting->hero_fallback_image_path ?? '';
        $this->hero_primary_cta_label = $siteSetting->hero_primary_cta_label ?? '';
        $this->hero_primary_cta_url = $siteSetting->hero_primary_cta_url ?? '';
        $this->hero_secondary_cta_label = $siteSetting->hero_secondary_cta_label ?? '';
        $this->hero_secondary_cta_url = $siteSetting->hero_secondary_cta_url ?? '';
        $this->address = $siteSetting->address ?? '';
        $this->phone = $siteSetting->phone ?? '';
        $this->whatsapp_number = $siteSetting->whatsapp_number ?? '';
        $this->email = $siteSetting->email ?? '';
        $this->google_maps_embed = $siteSetting->google_maps_embed ?? '';
        $this->social_links = array_merge($this->social_links, $siteSetting->social_links ?? []);
    }

    public function save(): SiteSetting
    {
        $siteSetting = $this->siteSetting ?? new SiteSetting;

        $siteSetting->fill($this->validatedPayload());
        $siteSetting->save();

        $this->siteSetting = $siteSetting;

        return $siteSetting;
    }

    /**
     * @return array<string, mixed>
     */
    private function validatedPayload(): array
    {
        $validated = $this->validate();

        return [
            'site_name' => $validated['site_name'],
            'site_tagline' => $validated['site_tagline'] ?: null,
            'site_description' => $validated['site_description'] ?: null,
            'logo_path' => $validated['logo_path'] ?: null,
            'hero_video_path' => $validated['hero_video_path'] ?: null,
            'hero_fallback_image_path' => $validated['hero_fallback_image_path'] ?: null,
            'hero_primary_cta_label' => $validated['hero_primary_cta_label'] ?: null,
            'hero_primary_cta_url' => $validated['hero_primary_cta_url'] ?: null,
            'hero_secondary_cta_label' => $validated['hero_secondary_cta_label'] ?: null,
            'hero_secondary_cta_url' => $validated['hero_secondary_cta_url'] ?: null,
            'address' => $validated['address'] ?: null,
            'phone' => $validated['phone'] ?: null,
            'whatsapp_number' => $validated['whatsapp_number'] ?: null,
            'email' => $validated['email'] ?: null,
            'google_maps_embed' => $validated['google_maps_embed'] ?: null,
            'social_links' => collect($validated['social_links'] ?? [])
                ->map(fn (mixed $value) => blank($value) ? null : $value)
                ->all(),
        ];
    }
}
