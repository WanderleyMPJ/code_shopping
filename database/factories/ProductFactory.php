<?php

use Faker\Generator as Faker;

$factory->define(CodeShopping\Models\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->city,
        'price' => $faker->randomFloat(2,100,1000),
        'description' => $faker->text(400)
        ];
});
