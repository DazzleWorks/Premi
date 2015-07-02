<?php

/**
 * @file: app/Http/routes.php
 * @author: DazzleWorks
 * @date: 2015-06-21
 * @description: This file contains all of the routes for an application. Simply
 *               tell the URIs it should respond to and give it the controller
 *               to call when that URI is requested.
 * 
 * +---------+------------+---------------+-------------+----------------+
 * | Version |     Date   |  Programmer   |    Modify   |  Description   |
 * +---------+------------+---------------+-------------+----------------+
 * |  0.1.0  | 2015-06-21 |Suierica Bogdan| routes.php  |create class    | 
 * |         |            |               |             |and auth routes |
 * +---------+------------+---------------+-------------+----------------+
 * |  0.2.0  | 2015-06-21 |Burlin Valerio | routes.php  |add users and   | 
 * |         |            |               |             |slides routes   |
 * +---------+------------+---------------+-------------+----------------+
 */

/*
Route::controller('project', 'ProjectController');
*/

// Home Page routes...
Route::get('/', function () {
    return view('index');
});

// Authentication routes...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

// Registration routes...
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');

// Logout routes...
Route::get('/logout', function(){
    Auth::logout();
    \Redirect::to('/');
});

Route::group(array('prefix' => 'api'), function() {
    // User routes...
    Route::resource('user', 'UserController', 
                    ['only' => 'show']);
    
    // Project routes..
    Route::resource('user.project', 'ProjectController');
    
    // Slide routes...
    //Route::resource('slide', 'SlideController');
});
