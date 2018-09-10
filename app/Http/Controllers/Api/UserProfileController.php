<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Firebase\Auth as FirebaseAuth;
use CodeShopping\Http\Requests\UserProfileUpdateRequest;
use CodeShopping\Http\Resources\UserResource;
use CodeShopping\Http\Controllers\Controller;


class UserProfileController extends Controller
{
    public function update(UserProfileUpdateRequest $request)
    {
        $data = $request->all();
//        dd($data);
        if(!$request->has('token')){
            $token = $request->token;
            $data['phone_number'] = $this->getPhoneNumber($token);
        }
        if($request->has('remove_photo')){
            $data['photo'] = null;
        }
        $user = \Auth::guard('api')->user();
        $user->updateWithProfile($data);
        return new UserResource($user);
    }

    private function getPhoneNumber($token)
    {
        $firebaseAuth = app(FirebaseAuth::class);
        return $firebaseAuth->phoneNumber($token);
    }
}
