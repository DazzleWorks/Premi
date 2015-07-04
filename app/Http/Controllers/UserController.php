<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;


/**
 * @file: app/Http/Controller/UserController.php
 * @author: DazzleWorks
 * @date: 2015-06-20
 * @description: This class handles the deleting and viewing, through a specific 
 * view, of a user.
 *
 * +---------+------------+---------------+----------------------+-------------+
 * | Version |     Date   |  Programmer   |        Modify        | Description |
 * +---------+------------+---------------+----------------------+-------------+
 * |  1.0.0  | 2015-06-20 |Burlin Valerio | class UserController |create class,| 
 * |         |            |               |                      |and its rest |
 * |         |            |               |                      |functions    |
 * +---------+------------+---------------+----------------------+-------------+
 */

class UserController extends Controller
{
    /**
     * This method returns the data to display a user's profile
     * 
     * @return array json
     */
    public function show($username= ""){
        if(!\Auth::user()) {
            return redirect()->route('auth/login');
        }
        
        if(empty($username)) {
            $username = \Auth::user()->username;
        }
        
        $user = getParamByUsername($username);
        
        $project = \Auth::user()->projects()->find(array('_id' => '1', 'name' => '1'))->get();
        
        return response($user, $project);
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update()
    {
        $user = \Auth::user();
        
        $user->email = \Input::get('email');
        $user->firstName = \Input::get('firstName');
        $user->secondName = \Input::get('secondName');
        $user->password = \Input::get('password');
        
        $user->save();
        
        return response(true);
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy()
    {
        $user = \Auth::user();
                
        $user->delete();
        
        return response(true);
    }
}
