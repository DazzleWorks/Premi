<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;
use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;
use Premi\Model\User;
use Premi\Model\Project;
use Premi\Model\Infographic;

class InfographicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
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
     *
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
     *
     * @param  int  $id
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
     *
     * @param  int  $id
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
     *
     * @param  int  $id
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
