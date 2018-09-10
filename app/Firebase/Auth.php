<?php
declare(strict_types=1);

namespace CodeShopping\Firebase;


use Kreait\Firebase;
use Kreait\Firebase\Auth\UserRecord;

class Auth
{
    /**
     * @var Firebase
     */

    private $firebase;

    public function __construct(firebase $firebase)
    {
        $this->firebase = $firebase;
    }

    public function user($token): UserRecord
    {
        $verifiedIdtoken = $this->firebase->getAuth()->verifyIdToken($token);
        $uId = $verifiedIdtoken->getClaim('sub');
        return $this->firebase->getAuth()->getUser($uId);
    }

    public function phoneNumber($token): string
    {
        $user = $this->user($token);
        return $user->phoneNumber;
    }
}