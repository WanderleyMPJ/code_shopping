<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Resources\CategoryResource;
use CodeShopping\Models\Category;
use CodeShopping\Http\Requests\CategoryRequest;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function index(Request $request)
    {
        /** @var CategoryFilter $filter */
        #filter = app(CategoryFilter::class);
        /** @var Builder $filterQuery */
        $filterQuery = Category::filtered($filter);

        $categories = $filterQuery->get();

     //   $categories = $request->has('all')? Category::all(): Category::paginate(5);
        return CategoryResource::collection($categories);
    }

    public function store(CategoryRequest $request)
    {
        $category = Category::create($request->all());
        $category->refresh();

        return new CategoryResource($category);
    }

    public function show(Category $category)
    {
        return new CategoryResource($category);
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $category->fill($request->all());
        $category->save();

        return new CategoryResource($category);

      //  return response([], 204);

    }

    public function destroy(Category $category)
    {
        $category->delete();

        return response([], 204);
    }
}
