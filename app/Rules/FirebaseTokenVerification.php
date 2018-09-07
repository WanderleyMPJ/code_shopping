<?php

namespace CodeShopping\Rules;

use CodeShopping\Firebase\Auth as FirebaseAuth;
use Illuminate\Contracts\Validation\Rule;

class FirebaseTokenVerification implements Rule
{
    public function __construct()
    {
        //
    }

    public function passes($attribute, $value)
    {
        $firebaseAuth = app(FirebaseAuth::class );
        try{
            $firebaseAuth->user($value);
            return true;
        }catch (\Exception $e){
            return false;
        }
    }

    public function message()
    {
        return 'Firebase token is invalid';
    }
}
