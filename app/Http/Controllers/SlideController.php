<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;
use Premi\Http\Controllers\Controller;
use Premi\Model\Presentation;
use Premi\Model\Slide;

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

        $slides = $presentation->slides()->get();

        return response()->json($slides);
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
        $xIndex = $request->get('xIndex');
        $yIndex = $request->get('yIndex');

        $user = \Auth::user();

        $slide = new Slide(['xIndex' => $xIndex,
                            'yIndex' => $yIndex]);

        $projects = $user->projects();
        $project = $projects->find($projectID);

        $presentations = $project->presentation();
        $presentation = $presentations->get();

        Presentation::incrementIndex($presentation,$xIndex,$yIndex);

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

        Slide::deleteOldComponents($slide);

        $components = $request->get('components');
        Slide::updateNewComponents($slide,$components);

        $slide->save();
        return response()->json(['status' => true]);
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

        $xIndex = $slide->xIndex;
        $yIndex = $slide->yIndex;

        $slide->delete();

        Presentation::decrementIndex($presentation,$xIndex,$yIndex);

        return response()->json(['status' => true]);
    }

    /**
     * Return the ID of a slide by its X and Y position.
     * @param Illuminate\Http\Request
     * @param String $username: the username of a user
     * @param String $projectID: the id of a project
     * @param String $presentationID: the id of a presentation
     * @return Illuminate\Http\Response
     */
    public function findByAxis(Request $request,$username,$projectID,$presentationID)
    {
        $user = \Auth::user();

        $projects = $user->projects();
        $project = $projects->find($projectID);

        $presentations = $project->presentation();
        $presentation = $presentations->get();

        $slides = $presentation->slides()->get();
        $slide = $slides->where('xIndex', $request->get('xIndex'))
                        ->where('yIndex', $request->get('yIndex'))->first();
        
        if($slide)
        {
            $slideID = $slide->_id;
            return response()->json(['id' => $slideID]);
        }
        else
        {
            return response()->json(['id' => null]);
        }
    }
}
