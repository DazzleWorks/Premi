<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: app/Model/Slide.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class stores slide data that is retrieved by the slide 
 * controller
 * 
 * +---------+------------+----------------+--------------+--------------+ 
 * | Version |    Date    |   Programmer   |    Modify    | Description  |
 * +---------+------------+----------------+--------------+--------------+
 * |  1.0.0  | 2015-06-19 | Burlin Valerio | class Slide  | create class |
 * +---------+------------+----------------+--------------+--------------+
 */
class Slide extends Eloquent 
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
     * @xIndex: position of the Slide relative to the axis X in the 
     *          presentation's matrix
     * @yIndex: position of the Slide relative to the axis Y in the 
     *          presentation's matrix
     */
    protected $fillable = ['xIndex', 'yIndex', 'background', 'svg'];
     
    
    /**
     * Allows to have embedded Component in a Slide
     *  
     * @return array
     */
    public function components() {
        return $this->embedsMany(Component::class);
    }
}

