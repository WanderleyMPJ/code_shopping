<?php

namespace CodeShopping\Http\Requests;

use CodeShopping\Rules\FirebaseTokenVerification;
use CodeShopping\Rules\PhoneNumberUnique;
use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users,email',
            'photo' => 'image|max:'.(3 * 1024),
            'token' => [
               'required',
               new FirebaseTokenVerification(),
               new PhoneNumberUnique()
            ]
        ];
    }
}
