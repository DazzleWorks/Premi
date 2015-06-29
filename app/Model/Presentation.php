<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: Presentation.php
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
    protected $fillable = ['title'];
    
    
    /**
     * functions that allows to have embedded Slide in a Presentation model 
     * @return array
     */
    public function slides() {
        return $this->embedsMany(Slide::class);
    }
}