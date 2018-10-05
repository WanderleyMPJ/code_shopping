<?php
/**
 * Created by PhpStorm.
 * User: Wanderley
 * Date: 05/10/2018
 * Time: 16:33
 */

namespace CodeShopping\Firebase;


class ChatMessageFb
{
    use FirebaseSync;

    public function create(array $data)
    {
        $type = $data['tipo'];
        switch ($type){
            case 'audio':
            case 'image':
            case 'text' :
        }

        
    }
}