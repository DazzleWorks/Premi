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

Route::controller('user', 'UserController');
Route::controller('project', 'ProjectController');
// Dovrei creare un nuovo controller solo per creare la view della home page -> è poco conveniente in questo caso
Route::get('/', function () {return View::make('index', array('title' => 'Home page'));});


/*Route::get('/', function () {
    return view('welcome');
});*/
