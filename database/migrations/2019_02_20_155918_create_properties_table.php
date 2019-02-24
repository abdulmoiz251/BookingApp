<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('short_desc');
            $table->text('desc');
            $table->decimal('price');
            $table->string('img');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }

    // Staying in the wind and day,
    // The fresh and warm Japanese-style lodge is simple but not simple. The large landscape window overlooks the downstairs and allows the sun to drive straight in. There is a tea table on the bay window, with a fine tea set or a discretion or drink. In the past or talk about life. In the dead of night, read a small book under the warm yellow light next to the small desk, and then sleep in the night with the aromatherapy of the bedside table.
    // 42
    // /images/property/property.jpg
}
