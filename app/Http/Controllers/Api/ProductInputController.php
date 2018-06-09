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
        $inputs = ProductInput::With('product')->paginate();
        return ProductInputResource::collection($inputs);
    }

    public function store(ProductInputRequest $request)
    {
        $input = ProductInput::create($request->all());


        return new ProductInputResource($input);
    }

    public function show(ProductInput $Input)
    {
        return new ProductInputResource($Input);
    }

}
