<?php

use Illuminate\Database\Seeder;
use CodeShopping\Models;

class ProductPhotosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = Product::all();
        /** @var \Illuminate\Database\Eloquent\Collection $products */
        $this->deleteAllPhotosInProductsPath();

        $products->each(function ($product){

        });

    }

    private function deleteAllPhotosInProductsPath(){
        $path = Models\ProductPhoto::PRODUCTS_PATH;
        \File::deleteDirectory(storage_path($path), true);

    }
}
