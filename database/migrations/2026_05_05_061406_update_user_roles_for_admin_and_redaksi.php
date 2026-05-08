<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::table('users')
            ->where('role', 'editor')
            ->update(['role' => 'redaksi']);

        if (Schema::getConnection()->getDriverName() === 'sqlite') {
            Schema::table('users', function (Blueprint $table): void {
                $table->string('role')->default('redaksi')->change();
            });

            return;
        }

        DB::statement("ALTER TABLE users MODIFY role VARCHAR(255) NOT NULL DEFAULT 'redaksi'");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('users')
            ->where('role', 'redaksi')
            ->update(['role' => 'editor']);

        if (Schema::getConnection()->getDriverName() === 'sqlite') {
            Schema::table('users', function (Blueprint $table): void {
                $table->string('role')->default('editor')->change();
            });

            return;
        }

        DB::statement("ALTER TABLE users MODIFY role VARCHAR(255) NOT NULL DEFAULT 'editor'");
    }
};
