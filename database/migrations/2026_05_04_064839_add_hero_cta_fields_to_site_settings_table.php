<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            $table->string('hero_primary_cta_label')->nullable()->after('hero_fallback_image_path');
            $table->string('hero_primary_cta_url')->nullable()->after('hero_primary_cta_label');
            $table->string('hero_secondary_cta_label')->nullable()->after('hero_primary_cta_url');
            $table->string('hero_secondary_cta_url')->nullable()->after('hero_secondary_cta_label');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            $table->dropColumn([
                'hero_primary_cta_label',
                'hero_primary_cta_url',
                'hero_secondary_cta_label',
                'hero_secondary_cta_url',
            ]);
        });
    }
};
