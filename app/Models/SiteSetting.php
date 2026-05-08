<?php

namespace App\Models;

use Database\Factories\SiteSettingFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'site_name',
    'site_tagline',
    'site_description',
    'logo_path',
    'hero_video_path',
    'hero_fallback_image_path',
    'hero_primary_cta_label',
    'hero_primary_cta_url',
    'hero_secondary_cta_label',
    'hero_secondary_cta_url',
    'address',
    'phone',
    'whatsapp_number',
    'email',
    'google_maps_embed',
    'social_links',
])]
class SiteSetting extends Model
{
    /** @use HasFactory<SiteSettingFactory> */
    use HasFactory;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'social_links' => 'array',
        ];
    }
}
