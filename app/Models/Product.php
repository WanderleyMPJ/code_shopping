<?php

namespace CodeShopping\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Mnabialek\LaravelEloquentFilter\Traits\Filterable;

class Product extends Model
{
    use Sluggable, SoftDeletes, Filterable;

    protected $dates = ['deleted_at'];
    protected $fillable = ['name', 'active', 'description', 'price'];

    public function sluggable(): array
    {
        return [  'slug' => [
            'source' => 'name'
        ]
        ];
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function photos(){
        return $this->hasMany(ProductPhoto::class);
    }

}
