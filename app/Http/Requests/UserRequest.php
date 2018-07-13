<?php

namespace CodeShopping\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $userId = \Auth::user()->id;
        return [
            'name' => 'required|max:255',
            'email' => 'required|max:255|email|unique:users,email,'.$userId,
            'email' => 'required|max:255|email',
            'password'=> 'required|min:4|max:16'
        ];
    }
}
