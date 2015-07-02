<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;

use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;
use Premi\Model\Slide;

/**
 * @file: app/Http/Controller/SlideController.php
 * @author: DazzleWorks
 * @date: 2015-06-20
 * @description: This class handles the saving, editing, deleting and viewing,
 * through a specific view, of a slide.
 * 
 * +---------+------------+---------------+----------------------+-------------+
 * | Version |     Date   |  Programmer   |        Modify        | Description |
 * +---------+------------+---------------+----------------------+-------------+
 * |  1.0.0  | 2015-06-20 |Burlin Valerio |class SlideController |create class | 
 * |         |            |               |                      |and its      |
 * |         |            |               |                      |functions    |
 * +---------+------------+---------------+----------------------+-------------+
 */

class SlideController extends Controller
{
    public function store() {
        
        return \Response::json(array('success' => true));
        /**
        if(\Auth::check()) {
            $user = \Auth::user();
        }
        else {
            return \Redirect::to('user/login');
        }
         chiamate per user->project->ecc (meglio!!)
        $components = json_decode(qualcosa);
        foreach($components->objects as $object) {
            $object = $user->project->presentation->slide->components()->save($object);
        }
        return \Redirect::intended('user/login');*/
    }
}
