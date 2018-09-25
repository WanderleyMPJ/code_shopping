<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Filters\ChatGroupFilter;
use CodeShopping\Http\Requests\ChatGroupCreateRequest;
use CodeShopping\Http\Requests\ChatGroupUpdateRequest;
use CodeShopping\Http\Resources\ChatGroupResource;
use CodeShopping\Models\ChatGroup;
use Illuminate\Http\Request;

class ChatGroupController extends Controller
{

    public function index(Request $request)
    {
        $filter = app(ChatGroupFilter::class);
        /** @var Builder $filterQuery */
        $filterQuery = ChatGroup::withCount('users')
            ->filtered($filter);

        $chat_groups = $request->has('all')
            ? $filterQuery->get()
            : $filterQuery->paginate(5);
        return ChatGroupResource::collection($chat_groups);

    }

    public function store(ChatGroupCreateRequest $request)
    {
        $chatGroup = ChatGroup::createWithPhoto($request->all());
        return new ChatGroupResource($chatGroup);
    }

    public function show(ChatGroup $chatGroup)
    {
        return new ChatGroupResource($chatGroup);
    }

    public function update(ChatGroupUpdateRequest $request, ChatGroup $chat_group)
    {
        $chat_group->updateWithPhoto($request->all());
        return new ChatGroupResource($chat_group);
    }

    public function destroy(ChatGroup $chat_group)
    {
        $chat_group->delete();
        return response()->json([], 204);
    }
}
