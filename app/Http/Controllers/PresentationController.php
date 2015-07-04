<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;
use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;

/**
 * @file: app/Http/Controller/PresentationController.php
 * @author: DazzleWorks
 * @date: 2015-06-23
 * @description: This class handles the saving, editing, deleting and viewing,
 * through a specific view, of a presentation.
 *
 * +---------+------------+---------------+-----------------------+-------------+
 * | Version |     Date   |  Programmer   |        Modify         | Description |
 * +---------+------------+---------------+-----------------------+-------------+
 * |  1.0.0  | 2015-06-23 |Suierica Bogdan| class                 |create class,| 
 * |         |            |               | PresentationController|and its rest |
 * |         |            |               |                       |functions    |
 * +---------+------------+---------------+-----------------------+-------------+
 */

class PresentationController extends Controller
{
    /**
     * Store a newly created resource in storage.
     * @param int $project: the id of a project
     * @return Response
     */
    public function store($project)
    {
        $user = \Auth::user();

        $presentation = new Presentation(array('title' => \Input::get('title')));

        $user->projects()->where('_id', '=', $project)->presentations()->save($presentation);

        return response(true);
    }

    /**
     * Display the specified resource.
     * @param int $project: the id of a project
     * @return Response
     */
    public function show($project)
    {
        $user = \Auth::user();

        $project = $user->projects()->where('_id', '=', $project)->get();

        $presentation = $project->presentations()->first();

        return response($presentation);
    }


    /**
     * Update the specified resource in storage.
     * @param int $project: the id of a project
     * @return Response
     */
    public function update($project)
    {
        $user = \Auth::user();

        $project = $user->projects()->where('_id', '=', $project)->get();

        $presentation = $project->presentations()->first();

        $presentation->title = \Input::get('title');

        $presentation->save();

        return response(true);
    }

    /**
     * Remove the specified resource from storage.
     * @param int $project: the id of a project
     * @return Response
     */
    public function destroy($project)
    {
        $user = \Auth::user();

        $project = $user->projects()->where('_id', '=', $project)->get();

        $presentation = $project->presentations()->first();

        $presentation->delete();

        return response(true);
    }
}
