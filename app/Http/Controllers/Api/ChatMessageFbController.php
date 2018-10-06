<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Firebase\ChatMessageFb;
use CodeShopping\Http\Requests\ChatMessageFbRequest;
use CodeShopping\Models\ChatGroup;
use Illuminate\Http\Request;
use CodeShopping\Http\Controllers\Controller;

class ChatMessageFbController extends Controller
{
    public function store(ChatMessageFbRequest $request, ChatGroup $chat_group){
//        $firebaseUid = \Auth::guard('api')->user()->profile->firebase_uid;
//        $chatMessageFb = new ChatMessageFb();
//        $chatMessageFb->create([
//           'firebase_uid' => $firebaseUid,
//           'chat_group' => $chat_group,
//        ] + $request->all());
        return response()->json([], 204);
    }
}
