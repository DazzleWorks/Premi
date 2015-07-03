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
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $user = \Auth::user();

        $project = $user->projects()->get();

        return response($project);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $user = \Auth::user();

        $project = new Project(array('name' => \Input::get('name')));

        $project = $user->projects()->save($project);

        return response(true);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $project
     * @return Response
     */
    public function show($project)
    {
        $user = \Auth::user();

        $project = $user->projects()->where('_id', '=', $project)->get();

        return response($project);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  int  $project
     * @return Response
     */
    public function update($project)
    {
        $user = \Auth::user();

        $project = $user->projects()->where('_id', '=', $project)->get();

        $project->name = \Input::get('name');

        $project->save();

        return response(true);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $project
     * @return Response
     */
    public function destroy($project)
    {
        $user = \Auth::user();

        $project = $user->projects()->where('_id', '=', $project)->get();

        $project->delete();

        return response(true);
    }
}

