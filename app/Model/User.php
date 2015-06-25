<?php

namespace Premi\Model;

use Illuminate\Auth\Authenticatable;
use Jenssegers\Mongodb\Model as Eloquent;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

/**
 * @file: User.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class stores user data that is retrieved by the user 
 * controller
 *
 * +---------+------------+---------------+------------+---------------------------------+
 * | Version |     Date   |  Programmer   |   Modify   |           Description           |
 * +---------+------------+---------------+------------+---------------------------------+
 * |  1.0.0  | 2015-06-19 |Suierica Bogdan| class User | create class and its getter and |
 * |         |            |               |            | setter functions                | 
 * +---------+------------+---------------+------------+---------------------------------+
 */
class User extends Eloquent implements AuthenticatableContract, CanResetPasswordContract
{
    use Authenticatable, CanResetPassword;

    /**
     * indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    /**
     * the attributes that are mass assignable.
     * @var array
     * @protected
     */
    protected $fillable = ['name', 'email', 'password'];

    /**
     * the attributes excluded from the model's JSON form.
     * @var array
     * @protected
     */
    protected $hidden = ['password', 'remember_token'];

    /**
     * indicates the username of a User
     * @var {string} 
     * @private
     */
    private $username;
    
    /**
     * indicates the password of a User
     * @var {string} 
     * @private
     */
    private $password;
    
    /**
     * indicates the firs tname of a User
     * @var {string} 
     * @private
     */
    private $firstname;
    
    /**
     * indicates the last name of a User
     * @var {string} 
     * @private
     */
    private $lastname;
    
    /**
     * indicates the email of a User
     * @var {string} 
     * @private
     */
    private $email;
    
    
    /**
     * functions that allows to have embedded Project in a User 
     * @return array
     */
    public function projects() {
        return $this->embedsMany(Project::class);
    }

    /**
     * getter function that returns the User _id
     * @return {integer} 
     * returns the User _id
     */
    public function getId() {
        return $this->_id;
    }

    /**
     * getter function that returns the User username
     * @return {string} 
     * returns the User username
     */
    public function getUsername() {
        return $this->username;
    }

    /**
     * setter function that sets the User username
     * @param $username {string}
     */
    public function setUsername($username) {
        $this->username = $username;
    }

    /**
     * getter function that returns the User password
     * @return {string} 
     * returns the User password
     */
    public function getPassword() {
        return $this->password;
    }

    /**
     * setter function that sets the User password
     * @param $password {string}
     */
    public function setPassword($password) {
        $this->password = $password;
    }

    /**
     * getter function that returns the User firstname
     * @return {string} 
     * returns the User firstname
     */
    public function getFirstname() {
        return $this->firstname;
    }

    /**
     * setter function that sets the User firstname
     * @param $firstname {string}
     */
    public function setFirstname($firstname) {
        $this->firstname = $firstname;
    }

    /**
     * getter function that returns the User lastname
     * @return {string} 
     * returns the User lastname
     */
    public function getLastname() {
        return $this->lastname;
    }

    /**
     * setter function that sets the User lastname
     * @param $lastname {string}
     */
    public function setLastname($lastname) {
        $this->lastname = $lastname;
    }

    /**
     * getter function that returns the User email
     * @return {string} 
     * returns the User email
     */
    public function getEmail() {
        return $this->email;
    }

    /**
     * setter function that sets the User email
     * @param $email {string}
     */
    public function setEmail($email) {
        $this->email = $email;
    }
}

