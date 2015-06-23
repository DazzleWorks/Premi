<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;

use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;
use Premi\Project;

class ProjectController extends Controller
{
    public function getInsert()
    {
        return \View::make('insert', array('title' => 'Project | LaraTweet'));
    }
    
    public function postInsert()
    {
        $project = new Project();
        $project->name = \Input::get('name');
        $project->presentation = \Input::get('presentation');
        
        if (!$project->save())
            return \Redirect::to('project/insert')->with('errorMessage', 'Internal error')->withInput(\Input::except($exceptArr));

        if (!\Auth::attempt(array('username' => \Input::get('username'), 'password' => \Input::get('password'))))
            return \Redirect::to('project/insert')->with('errorMessage', 'Internal error');

        return \Redirect::intended('project/insert');
    }
}
