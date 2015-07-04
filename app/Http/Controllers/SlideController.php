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
     * @param int $project: the id of a project
     * @return Response
     */
    public function index($project)
    {
        $user = \Auth::user();
        
        $slide = $user->projects()->where('_id', '=', $project)->presentation()->first()->slides()->get();
        
        return response($slide);
    }
    
    /**
     * Store a newly created resource in storage.
     * @param int $project: the id of a project
     * @return Response
     */
    public function store($project) {
        $user = \Auth::user();
        
        $slide = new Slide(array('xIndex' => \Input::get('xIndex'), 'yIndex' => \Input::get('yIndex')));
        
        $user->projects()->where('_id', '=', $project)->presentation()->first()->slides()->save($slide);
               
        return response(true);   
    }
    
    /**
     * Display the specified resource.
     * @param int $project: the id of a project
     * @param int $slide: the id of a slide
     * @return Response
     */
    public function show($project, $slide)
    {
        $user = \Auth::user();
        
        $project = $user->projects()->where('_id', '=', $project)->get();
                
        $presentation = $project->presentations()->first()->get();
        
        $slide = $presentation->slides()->where('id', '=', $slide)->get(); 
        
        return response($slide);
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
     * @param int $project: the id of a project
     * @param int $slide: the id of a slide
     * @return Response
     */
    public function destroy($project,$slide)
    {
        $user = \Auth::user();

        $project = $user->projects()->where('_id', '=', $project)->get();

        $presentation = $project->presentations()->first();

        $slide = $presentation->slides()->where('_id', '=', $slide)->get();
        
        $slide->delete();

        return response(true);
    }
}
