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
 * @date: 2015-06-23
 * @description: This class stores user data that is retrieved by the user 
 * controller.
 *
 * +---------+------------+---------------+------------+---------------+
 * | Version |     Date   |  Programmer   |   Modify   | Description   |
 * +---------+------------+---------------+------------+---------------+
 * |  1.0.0  | 2015-06-23 |Suierica Bogdan| class User | create class  |
 * |         |            |               |            | and function  |
 * |         |            |               |            | projects()    |
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
     * Allows to have embedded Project in a User 
     * @return array
     */
    public function projects() {
        return $this->embedsMany(Project::class);
    }
}

