<?php

namespace CodeShopping\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use Sluggable;

    protected $fillable = ['name', 'active', 'slug', 'description', 'price', 'stock'];

    public function sluggable(): array
    {
        return [  'slug' => [
            'source' => 'name'
        ]
        ];
    }
}
