<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Resources\ProductResource;
use CodeShopping\Models\Product;
use CodeShopping\Http\Requests\ProductRequest;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index()
    {
        $products = Product::paginate(10);
        return ProductResource::collection($products);
    }

    public function store(ProductRequest $request)
    {
        $Product = Product::create($request->all());
        $Product->refresh();

        return new ProductResource($Product);
    }

    public function show(Product $Product)
    {
        return new ProductResource($Product);
    }

    public function update(ProductRequest $request, Product $Product)
    {
        $Product->fill($request->all());
        $Product->save();

        return new ProductResource($Product);

        //  return response([], 204);

    }

    public function destroy(Product $Product)
    {
        $Product->delete();

        return response([], 204);
    }
}
