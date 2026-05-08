<?php

namespace App\Models;

use Database\Factories\GalleryAlbumFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable([
    'title',
    'slug',
    'description',
    'cover_image_path',
    'event_date',
    'status',
    'published_at',
])]
class GalleryAlbum extends Model
{
    /** @use HasFactory<GalleryAlbumFactory> */
    use HasFactory;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'event_date' => 'date',
            'published_at' => 'datetime',
        ];
    }

    /**
     * @return HasMany<GalleryImage, $this>
     */
    public function images(): HasMany
    {
        return $this->hasMany(GalleryImage::class);
    }
}
