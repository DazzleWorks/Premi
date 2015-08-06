<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Response;
use Premi\Http\Controllers\Controller;
use Premi\Model\User;

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
     * Returns the data to display a user's profile
     * 
     * @return array json
     */
    public function show($username){
        if(!\Auth::user()) {
            return response()->json(['status' => 'utente non loggato']);
        }
       
        $data = User::getParamByUsername($username);
        
        return response($data);
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
