<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;

use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function showProject($id){
        if(empty($id)){
            return Redirect::to('user/profile/' . Auth::user()->username);
        }
        $profile = User::getProfileByUsername($username);
        return $profile;
    }
}
