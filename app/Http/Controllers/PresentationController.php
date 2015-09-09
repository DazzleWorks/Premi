<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;
use Premi\Http\Controllers\Controller;

/**
 * @file: app/Http/Controller/PresentationController.php
 * @author: DazzleWorks
 * @date: 2015-06-25
 * @description: This class handles the saving, editing, deleting and viewing,
 * through a specific view, of a presentation.
 *
 * +---------+------------+---------------+-----------------------+-------------+
 * | Version |     Date   |  Programmer   |        Modify         | Description |
 * +---------+------------+---------------+-----------------------+-------------+
 * |  1.0.0  | 2015-06-25 |Suierica Bogdan| class                 |create class,| 
 * |         |            |               | PresentationController|and its rest |
 * |         |            |               |                       |functions    |
 * +---------+------------+---------------+-----------------------+-------------+
 */

class PresentationController extends Controller
{
    /**
     * Update the specified resource in storage.
     * @param Illuminate\Http\Request $request
     * @param String $username: the username of a user
     * @param String $projectID: the ID of a project
     * @param String $presentationID: the ID of a presentation
     * @return Illuminate\Http\Response
     */
    public function update(Request $request,$username,$projectID,$presentationID)
    {
        $user = \Auth::user();

        $projects = $user->projects();
        $project = $projects->find($projectID);

        $presentation = $project->presentation()->get();
    
        $presentation->theme = $request->get('theme');
        $presentation->transition = $request->get('transition');
        $presentation->save();

        return response()->json(['status' => true]);
    }

    /**
     * Remove the specified resource from storage.
     * @param String $username: the username of a user
     * @param String $projectID: the ID of a project
     * @param String $presentationID: the ID of a presentation
     * @return Illuminate\Http\Response
     */
    public function destroy($username,$projectID,$presentationID)
    {
        $user = \Auth::user();

        $projects = $user->projects();
        $project = $projects->find($projectID);

        $presentation = $project->presentation()->first();
        $presentation->delete();

        return response()->json(['status' => true]);
    }
    
    public function updateAxisPosition(Request $request,$username,$projectID,$presentationID)
    {
        $updates = $request->all();        
        
        $user = \Auth::user();
        
        $projects = $user->projects();
        $project = $projects->find($projectID);

        $presentation = $project->presentation()->first();
        
        $slides = $presentation->slides()->get();
        
        foreach($updates as $update) {
            $ID = $update['slideID'];
            $slide = $slides->find($ID);
            $slide->xIndex = $update['xIndex'];
            $slide->yIndex = $update['yIndex'];
        }
    }
}
