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
        if (! Schema::hasTable('student_works')) {
            Schema::create('student_works', function (Blueprint $table) {
                $table->id();
                $table->foreignId('work_category_id')->nullable();
                $table->foreignId('user_id')->nullable();
                $table->string('title');
                $table->string('slug');
                $table->string('author_name');
                $table->text('excerpt')->nullable();
                $table->longText('content')->nullable();
                $table->string('featured_image_path')->nullable();
                $table->string('attachment_path')->nullable();
                $table->string('status')->default('draft');
                $table->timestamp('published_at')->nullable();
                $table->timestamps();
            });
        }

        Schema::table('student_works', function (Blueprint $table) {
            $table->unique('slug');
            $table->index('status');
            $table->index('published_at');
            $table->foreign('work_category_id')->references('id')->on('work_categories')->nullOnDelete();
            $table->foreign('user_id')->references('id')->on('users')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_works');
    }
};
