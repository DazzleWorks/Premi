<?php

namespace Premi\Http\Controllers\Auth;

use Premi\Model\User;
use Validator;
use Premi\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;


/**
 * @file: app/Http/Controller/Auth/AuthController.php
 * @author: DazzleWorks
 * @date: 2015-06-21
 * @description: This class handles the registration of new users, as well as 
 *               the authentication of existing users.
 * 
 * +---------+------------+---------------+----------------------+-------------+
 * | Version |     Date   |  Programmer   |        Modify        | Description |
 * +---------+------------+---------------+----------------------+-------------+
 * |  1.0.0  | 2015-06-21 |Suierica Bogdan| class AuthController |create class | 
 * |         |            |               |                      |and its      |
 * |         |            |               |                      |functions    |
 * +---------+------------+---------------+----------------------+-------------+
 */

class AuthController extends Controller
{
    use AuthenticatesAndRegistersUsers;
    
    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'getLogout']);
    }

    /**
     * Get a validator for an incoming registration request
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        $rules = [
            'username' => 'required|max:255|unique:users',
            'email' => 'required|email|max:255',
            'firstName' => 'required|max:255',
            'lastName' => 'required|max:255',
            'password' => 'required|confirmed|min:8',
        ]; 
        
        return Validator::make($data, $rules);
    }

    /**
     * Create a new user instance after a valid registration
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'username' => $data['username'],
            'email' => $data['email'],
            'firstName' => $data['firstName'],
            'lastName' => $data['lastName'],
            'password' => bcrypt($data['password']),
        ]);
    }
}
