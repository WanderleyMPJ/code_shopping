<?php

use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;

/**
 * Created by PhpStorm.
 * User: wande
 * Date: 04/08/2018
 * Time: 07:14
 */

class CategoryFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['id', 'name'];

    protected $simpleSorts = ['id', 'name', 'created_at'];
}