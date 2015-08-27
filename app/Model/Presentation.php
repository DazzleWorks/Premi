<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: app/Model/Presentation.php
 * @author: DazzleWorks
 * @date: 2015-06-23
 * @description: This class is the presentation of the project. Contains all the 
 * slide that are designed to describe and explain something to a group of 
 * people.
 *
 * +---------+------------+----------------+--------------------+---------------+
 * | Version |     Date   |  Programmer    |       Modify       |  Description  |
 * +---------+------------+----------------+--------------------+---------------+
 * |  0.1.0  | 2015-06-23 |Suierica Bogdan | class Presentation | create class  |
 * |         |            |                |                    | and function  |
 * |         |            |                |                    |    slides()   | 
 * +---------+------------+----------------+--------------------+---------------+
 * |  1.0.0  | 2015-06-29 | Burlin Valerio | class Presentation |    create     |
 * |         |            |                |                    | functions for |
 * |         |            |                |                    | increment and |   
 * |         |            |                |                    |   decrement   |
 * |         |            |                |                    | slides index  |
 * +---------+------------+----------------+--------------------+---------------+ 
 */
class Presentation extends Eloquent
{
    /**
     * indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    /**
     * the attributes that are mass assignable
     * @var array
     * @protected
     * @title: indicates the title of the Presentation
     */
    protected $fillable = ['title','theme','transition'];
    
    
    /**
     * functions that allows to have embedded Slide in a Presentation model 
     * @return array
     */
    public function slides() {
        return $this->embedsMany(Slide::class);
    }
    
    /**
     * Increment the indexes of the Presentation's slides if it's necessary
     * @param Presentation $presentation
     * @param int $xIndex
     * @param int $yIndex
     * @return void
     */
    public static function incrementIndex($presentation,$xIndex,$yIndex)
    {
        $slides = $presentation->slides()->get();
        
        // horizontal increment
        if($yIndex == 1)
        {
            $slides = $slides->where('xIndex', '>=', $xIndex);
            foreach($slides as $slide)
            {
                $slide->increment('xIndex');
            }
        }
        // vertical increment
        else
        {
            $slides = $slides->where('xIndex', $xIndex)
                             ->where('yIndex', '>=', $yIndex)->get();
            foreach($slides as $slide)
            {
                $slide->increment('yIndex');
            }
        }        
    }
    
    /**
     * Decrement the indexes of the Presentation's slides if it's necessary
     * @param Presentation $presentation
     * @param int $xIndex
     * @param int $yIndex
     * @return void
     */
    public static function DecrementIndex($presentation,$xIndex,$yIndex)
    {
        $slides = $presentation->slides()->get();
        
        // horizontal decrement
        if($yIndex == 1)
        {
            $numSlide = $slides->where('xIndex', $xIndex)->count();
            if($numSlide == 0)
            {
                $slides = $slides->where('xIndex', '>', $xIndex)->get();
                foreach($slides as $slide)
                {
                    $slide->decrement('xIndex');
                }
            }
            else
            {
                $slides = $slides->where('xIndex', $xIndex)->get();
                foreach($slides as $slide)
                {
                    $slide->decrement('yIndex');
                }
            }
        }
        // vertical decrement
        else
        {
            $slides = $slides->where('xIndex', $xIndex)
                             ->where('yIndex', '>', $yIndex)->get();
            foreach($slides as $slide)
            {
                $slide->decrement('yIndex');
            }
        }        
    }
    
    public static function getParamByPresentation($presentation) {
        $data = (['presentationID' => $presentation->_id,
                  'theme' => $presentation->theme,
                  'transition' => $presentation->transition]);
        
        return $data;
    }
}