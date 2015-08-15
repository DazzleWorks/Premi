<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;
use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;

/**
 * @file: app/Http/Controller/SlideController.php
 * @author: DazzleWorks
 * @date: 2015-06-23
 * @description: This class handles the saving, editing, deleting and viewing,
 * through a specific view, of a slide.
 * 
 * +---------+------------+---------------+----------------------+-------------+
 * | Version |     Date   |  Programmer   |        Modify        | Description |
 * +---------+------------+---------------+----------------------+-------------+
 * |  1.0.0  | 2015-06-23 |Burlin Valerio |class SlideController |create class | 
 * |         |            |               |                      |and its rest |
 * |         |            |               |                      |functions    |
 * +---------+------------+---------------+----------------------+-------------+
 */

class SlideController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param String $username: the username of a user
     * @param String $projectID: the id of a project
     * @param String $presentationID: the id of a presentation
     * @return Illuminate\Http\Response
     */
    public function index($username,$projectID,$presentationID)
    {
        $user = \Auth::user();
        
        $project = $user->projects();
        $project = $project-find($projectID);
        
        $presentation = $project->presentation()->first();
        $slide = $presentation->slides()->get();
        
        return response()->json($slide);
    }
    
    /**
     * Store a newly created resource in storage.
     * @param Illuminate\Http\Request
     * @param String $username: the username of a user
     * @param String $projectID: the id of a project
     * @param String $presentationID: the id of a presentation
     * @return Illuminate\Http\Response
     */
    public function store(Request $request,$username,$projectID,$presentationID)
    {
        $user = \Auth::user();
        
        $slide = new Slide(['xIndex' => $request->get('xIndex'), 
                            'yIndex' => $request->get('yIndex'),
                             'svg' => $request->get('svg')]);
        
        $objects = $request->get('objects');
        foreach($objects as $object)
        {
            $slide->objects()->save($object);
        }
        
        $project = $user->projects();
        $project = $project->find($projectID);
        
        $presentation = $project->presentation()->first();
        $presentation->slides()->save($slide);
               
        return response()->json(['status' => true]);   
    }
    
    
    /**
     * Display the specified resource.
     * @param String $username: the username of a user
     * @param String $projectID: the id of a project
     * @param String $presentationID: the id of a presentation
     * @param String $slideID: the id of a slide
     * @return Illuminate\Http\Response
     */
    public function show($username,$projectID,$presentationID,$slideID)
    {
        $user = \Auth::user();
        
        $project = $user->projects();
        $project = $project->find($projectID);
                
        $presentation = $project->presentation()->first();
        
        $slide = $presentation->slides();
        $slide = $slide->find($slideID); 
        
        return response()->json($slide);
    }
    
    /**
     * Update the specified resource in storage.
     * @param int $project: the id of a project
     * @param int $slide: the id of a slide
     * @return Response
     */
    public function update($project,$slide)
    {
        $user = \Auth::user();
        
        $project = $user->projects()->where('_id', '=', $project)->get();
        
        $presentation = $project->presentation()->first()->get();
        
        $slide = $presentation->slides()->where('_id', '=', $slide);
        
        $slide->yIndex = \Input::get('xIndex');
        $slide->xIndex = \Input::get('yIndex');
        
        $string = \Input::get('components');
        $json_o = json_decode($string,true);
        foreach($json_o[component] as $comp) {
            $slide->components()->save($comp);
        }
        
        $slide->save();
        
        return response(true);
    }
    
    /**
     * Remove the specified resource from storage.
     * @param String $username: the username of a user
     * @param String $projectID: the id of a project
     * @param String $presentationID: the id of a presentation
     * @param String $slideID: the id of a slide
     * @return Illuminate\Http\Response
     */
    public function destroy($username,$projectID,$presentationID,$slideID)
    {
        $user = \Auth::user();

        $project = $user->projects();
        $project = $project->find($projectID);

        $presentation = $project->presentation()->first();

        $slide = $presentation->slides();
        $slide = $slide->find($slideID);
        
        $slide->delete();

        return response()->json(['status' => true]);
    }
}
