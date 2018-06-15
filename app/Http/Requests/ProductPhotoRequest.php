<?php

namespace CodeShopping\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductPhotoRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'photos' => 'required|array',
            'photos.*' => 'required|image|max:'.( 3 * 1024)
        ];
    }
}
