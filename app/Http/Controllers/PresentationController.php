<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;

use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;

class PresentationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index($project)
    {
        $user = \Auth::user();

        $presentation = $user->projects()->where('_id', '=', $project)->presentations()->get();

        return response($presentation);
    }


    /**
     * Store a newly created resource in storage.
     *
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
     *
     * @param  int  $id
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
     *
     * @param  int  $id
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
     *
     * @param  int  $id
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
