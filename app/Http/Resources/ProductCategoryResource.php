<?php

namespace CodeShopping\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductCategoryResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'product' => new ProductResource($this->resource),
            'categories' => CategoryResource::collection($this->resource->categories)
        ];
    }
}
