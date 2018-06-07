<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Models\Product;
use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Models\ProductInput;
use Illuminate\Http\Request;
use CodeShopping\Http\Requests\ProductInputRequest;
use CodeShopping\Http\Resources\ProductInputResource;

class ProductInputController extends Controller
{
    public function index()
    {
        $inputs = ProductInput::paginate(10);
        return ProductInputResource::collection($inputs);
    }

    public function store(ProductInputRequest $request, Product $product)
    {
        $ProductInput = ProductInput::create($request->all());

        $product = Product::find($ProductInput->product_id);

        $product->stock += $ProductInput->amount;

        $product->save();
        $ProductInput->refresh();

        return new ProductInputResource($ProductInput);
    }

    public function show(ProductInput $ProductInput)
    {
        return new ProductInputResource($ProductInput);
    }

    public function update(ProductInputRequest $request, ProductInput $ProductInput)
    {
        $ProductInput->fill($request->all());
        $ProductInput->save();

        return new ProductInputResource($ProductInput);

        //  return response([], 204);

    }

    public function destroy(ProductInput $ProductInput)
    {
        $ProductInput->delete();

        return response([], 204);
    }
}
