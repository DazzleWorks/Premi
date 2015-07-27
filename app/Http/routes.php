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
 * |  0.3.0  | 2015-06-22 |Burlin Valerio | routes.php  |add projects and| 
 * |         |            |               |             |presentation    |
 * |         |            |               |             |routes          |
 * +---------+------------+---------------+-------------+----------------+
 * |  1.0.0  | 2015-06-22 |Burlin Valerio | routes.php  |add infographics| 
 * |         |            |               |             |routes          |
 * +---------+------------+---------------+-------------+----------------+
 */

// Home Page routes...
Route::get('/', function () {
    return view('index');
});

Route::get('check', function(){
   echo Auth::user(); 
});

// Authentication routes...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

// Registration routes...
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');

// Password reset link request routes...
Route::get('password/email', 'Auth\PasswordController@getEmail');
Route::post('password/email', 'Auth\PasswordController@postEmail');

// Password reset routes...
Route::get('password/reset/{token}', 'Auth\PasswordController@getReset');
Route::post('password/reset', 'Auth\PasswordController@postReset');

// Logout routes...
Route::get('/logout', function(){
    Auth::logout();
    \Redirect::to('/');
});


Route::group(array('prefix' => 'api'), function() {
    // User routes...
    Route::resource('user', 'UserController',
                    ['except' => ['index', 'store', 'create', 'edit']]);
                       
    // Project routes...
    Route::resource('user.project', 'ProjectController',
                    ['except' => ['create', 'edit']]);
    
    // Infographic routes...
    Route::resource('user.project.infographic', 'InfographicController',
                    ['except' => ['create', 'edit']]);
    
    //Presentation routes..
    Route::resource('user.project.presentation', 'PresentationController',
                    ['except' => ['index', 'create', 'edit']]);
    
    // Slide routes...
    Route::resource('user.project.presentation.slide', 'SlideController',
                    ['except' => ['create', 'edit']]);
});
