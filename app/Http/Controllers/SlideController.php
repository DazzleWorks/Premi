<?php

namespace Premi\Http\Controllers;

use Illuminate\Http\Request;

use Premi\Http\Requests;
use Premi\Http\Controllers\Controller;
use Premi\Model\User;
use Premi\Model\Project;
use Premi\Model\Presentation;
use Premi\Model\Slide;
use Premi\Model\Component;

class SlideController extends Controller
{
    public function postInsert() {
        echo "Ciao Fabio";
        
        if(\Auth::check()) {
            $user = \Auth::user();
        }
        else {
            return \Redirect::to('user/login');
        }
        
        /**
         * chiamate per user->project->ecc (meglio!!)
         */
        
        
        $components = json_decode(qualcosa);
        
        foreach($components->objects as $object) {
            $object = $user->project->presentation->slide->components()->save($object);
        }
        
        return \Redirect::intended('user/login');
    }
}
