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
                $user->profile->firebase_uid = 'odIzuFFgSIghx0p3xKqZNyoeX3j2';
                $user->profile->save();
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
                ]);
                Model::unguard();
                $user->profile->firebase_uid = 'RhEBDpJIKphZ4WM5YuI2EirGO7s1';
                $user->profile->save();
            });


        factory(User::class, 20)
            ->create([
                'role' => User::ROLE_CUSTOMER
            ])->each(function ($user, $key){
                $user->profile->phone_number = "+165055510{$key}";
                $user->profile->firebase_uid = "user--{$key}";
                $user->profile->save();
            });
    }

    public function getAdminPhoto(){
        return new \Illuminate\Http\UploadedFile(
          storage_path('app/faker/users/if_administrator_67249.png'),
          str_random(16).'.jpg'
        );
    }
}
