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
 * +---------+------------+---------------+--------------------+---------------------------------+
 * | Version |     Date   |  Programmer   |       Modify       |  Description                    |
 * +---------+------------+---------------+--------------------+---------------------------------+
 * |  1.0.0  | 2015-06-19 |Suierica Bogdan| class Presentation | create class and its getter and |
 * |         |            |               |                    | setter functions                |
 * +---------+------------+---------------+--------------------+---------------------------------+
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
     * indicates the title of the Presentation
     * @var {string}
     * @private
     */
    private $title;
    
    
    /**
     * functions that allows to have embedded Slide in a Presentation model 
     * @return array
     */
    public function slides() {
        return $this->embedsMany(Slide::class);
    }
    
    
    /**
     * getter function that returns the Presentation _id
     * @returns {integer} 
     * returns the Presentation _id
     */
    public function getId() {
        return $this->_id;
    }

    /**
     * getter function that returns the title of a Presentation 
     * @return {string} 
     * returns the title of a Presentation 
     */
    public function getTitle() {
        return $this->title;
    }

    /**
     * setter function that sets the title of a Presentation
     * @param $title {string}
     */
    public function setTitle($title) {
        $this->title = $title;
    }


}