<?php

use Faker\Generator as Faker;

$factory->define(CodeShopping\Models\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->title,
        'price' => $faker->randomNumber(5),
        'description' => $faker->title,
        'stock' => $faker->randomNumber()
    ];
});
