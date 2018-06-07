<?php

namespace CodeShopping\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray($request)
    {
//       return parent::toArray($request);
        return[
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'stock' => (int)$this->stock,
            'price' => (float)$this->price,
            'active' => (bool)$this->active,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
