<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Redirect;
use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;
use Premi\Model\User;

/**
 * @file: app/Http/Controller/UserController.php
 * @author: DazzleWorks
 * @date: 2015-06-20
 * @description: This class handles the user data, meets the requirements of 
 * views and queries the database when necessary
 *
 * +---------+------------+---------------+----------------------+-------------+
 * | Version |     Date   |  Programmer   |        Modify        | Description |
 * +---------+------------+---------------+----------------------+-------------+
 * |  1.0.0  | 2015-06-20 |Burlin Valerio | class UserController |create class | 
 * |         |            |               |                      |and show     |
 * |         |            |               |                      |function     |
 * +---------+------------+---------------+----------------------+-------------+
 */
class UserController extends Controller
{
    /**
     * This method returns the data to display a user's profile
     * 
     * @return array json
     */
    public function show(){
        if(!\Auth::user()) {
            return redirect()->route('auth/login');
        }
        
        $user = \Auth::user();
        
        $project = $user->projects()->find(array('_id' => '1', 'name' => '1'))->get();
        
        return \Response::json(array('firstName' => $user->firstName, 
                                     'lastName' => $user->lastName,
                                     'email' => $user->email), $project);
    }
}
