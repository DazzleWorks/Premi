<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*
Route::controller('user', 'UserController');
Route::controller('project', 'ProjectController');
// Dovrei creare un nuovo controller solo per creare la view della home page -> è poco conveniente in questo caso
Route::get('/', function () {return View::make('index', array('title' => 'Home page'));});
*/

Route::get('/', function () {
    \View::make('index');
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
});

// 
Route::get('/chi', function(){
    return url('/api/slides');
});

// Slide routes...
Route::group(array('prefix' => 'api'), function() {
    Route::resource('slides', 'slideController');
    
});
