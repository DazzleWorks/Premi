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
 * @description: This class stores user data that is retrieved by the user controller
 *
 * +---------+------------+---------------+------------+--------------+
 * | Version |     Date   |  Programmer   |   Modify   |  Description |
 * +---------+------------+---------------+------------+--------------+
 * |  0.0.1  | 2015-06-19 |Suierica Bogdan| class User | create class |
 * +---------+------------+---------------+------------+--------------+
 */

class User extends Eloquent implements AuthenticatableContract, CanResetPasswordContract
{
    use Authenticatable, CanResetPassword;

    /**
     * Indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'password'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];


    //private $_id;
    private $username;
    private $password;
    //private $firstname;
    //private $lastname;
    private $email;
    
    
    public function projects() {
        return $this->embedsMany(Project::class);
    }
    

    /**
     * getter method that returns the user _id
     * @return array {integer} Returns the user _id
     * Returns the user _id
     */
    public function getId()
    {
        return $this->_id;
    }

    /**
     * setter method that sets the user _id
     * @param $id {Integer}
     */
    public function setId($id)
    {
        $this->_id = $id;
    }

    /**
     * getter method that returns the User username
     * @return {string} Returns the User username
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * setter method that sets the User username
     * @param $username {string}
     */
    public function setUsername($username)
    {
        $this->username = $username;
    }

    /**
     * getter method that returns the User password
     * @return {string} returns the user password
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * setter method that sets the User password
     * @param $password {string}
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**
     * getter method that returns the User firstname
     * @return {String} Returns the User firstname
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * setter method that sets the User firstname
     * @param $firstname {string}
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;
    }

    /**
     * getter method that returns the User lastname
     * @return {String} Returns the User lastname
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * setter method that sets the User lastname
     * @param $lastname {string}
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;
    }

    /**
     * getter method that returns the User email
     * @return {String} Returns the User email
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * setter method that sets the User email
     * @param $email {string}
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * getter method that returns the User projects
     * @return array {Project} Returns the User array of projects
     * Returns the User array of projects
     */
    public function getProjects()
    {
        return $this->projects;
    }

    /**
     * setter method that sets the User array of projects
     * @param $projects array {Project}
     */
    public function setProjects($projects)
    {
        $this->projects = $projects;
    }

    public function getProfileByUsername($username){
        $user = User::find($username);
        return $user;
    }


}

