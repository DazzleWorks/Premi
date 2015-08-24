<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;
use Premi\Http\Controllers\Controller;
use Premi\Model\Project;
use Premi\Events\ProjectWasCreated;

/**
 * @file: app/Http/Controller/ProjectController.php
 * @author: DazzleWorks
 * @date: 2015-06-24
 * @description: This class handles the saving, editing, deleting and viewing, 
 *               through a specific view, of a project. 
 * 
 * +---------+------------+---------------+-----------------------+-------------------+
 * | Version |     Date   |  Programmer   |        Modify         |   Description     |
 * +---------+------------+---------------+-----------------------+-------------------+
 * |  0.1.0  | 2015-06-24 |Burlin Valerio |class ProjectController| create class and  | 
 * |         |            |               |                       |  rest functions   |
 * +---------+------------+---------------+-----------------------+-------------------+
 * |  0.2.0  | 2015-06-28 |Burlin Valerio |class ProjectController|add call to event  | 
 * |         |            |               |                       |ProjectWasCreated  |
 * +---------+------------+---------------+-----------------------+-------------------+
 * |  0.3.0  | 2015-07-09 |Suierica Bogdan|class ProjectController| create function   | 
 * |         |            |               |                       | searchByUsername  |
 * +---------+------------+---------------+-----------------------+-------------------+
 * |  1.0.0  | 2015-07-11 |Suierica Bogdan|class ProjectController| create function   | 
 * |         |            |               |                       |searchByProjectName|
 * +---------+------------+---------------+-----------------------+-------------------+
 */

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param String $username: the username of a user
     * @return Illuminate\Http\Response
     */
    public function index($username)
    {
        $user = \Auth::user();
        $projects = $user->projects()->get();

        return response()->json($projects);
    }

    /**
     * Store a newly created resource in storage.
     * @param Illuminate\Http\Request
     * @param String $username: the username of a user
     * @return Illuminate\Http\Response
     */
    public function store(Request $request,$username)
    {
        $user = \Auth::user();
        $name  = $request->get('name');

        $project = new Project(['name' => $name]);
        $project = $user->projects()->save($project);
        
        $pathname = $username.'/'.$project->_id;
        
        \Illuminate\Support\Facades\Storage::makeDirectory($pathname);
        
        event(new ProjectWasCreated($project));

        return response()->json($project);
    }

    /**
     * Update the specified resource in storage.
     * @param Illuminate\Http\Request
     * @param String $username: the username of a user
     * @param String $projectID: the id of a project
     * @return Illuminate\Http\Response
     */
    public function update(Request $request,$username,$projectID)
    {
        $user = \Auth::user();
        $projects = $user->projects();
        $project = $projects->find($projectID);

        $project->name = $request->get('name');

        $project->save();

        return response()->json(['status' => true]);
    }

    /**
     * Remove the specified resource from storage.
     * @param String $username: the username of a user
     * @param String $projectID: the id of a project
     * @return Illuminate\Http\Response
     */
    public function destroy($username,$projectID)
    {
        $user = \Auth::user();
        $projects = $user->projects();
        $project = $projects->find($projectID);

        $project->delete();

        return response()->json(['status' => true]);
    }
    
     /**
      * Search for projects by username
      * @param Illuminate\Http\Request
      * @return Response
      */
     public function searchByUsername(Request $request){
        $username = $request -> get('username');
        
        $user = \Premi\Model\User::where('username', '=', $username)->groupBy()
                ->get(array('username','projects._id','projects.name','projects.presentation._id','projects.presentation.slides.0.svg'));
        return response()->json($user);
     }
     
     /**
      * Search for projects by the projects name
      * @param Illuminate\Http\Request
      * @return Response
      */
     public function searchByProjectsName(Request $request){
         $projectName = $request->get('name');
         
         $usersProject = \Premi\Model\User::where('projects.name','=',$projectName)->get(array('username','projects._id','projects.name','projects.presentation._id','projects.presentation.slides.0.svg'));
         
         $usersProject = json_decode($usersProject,true);
         
         for($i=0; $i<count($usersProject);$i++){
             for($j=0; $j<count($usersProject[$i]['projects']); $j++){
                 if($usersProject[$i]['projects'][$j]['name']!=$projectName){
                    array_splice($usersProject[$i]['projects'], $j,1);
                    $j--;
                 }
             }
         }
         
         return response()->json($usersProject);     
     }
}
