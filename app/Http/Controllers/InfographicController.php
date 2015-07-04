<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;
use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;

/**
 * @file: app/Http/Controller/InfographicController.php
 * @author: DazzleWorks
 * @date: 2015-06-23
 * @description: This class handles the infographic data, meets the requirements of 
 * views and queries the database when necessary.
 *
 * +---------+------------+---------------+----------------------+-------------+
 * | Version |     Date   |  Programmer   |        Modify        | Description |
 * +---------+------------+---------------+----------------------+-------------+
 * |  1.0.0  | 2015-06-23 |Burlin Valerio | class                |create class,| 
 * |         |            |               | InfographicController|and its rest |
 * |         |            |               |                      |functions    |
 * +---------+------------+---------------+----------------------+-------------+
 */

class InfographicController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param int $project: the id of a project  
     * @return Response
     */
    public function index($project)
    {
        $user = \Auth::user();
        
        $infographic = $user->projects()->where('_id', '=', $project)->infographics()->get();
        
        return response($infographic);
    }

    /**
     * Store a newly created resource in storage.
     * @param int $project: the id of a project 
     * @return Response
     */
    public function store($project)
    {
        $user = \Auth::user();
        
        $infographic = new Infographic(array('name' => \Input::get('name'), 'path' => \Input::get('path')));
        
        $project = $user->projects()->where('_id', '=', $project)->infographics()->save($infographic);
               
        return response(true);
    }

    /**
     * Display the specified resource.
     * @param int $project: the id of a project 
     * @param int $infographic: the id of an infographic
     * @return Response
     */
    public function show($project,$infographic)
    {
        $user = \Auth::user();
        
        $project = $user->projects()->where('_id', '=', $project)->get();
                
        $infographic = $project->infographics()->where('_id', '=', $infographic)->get();
        
        return response($infographic);
    }

    /**
     * Update the specified resource in storage.
     * @param int $project: the id of a project 
     * @param int $infographic: the id of an infographic
     * @return Response
     */
    public function update($project,$infographic)
    {
        $user = \Auth::user();
        
        $project = $user->projects()->where('_id', '=', $project)->get();
        
        $infographic = $project->infographics()->where('_id', '=', $infographic)->get();
        
        $infographic->name = \Input::get('name');
        $infographic->path = \Input::get('path');
        
        $infographic->save();
        
        return response(true);
    }

    /**
     * Remove the specified resource from storage.
     * @param int $project: the id of a project 
     * @param int $infographic: the id of an infographic
     * @return Response
     */
    public function destroy($project,$infographic)
    {
        $user = \Auth::user();
        
        $project->$user->projects()->where('_id', '=', $project)->get();
        
        $infographic = $project->infographics()->where('_id', '=', $infographic)->get();
        
        $infographic->delete();
        
        return response(true);
    }
}
