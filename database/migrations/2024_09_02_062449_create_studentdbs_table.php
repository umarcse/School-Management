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
        Schema::create('studentdbs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->bigInteger('student_id');
            $table->string('class');
            $table->string('phone');
            $table->string('address');
            $table->integer('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('studentdbs');
    }
};
