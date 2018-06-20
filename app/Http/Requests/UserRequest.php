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
        return !$this->route('user') ? $this->rulesCreate() : $this->rulesUpdate();
    }

    private function rulesCreate()
    {
        return [
            'name' => 'required|max:255',
            'email' => 'required|unique:users',
            'password'=> 'required'
        ];
    }

    private function rulesUpdate()
    {
        return [
            'name' => 'required|max:255',
            'email' => 'required',
            'password'=> 'required'
        ];
    }
}
