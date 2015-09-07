<?php

namespace Premi\Http\Controllers;

//use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request;
use Premi\Http\Controllers\Controller;
use Premi\Model\User;
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

        $data = array();
        foreach($projects as $project)
        {
            array_push($data, Project::getParamByProject($project));
        }

        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     * @param Illuminate\Http\Request $request
     * @param String $username: the username of a user
     * @return Illuminate\Http\Response
     */
    public function store(Request $request,$username)
    {
        $user = \Auth::user();

        $name  = $request->get('name');
        $newProject = new Project(['name' => $name]);
        $project = $user->projects()->save($newProject);

        event(new ProjectWasCreated($project));

        $data = Project::getParamByProject($project);

        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     * @param Illuminate\Http\Request $request
     * @param String $username: the username of a user
     * @param String $projectID: the ID of a project
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
     * @param String $projectID: the ID of a project
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
     * Search for projects by the projects name
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\Response
     */
    public function searchByProjectsName(Request $request){
        $projectName = $request->get('name');

        $searchProject = User::where('projects.name', '=', $projectName)
                               ->get(['username','projects._id','projects.name',
                                      'projects.presentation._id','projects.presentation.slides.0.svg']);

        $usersProject = json_decode($searchProject,true);

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

    /**
     * Returns all the media files of the authenticated user
     * @param $username: the username of a user
     * @param $projectID: the ID of a project
     * @return json
     */
    public function returnAllFiles($username, $projectID){
        $directory = $username.'/'.$projectID;
        $files = Storage::files($directory);

        return $files;
    }

    /**
     * Deletes selected media file of the authenticated user
     * @param $username: the username of a user
     * @param $projectID: the ID of a project
     * @param $filename: the name of the file to delete
     */
    public function deleteSelectedFile($username, $filename){
        $directory = $username.'/'.$filename;
        Storage::delete($directory);
    }

    /**
     * Upload media for the selected project
     * @param $username: the username of a user
     * @param $projectID: the ID of a project
     * @return json
     */
    public function uploadMedia($username, $projectID){
        // $file = Request::file('filefield');
        $filename = \Illuminate\Support\Facades\Input::file('filefield')->getClientOriginalName();

        //if($file->isValid()){
        //    $filename = $file->getClientOriginalName();
           $extension = $file->getFileOriginialExtension();
           if(Storage::exists($username.'/'.$projectID.'/'.$filename.$extension)){
                return response()->json(['error' => 'File already exists, please change the name before uploading']);
           }
           else{
                Storage::put($username.'/'.$projectID.'/'.$filename.$extension, File::get($file));
           }
        //}
        //else{
        //    return $file->getError();
        //}
    }
}
