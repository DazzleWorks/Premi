<?php
namespace Premi\Http\Controllers;
use Illuminate\Http\Request;
use Premi\Http\Controllers\Controller;
use Premi\Model\User;

/**
 * @file: app/Http/Controller/UserController.php
 * @author: DazzleWorks
 * @date: 2015-06-24
 * @description: This class handles the deleting and viewing, through a specific
 * view, of a user.
 *
 * +---------+------------+---------------+----------------------+-------------+
 * | Version |     Date   |  Programmer   |        Modify        | Description |
 * +---------+------------+---------------+----------------------+-------------+
 * |  1.0.0  | 2015-06-24 |Burlin Valerio | class UserController |create class,|
 * |         |            |               |                      |and its rest |
 * |         |            |               |                      |functions    |
 * +---------+------------+---------------+----------------------+-------------+
 */
class UserController extends Controller
{
    /**
     * Returns the data to display a user's profile
     * @param String $username: the username of a user
     * @return Illuminate\Http\Response
     */
    public function show($username)
    {
        $user = User::where('username', $username)->get(['email','firstName',
                                                        'lastName','username']);

        return response()->json($user);
    }

    /**
     * Update the specified resource in storage.
     * @param Illuminate\Http\Request $request
     * @param String $username: the username of a user
     * @return Illuminate\Http\Response
     */
    public function update(Request $request,$username)
    {
        $user = \Auth::user();

        $user->email = $request->get('email');
        $user->firstName = $request->get('firstName');
        $user->secondName = $request->get('secondName');
        $user->password = $request->get('password');

        $user->save();

        return response()->json(['status' => true]);
    }

    /**
     * Remove the specified resource from storage.
     * @param String $username: the username of a user
     * @return Illuminate\Http\Response
     */
    public function destroy($username)
    {
        $user = \Auth::user();

        $user->delete();

        return response()->json(['status' => true]);;
    }

    /**
     * Search for projects by username
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\Response
     */
    public function searchByUsername(Request $request){
        $username = $request -> get('username');

        $user = User::where('username', '=', $username)->groupBy()
                               ->get(['username','projects._id','projects.name',
                                      'projects.presentation._id','projects.presentation.slides.0.svg','projects.presentation.theme', 'projects.presentation.transition']);

        return response()->json($user);
    }
}
