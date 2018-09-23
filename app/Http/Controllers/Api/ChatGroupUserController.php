<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Requests\ChatGroupUserRequest;
use CodeShopping\Http\Resources\ChatGroupUserResource;
use CodeShopping\Models\ChatGroup;
use CodeShopping\Models\User;
use CodeShopping\Http\Controllers\Controller;

class ChatGroupUserController extends Controller
{
    public function index(ChatGroup $chat_group)
    {
        return new ChatGroupUserResource($chat_group);
    }

    public function store(ChatGroupUserRequest $request, ChatGroup $chat_group)
    {
        $chat_group->users()->attach($request->users);
        $users = User::whereIn('id', $request->users)->get();
        return response()->json(new ChatGroup($chat_group, $users), 201);
    }
}
