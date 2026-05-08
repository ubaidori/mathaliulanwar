<?php

namespace App\Models;

use Database\Factories\PageFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'title',
    'slug',
    'excerpt',
    'content',
    'featured_image_path',
    'meta_title',
    'meta_description',
    'status',
    'sort_order',
    'published_at',
])]
class Page extends Model
{
    /** @use HasFactory<PageFactory> */
    use HasFactory;

    /**
     * @var array<int, array{slug: string, label: string}>
     */
    public const PROFILE_NAVIGATION = [
        ['slug' => 'visi-misi', 'label' => 'Visi Misi'],
        ['slug' => 'pendiri', 'label' => 'Pendiri'],
        ['slug' => 'sejarah', 'label' => 'Sejarah'],
        ['slug' => 'pendidikan', 'label' => 'Pendidikan'],
        ['slug' => 'struktur', 'label' => 'Struktur'],
    ];

    /**
     * @return array<int, array{slug: string, label: string}>
     */
    public static function profileNavigation(): array
    {
        return self::PROFILE_NAVIGATION;
    }

    /**
     * @return array<int, string>
     */
    public static function profileNavigationSlugs(): array
    {
        return array_column(self::PROFILE_NAVIGATION, 'slug');
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'published_at' => 'datetime',
            'sort_order' => 'integer',
        ];
    }
}
