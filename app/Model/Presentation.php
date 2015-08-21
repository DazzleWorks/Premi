<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: app/Model/Presentation.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class is the presentation of the project. Contains all the 
 * slide that are designed to describe and explain something to a group of 
 * people
 *
 * +---------+------------+---------------+--------------------+---------------+
 * | Version |     Date   |  Programmer   |       Modify       |  Description  |
 * +---------+------------+---------------+--------------------+---------------+
 * |  1.0.0  | 2015-06-19 |Suierica Bogdan| class Presentation | create class  |
 * +---------+------------+---------------+--------------------+---------------+
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
    
    public static function incrementIndex($presentation,$xIndex,$yIndex)
    {
        $slides = $presentation->slides()->get();
        
        // horizontal increment
        if($yIndex == 1)
        {
            $slides = $slides->where('xIndex', '$gte', $xIndex)->get();
            foreach($slides as $slide)
            {
                $slide->increment('xIndex');
            }
        }
        // vertical increment
        else
        {
            $slides = $slides->where('xIndex', $xIndex)
                             ->where('yIndex', '$gte', $yIndex)->get();
            foreach($slides as $slide)
            {
                $slide->increment('yIndex');
            }
        }        
    }
    
    public static function DecrementIndex($presentation,$xIndex,$yIndex)
    {
        $slides = $presentation->slides()->get();
        
        // horizontal decrement
        if($yIndex == 1)
        {
            $numSlide = $slides->where('xIndex', $xIndex)->count();
            if($numSlide == 1)
            {
                $slides = $slides->where('xIndex', '$gt', $xIndex)->get();
                foreach($slides as $slide)
                {
                    $slide->decrement('xIndex');
                }
            }
            else
            {
                $slides = $slides->where('xIndex', $xIndex)
                                 ->where('yIndex', '$gt', $yIndex)->get();
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
                             ->where('yIndex', '$gt', $yIndex)->get();
            foreach($slides as $slide)
            {
                $slide->decrement('yIndex');
            }
        }        
    }
}