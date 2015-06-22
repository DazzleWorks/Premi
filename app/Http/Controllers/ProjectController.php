<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;

use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function getRegister()
    {
        return View::make('register', array('title' => 'Register | LaraTweet'));
    }
    
    public function postRegister()
    {
        $project = new Project;
        $project->name = Input::get('name');

        /*if (!$project->save())
            return Redirect::to('project/register')->with('errorMessage', 'Internal error')->withInput(Input::except($exceptArr));

        if (!Auth::attempt(array('username' => Input::get('username'), 'password' => Input::get('password'))))
            return Redirect::to('project/register')->with('errorMessage', 'Internal error');*/

        return Redirect::intended('project/register');
    }
}
