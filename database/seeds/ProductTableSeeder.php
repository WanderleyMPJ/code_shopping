<?php

use Illuminate\Database\Seeder;
use CodeShopping\Models\Product;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Product::class, 10)->create();
    }
}
