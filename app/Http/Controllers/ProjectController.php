<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;
use Premi\Http\Controllers\Controller;
use Premi\Model\Project;
use Premi\Model\Presentation;
use Premi\Model\Slide;

/**
 * @file: app/Http/Controller/ProjectController.php
 * @author: DazzleWorks
 * @date: 2015-06-21
 * @description: This class handles the saving, editing, deleting and viewing, 
 *               through a specific view, of a project. 
 * 
 * +---------+------------+--------------+-----------------------+-------------+
 * | Version |     Date   |  Programmer  |        Modify         | Description |
 * +---------+------------+--------------+-----------------------+-------------+
 * |  1.0.0  | 2015-06-21 |Burlin Valerio|class ProjectController| create class| 
 * |         |            |              |                       | and its rest|
 * |         |            |              |                       | functions   |
 * +---------+------------+--------------+-----------------------+-------------+
 */

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param String $username: the username of a user
     * @return Illuminate\Http\Response
     */
    public function index($username)
    {
        $user = \Auth::user();
        $project = $user->projects()->get();

        return response()->json($project);
    }


    /**
     * Store a newly created resource in storage.
     * @param Illuminate\Http\Request
     * @param String $username: the username of a user
     * @return Illuminate\Http\Response
     */
    public function store(Request $request,$username)
    {
        $user = \Auth::user();
        $name  = $request->get('name');

        $project = new Project(['name' => $name]);
        $project = $user->projects()->save($project);
        
        $presentation = new Presentation(['title' => $name]);
        $presentation = $project->presentation()->save($presentation);
        
        $slide = new Slide();
        $slide = $presentation->slides()->save($slide);

        return response()->json($project);
    }

    /**
     * Display the specified resource.
     * @param int $project: the id of a project
     * @return Illuminate\Http\Response
     */
    public function show($username,$projectID)
    {
        $user = \Auth::user();
        $project = $user->projects()->where('_id', '=', $projectID)->get();

        return response($project);
    }


    /**
     * Update the specified resource in storage.
     * @param String $username: the username of a user
     * @param int $project: the id of a project
     * @return Illuminate\Http\Response
     */
    public function update(Request $request,$username,$projectID)
    {
        $user = \Auth::user();
        $project = $user->projects()->where('_id', '=', $projectID)->get();

        $project->name = $request->get('name');

        $project->save();

        return response()->json(['status' => true]);
    }

    /**
     * Remove the specified resource from storage.
     * @param String $username: the username of a user
     * @param int $project: the id of a project
     * @return Illuminate\Http\Response
     */
    public function destroy($username,$projectID)
    {
        $user = \Auth::user();
        $project = $user->projects()->where('_id', '=', $projectID)->get();

        $project->delete();

        return response(true);
    }
}

