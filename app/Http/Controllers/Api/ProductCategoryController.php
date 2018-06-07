<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Resources\ProductCategoryResource;
use CodeShopping\Models\Category;
use CodeShopping\Models\Product;
use Illuminate\Http\Request;
use CodeShopping\Http\Requests\ProductCategoryRequest;
use CodeShopping\Http\Controllers\Controller;

class ProductCategoryController extends Controller
{
    public function index(Product $product)
    {
        return new ProductCategoryResource($product);
    }

    public function store(ProductCategoryRequest $request, Product $product)
    {
       $changed = $product->categories()->sync($request->categories);
       $categoriesattachedid = $changed['attached'];
       $categories = Category::whereIn('id', $categoriesattachedid)->get(); // where id in (1, 3)
        return $categories->count() ? response()->json(new ProductCategoryResource($product),201): [];
    }

    public function destroy(Product $product, Category $category)
    {
        $product->categories()->detach($category->id);
        return response()->json([],204);
    }
}
