<?php

declare(strict_types=1);

namespace CodeShopping\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use Sluggable;

    protected $fillable = ['name', 'active', 'slug'];

    public function sluggable(): array
    {
      return [  'slug' => [
            'source' => 'name'
    ]
          ];
    }
}
