<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;
use Premi\Http\Controllers\Controller;
use Premi\Model\Slide;
use Premi\Model\Text;

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
        
        $projects = $user->projects();
        $project = $projects-find($projectID);
        
        $presentations = $project->presentation();
        $presentation = $presentations->get();
        
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
                            'yIndex' => $request->get('yIndex')]);
        
        $projects = $user->projects();
        $project = $projects->find($projectID);
        
        $presentations = $project->presentation();
        $presentation = $presentations->get();
        
        $presentation->slides()->save($slide);
               
        return response()->json($slide);   
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
        
        $projects = $user->projects();
        $project = $projects->find($projectID);
                
        $presentations = $project->presentation();
        $presentation = $presentations->get();
                
        $slides = $presentation->slides();
        $slide = $slides->find($slideID);
        //$slide = $slide->groupBy()->get(['components']);
        
        return response()->json($slide);
    }
    
    /**
     * Update the specified resource in storage.
     * @param Illuminate\Http\Request
     * @param String $username: the username of a user
     * @param String $projectID: the id of a project
     * @param String $presentationID: the id of a presentation
     * @param String $slideID: the id of a slide
     * @return Illuminate\Http\Response
     */
    public function update(Request $request,$username,$projectID,$presentationID,$slideID)
    {
        $user = \Auth::user();
        
        $projects = $user->projects();
        $project = $projects->find($projectID);
                
        $presentations = $project->presentation();
        $presentation = $presentations->get();
        
        $slides = $presentation->slides();
        $slide = $slides->find($slideID);
        
        $slide->xIndex = $request->get('xIndex');
        $slide->yIndex = $request->get('yIndex');
        $slide->svg = $request->get('svg');
        $slide->background = $request->get('background');
        
        $components = $request->get('components');
        foreach($components as $component)
        {
            $type = $component['type'];
            switch ($type) {
                case "text":
                    $newText = new Text($component);
                    $slide->components()->save($newText);
                    break;
                case "image":
                    $slide->components()->save($component);
                    break;
            }
        }
        
        $slide->save();
        return response()->json($components);
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

        $projects = $user->projects();
        $project = $projects->find($projectID);

        $presentations = $project->presentation();
        $presentation = $presentations->get();

        $slides = $presentation->slides();
        $slide = $slides->find($slideID);
        
        $slide->delete();

        return response()->json(['status' => true]);
    }
}
