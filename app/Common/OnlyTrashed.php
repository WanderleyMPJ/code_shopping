<?php
/**
 * Created by PhpStorm.
 * User: Wanderley
 * Date: 20/06/2018
 * Time: 10:04
 */

namespace CodeShopping\Common;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait OnlyTrashed
{
    protected function onlyTrashedIfRequested(Request $request, Builder $query ){
        if($request->get('trashed')==1){
            $query = $query->onlyTrashed();
        }
        return $query;
    }
}