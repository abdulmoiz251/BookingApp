<?php

use Illuminate\Database\Seeder;
use App\Property;

class PropertiesTableSeeder extends Seeder
{
    public function run()
    {
      // Let's truncate our existing records to start from scratch.
      Property::truncate();

      $faker = \Faker\Factory::create();

      // And now, let's create a few articles in our database:
      for ($i = 1; $i < 4; $i++) {
          Property::create([
              'title' => $faker->name,
              'short_desc' => $faker->sentence,
              'desc' => $faker->paragraph,
              'price' => $faker->randomNumber($nbDigits = 2),
              'img' => '/images/properties/property'.$i.'.jpg',
          ]);
      }
    }
}
