<?php

namespace Premi;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: Presentation.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class is the presentation of the project. Contains all the slide
 * that are designed to describe and explain something to a group of people.
 *
 * +---------+------------+---------------+--------------------+--------------+
 * | Version |     Date   |  Programmer   |        Change      |  Description |
 * +---------+------------+---------------+--------------------+--------------+
 * |  0.0.1  | 2015-06-19 |Suierica Bogdan| class Presentation | create class |
 * +---------+------------+---------------+--------------------+--------------+
 */

class Presentation extends Eloquent
{
    private $_id;
    /*
     * array of Slide that is part of the Presentation
     */
    private $slides = [];

    /**
     * constructor method of the Presentation class
     * @param array $_id
     * @param $slide
     */
    public function __construct($_id, $slides){
        $this->_id = $_id;
        $this->slides = $slides;
    }

    /**
     * getter method that returns the Presentation _id
     * @returns {integer} Returns the Presentation _id
     */
    public function getId()
    {
        return $this->_id;
    }

    /**
     * setter method that sets the Presentation _id
     * @param $id {Integer}
     */
    public function setId($id)
    {
        $this->_id = $id;
    }

    /**
     * getter method that returns the Presentation slides
     * @return array {Slide} Returns the Presentation slides
     */
    public function getSlides()
    {
        return $this->slides;
    }

    /**
     * setter method that sets the Presentation slides
     * @param $slides array {Slide}
     */
    public function setSlide($slides)
    {
        $this->slides = $slides;
    }


}
