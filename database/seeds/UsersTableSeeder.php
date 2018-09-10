<?php

use CodeShopping\Models\User;
use CodeShopping\Models\UserProfile;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        \File::deleteDirectory(UserProfile::photosPath(), true);
        factory(User::class, 1)
            ->create([
                'email'=> 'admin@user.com'
            ])
            ->each(function ($user){
                Model::reguard();
                $user->updateWithProfile([
                    'phone_number' => '+16505551230',
                    'photo' => $this->getAdminPhoto()
                ]);
                Model::unguard();
            });

        factory(User::class, 1)
            ->create([
                'email'=> 'customer@user.com',
                'role' => User::ROLE_CUSTOMER
            ])
            ->each(function ($user){
                Model::reguard();
                $user->updateWithProfile([
                    'phone_number' => '+16505551231',
//                    'photo' => $this->getAdminPhoto()
                ]);
                Model::unguard();
            });


        factory(User::class, 50)
            ->create([
                'role' => User::ROLE_CUSTOMER
            ]);
    }

    public function getAdminPhoto(){
        return new \Illuminate\Http\UploadedFile(
          storage_path('app/faker/users/if_administrator_67249.png'),
          str_random(16).'.jpg'
        );
    }
}
