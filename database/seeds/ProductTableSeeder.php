<?php

use CodeShopping\Models\Category;
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
        $categories = Category::all();
        factory(Product::class, 30)
            ->create()
            ->each(function(Product $product) use($categories){
                $categoryid = $categories->random()->id;
                $product->categories()->attach($categoryid);
            });
    }
}
