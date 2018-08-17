<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Filters\ProductInputFilter;
use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Models\ProductInput;
use CodeShopping\Http\Requests\ProductInputRequest;
use CodeShopping\Http\Resources\ProductInputResource;

class ProductInputController extends Controller
{
    public function index()
    {
        $filter = app(ProductInputFilter::class);
        $filterQuery = ProductInput::With('product')->filtered($filter);
        $inputs = $filterQuery->paginate();
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
