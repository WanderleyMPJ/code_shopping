<?php

namespace CodeShopping\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductInputResource extends JsonResource
{
    public function toArray($request)
    {
        return[
            'id' => $this->id,
            'amount' => $this->amount,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,

            'product' => new ProductResource($this->product)
        ];
    }
}
