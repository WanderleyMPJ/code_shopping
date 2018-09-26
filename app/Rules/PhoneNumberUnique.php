<?php

namespace CodeShopping\Rules;

use CodeShopping\Models\UserProfile;
use Illuminate\Contracts\Validation\Rule;
use CodeShopping\Firebase\Auth as FirebaseAuth;

class PhoneNumberUnique implements Rule
{
    private $ignoreUserId;

    public function __construct($ignoreUserId = null)
    {
        $this->ignoreUserId = $ignoreUserId;
    }


    public function passes($attribute, $value)
    {
        $firebaseAuth = app(FirebaseAuth::class );
        try{
            $phoneNumber = $firebaseAuth->phoneNumber($value);
            $profile = UserProfile::where('phone_number', $phoneNumber)->first();
            return $profile == null || $this->ignoreUserId != null && $this->ignoreUserId == $profile->user->id;
        }catch (\Exception $e){
            return false;
        }
    }

    public function message()
    {
        return 'Phone Number has used'; //a mensagem é esta
    }
}
