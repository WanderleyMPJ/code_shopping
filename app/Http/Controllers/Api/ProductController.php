<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Models\Product;
use CodeShopping\Http\Requests\ProductRequest;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index()
    {
        return Product::all();
    }

    public function store(ProductRequest $request)
    {
        
        $Product = Product::create($request->all());
        $Product->refresh();

        return $Product;
    }

    public function show(Product $Product)
    {
        return $Product;
    }

    public function update(ProductRequest $request, Product $Product)
    {
        $Product->fill($request->all());
        $Product->save();

        return $Product;

        //  return response([], 204);

    }

    public function destroy(Product $Product)
    {
        $Product->delete();

        return response([], 204);
    }
}
