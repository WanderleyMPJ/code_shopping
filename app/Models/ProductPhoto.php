<?php

namespace CodeShopping\Models;

use Illuminate\Database\Eloquent\Model;

class ProductPhoto extends Model
{
    const BASE_PATH = 'app/public';
    const DIR_PRODUCTS = 'products';

    const PRODUCTS_PATH = self::BASE_PATH. '/' . self::DIR_PRODUCTS;


    protected $fillable = ['file_name', 'product_id'];
}
