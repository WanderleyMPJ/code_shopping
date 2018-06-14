<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Resources\ProductPhotoResource;
use CodeShopping\Models\ProductPhoto;
use CodeShopping\Models\Product;
use Illuminate\Http\Request;
use CodeShopping\Http\Controllers\controller;


class ProductPhotoController extends Controller
{

    public function index(Product $product)
    {
        return ProductPhotoResource::collection($product->photos);
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Product $product, ProductPhoto $photo)
    {
        if($photo->product_id != $product->id){
            abort(404);
        }
        return $photo;
    }

    public function update(Request $request, ProductPhoto $productPhoto)
    {
        //
    }

    public function destroy(ProductPhoto $productPhoto)
    {
        //
    }
}
