<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Requests\ProductOutputRequest;
use CodeShopping\Http\Resources\ProductOutputResource;
use CodeShopping\Models\ProductOutput;
use Illuminate\Http\Request;
use CodeShopping\Http\Controllers\Controller;

class ProductOutputController extends Controller
{

    public function index()
    {
        $output = ProductOutput::With('product')->paginate();
        return ProductOutputResource::collection($output);
    }


    public function store(ProductOutputRequest $request)
    {
        $output = ProductOutput::create($request->all());
        return new ProductOutputResource($output);
    }


    public function show(ProductOutput $output)
    {
        return new ProductOutputResource($output);
    }
}

