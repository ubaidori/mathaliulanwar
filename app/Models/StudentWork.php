<?php

namespace App\Models;

use Database\Factories\StudentWorkFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'work_category_id',
    'user_id',
    'title',
    'slug',
    'author_name',
    'excerpt',
    'content',
    'featured_image_path',
    'attachment_path',
    'status',
    'published_at',
])]
class StudentWork extends Model
{
    /** @use HasFactory<StudentWorkFactory> */
    use HasFactory;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'published_at' => 'datetime',
        ];
    }

    /**
     * @return BelongsTo<WorkCategory, $this>
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(WorkCategory::class, 'work_category_id');
    }

    /**
     * @return BelongsTo<User, $this>
     */
    public function uploader(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
