<?php

namespace App\Models;

use Database\Factories\WorkCategoryFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable(['name', 'slug', 'description'])]
class WorkCategory extends Model
{
    /** @use HasFactory<WorkCategoryFactory> */
    use HasFactory;

    /**
     * @return HasMany<StudentWork, $this>
     */
    public function studentWorks(): HasMany
    {
        return $this->hasMany(StudentWork::class);
    }
}
