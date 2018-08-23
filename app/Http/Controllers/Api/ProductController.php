<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Common\OnlyTrashed;
use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Filters\ProductFilter;
use CodeShopping\Http\Resources\ProductResource;
use CodeShopping\Models\Product;
use CodeShopping\Http\Requests\ProductRequest;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    use OnlyTrashed;

    public function index(Request $request)
    {
        $filter = app(ProductFilter::class);
        $query = Product::query();
        $query = $this->onlyTrashedIfRequested($request, $query);
        $filterQuery = $query->filtered($filter);
        $products = $filter->hasFilterParameter()?
            $filterQuery->get():
            $filterQuery->paginate(10);
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
    }

    public function destroy(Product $Product)
    {
        $Product->delete();
        return response([], 204);
    }

    public function restore(Product $product){
        $product->restore();
        return response()->json([], 204);
    }
}
