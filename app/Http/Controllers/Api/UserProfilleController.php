<?php

namespace CodeShopping\Http\Controllers\api;

use CodeShopping\Firebase\Auth as FirebaseAuth;
use CodeShopping\Http\Resources\UserResource;
use Illuminate\Http\Request;
use CodeShopping\Http\Controllers\Controller;


class UserProfilleController extends Controller
{
    public function update(Request $request)
    {
        $data = $request->all();
        if(!$request->has('token')){
            $token = $request->token;
            $data['phone_number'] = $this->getPhoneNumber($token);
        }
        $data['photo'] = $data['photo'] ?? null;
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
