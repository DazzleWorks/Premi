<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Redirect;
use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;
use Premi\User;

class UserController extends Controller
{
    public function showUser($username = ''){
        if(empty($username)){
            return Redirect::to('user/profile/' . Auth::user()->username);
        }
        $profile = User::getProfileByUsername($username);
        return $profile;
    }
    
    public function getRegister()
    {
        return \View::make('register', array('title' => 'Register | LaraTweet'));
    }
    
    public function postRegister()
    {
        $user = new User();
        $user->username = \Input::get('username');
        $user->password = \Hash::make(\Input::get('password'));
        $user->email = \Input::get('email');

        if (!$user->save())
            return \Redirect::to('user/register')->with('errorMessage', 'Internal error')->withInput(\Input::except($exceptArr));

        if (!Auth::attempt(array('username' => \Input::get('username'), 'password' => \Input::get('password'))))
            return \Redirect::to('user/register')->with('errorMessage', 'Internal error');

        return \Redirect::intended('user/register');
    }
}
