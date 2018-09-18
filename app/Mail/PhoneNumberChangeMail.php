<?php

namespace CodeShopping\Mail;

use CodeShopping\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;


class PhoneNumberChangeMail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $url;
    private $token;

    public function __construct(User $user, $token)
    {
        $this->user = $user;
        $this->token = $token;
    }

    public function build()
    {
        $this->url = route('customers.web_phone_number_update', ['token' => $this->token]);
//        return $this->view('mails.phone_number_change_email');
        return $this
            ->subject('Alteração de número de telefone')
            ->markdown('mails.phone_number_change_email');
    }
}

