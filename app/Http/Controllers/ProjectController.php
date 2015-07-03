<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;
use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;

/**
 * @file: app/Http/Controller/ProjectController.php
 * @author: DazzleWorks
 * @date: 2015-06-21
 * @description: This class handles the saving, editing, deleting and viewing, 
 *               through a specific view, of a project 
 * 
 * +---------+------------+--------------+-----------------------+-------------+
 * | Version |     Date   |  Programmer  |        Modify         | Description |
 * +---------+------------+--------------+-----------------------+-------------+
 * |  1.0.0  | 2015-06-21 |Burlin Valerio|class ProjectController| create class| 
 * |         |            |              |                       | and its     |
 * |         |            |              |                       | functions   |
 * +---------+------------+--------------+-----------------------+-------------+
 */

class ProjectController extends Controller
{
    public function create() {
        
    }
    
    public function store() {
        $user = \Auth::user();
        
        $project = new Project;
        $project->name = \Input::get('name');
        
        $project = $user->projects()->save($project);
        
        return \Redirect::intended('user/project/' . $project->_id)->with();
    }
}

