<?php

namespace CodeShopping\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ChatGroup extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'photo'];
    protected $dates = ['deleted_at'];
}
