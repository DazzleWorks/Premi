<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;
use Premi\Http\Controllers\Controller;

/**
 * @file: app/Http/Controller/InfographicController.php
 * @author: DazzleWorks
 * @date: 2015-06-25
 * @description: This class handles the infographic data, meets the requirements of 
 * views and queries the database when necessary.
 *
 * +---------+------------+---------------+----------------------+-------------+
 * | Version |     Date   |  Programmer   |        Modify        | Description |
 * +---------+------------+---------------+----------------------+-------------+
 * |  1.0.0  | 2015-06-25 |Burlin Valerio | class                |create class,| 
 * |         |            |               | InfographicController|and its rest |
 * |         |            |               |                      |functions    |
 * +---------+------------+---------------+----------------------+-------------+
 */

class InfographicController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param String $username: the username of a user
     * @param String $projectID: the id of a project
     * @return Illuminate\Http\Response
     */
    public function index($username,$projectID)
    {
        $user = \Auth::user();
        
        $projects = $user->projects();
        $project = $projects->find($projectID);
        
        $infographics = $project->infographics()->get();
        
        return response($infographics);
    }

    /**
     * Store a newly created resource in storage.
     * @param Illuminate\Http\Request
     * @param String $username: the username of a user
     * @param String $projectID: the id of a project
     * @return Illuminate\Http\Response
     */
    public function store(Request $request,$username,$projectID)
    {
        $user = \Auth::user();
        
        $infographic = new Infographic(array('name' => $request->get('name'), 
                                             'path' => $request->get('path')));
        
        $projects = $user->projects();
        $project = $projects->find($projectID);
        
        $infographic = $project->infographics()->save($infographic);
               
        return response()->json($infographic);
    }

    /**
     * Display the specified resource.
     * @param String $username: the username of a user
     * @param String $projectID: the id of a project
     * @param String $infographicID: the id of a infographic
     * @return Illuminate\Http\Response
     */
    public function show($username,$projectID,$infographicID)
    {
        $user = \Auth::user();
        
        $projects = $user->projects();
        $project = $projects->find($projectID);
                
        $infographics = $project->infographics();
        $infographic = $infographics->find($infographicID);
        
        return response()->json($infographic);
    }

    /**
     * Update the specified resource in storage.
     * @param Illuminate\Http\Request
     * @param String $username: the username of a user
     * @param String $projectID: the id of a project
     * @param String $infographicID: the id of a infographic
     * @return Illuminate\Http\Response
     */
    public function update(Request $request,$username,$projectID,$infographicID)
    {
        $user = \Auth::user();
        
        $projects = $user->projects();
        $project = $projects->find($projectID);
        
        $infographics = $project->infographics();
        $infographic = $infographics->find($infographicID);
        
        $infographic->name = $request->get('name');
        $infographic->path = $request->get('path');
        
        $infographic->save();
        
        return response()->json(['status' => true]);
    }

    /**
     * Remove the specified resource from storage.
     * @param String $username: the username of a user
     * @param String $projectID: the id of a project
     * @param String $infographicID: the id of a infographic
     * @return Illuminate\Http\Response
     */
    public function destroy($username,$projectID,$infographicID)
    {
        $user = \Auth::user();
        
        $projects = $user->projects();
        $project = $projects->find($projectID);
        
        $infographics = $project->infographics();
        $infographic = $infographics->find($infographicID);
        
        $infographic->delete();
        
        return response()->json(['status' => true]);
    }
}
