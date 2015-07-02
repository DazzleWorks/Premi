<?php

namespace Premi\Model;

use Illuminate\Auth\Authenticatable;
use Jenssegers\Mongodb\Model as Eloquent;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

/**
 * @file: app/Model/User.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class stores user data that is retrieved by the user 
 * controller
 *
 * +---------+------------+---------------+------------+---------------+
 * | Version |     Date   |  Programmer   |   Modify   | Description   |
 * +---------+------------+---------------+------------+---------------+
 * |  1.0.0  | 2015-06-19 |Suierica Bogdan| class User | create class  | 
 * +---------+------------+---------------+------------+---------------+
 */
class User extends Eloquent implements AuthenticatableContract, 
                                       CanResetPasswordContract
{
    use Authenticatable, CanResetPassword;

    /**
     * Indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    /**
     * The attributes that are mass assignable
     * @var array
     * @protected
     * @username: indicates the username of a User
     * @email: indicates the email of a User
     * @firstName: indicates the name of a User
     * @lastName: indicates the surname of a User
     * @password: indicates the password of a User
     */
    protected $fillable = ['username', 'email', 'firstName', 'lastName', 
                           'password'];

    /**
     * The attributes excluded from the model's JSON form
     * @var array
     * @protected
     */
    protected $hidden = ['password', 'remember_token'];
    
     
    /**
     * Functions that allows to have embedded Project in a User 
     * 
     * @return array
     */
    public function projects() {
        return $this->embedsMany(Project::class);
    }
    
    public function getParamByUsername($username) {
        $user = User::find('$username');
        return array('username' => $user->username, 'email' => $user->email,
                     'firstName' => $user->firstName, 'lastName' => $user->lastName);
    }
}

