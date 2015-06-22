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
