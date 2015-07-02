<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;

use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;
use Premi\Model\Project;
use Premi\Model\User;


class ProjectController extends Controller
{
    public function postInsert()
    {
        $project = new Project;
        $project->name = \Input::get('name');
        
        $user = User::first();
        $project = $user->projects()->save($project);
        
        if (!$project->save())
            return \Redirect::to('project/insert')->with('errorMessage', 'Internal error')->withInput(\Input::except($exceptArr));

        if (!\Auth::attempt(array('username' => \Input::get('username'), 'password' => \Input::get('password'))))
            return \Redirect::to('project/insert')->with('errorMessage', 'Internal error');

        return \Redirect::intended('project/insert');
    }
}

