<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: Slide.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class stores slide data that is retrieved by the slide 
 * controller
 * 
 * +---------+------------+----------------+--------------+---------------------------------+ 
 * | Version |    Date    |   Programmer   |    Modify    |          Description            |
 * +---------+------------+----------------+--------------+---------------------------------+
 * |  1.0.0  | 2015-06-19 | Burlin Valerio | class Slide  | create class and its getter and |
 * |         |            |                |              | setter functions                |
 * +---------+------------+----------------+--------------+---------------------------------+
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
     * position of the Slide relative to the axis X in the presentation's matrix
     * @var {integer}
     * @private
     */
    private $xIndex; 
    
    /**
     * position of the Slide relative to the axis Y in the presentation's matrix
     * @var {integer}
     * @access private
     */
    private $yIndex;
           
    
    /**
     * functions that allows to have embedded Component in a Slide 
     * @return array
     */
    public function components() {
        return $this->embedsMany(Component::class);
    }
   
    /**
     * getter function that returns the Slide _id
     * @return {integer} 
     * returns the Slide _id
     */
    public function getId() {
        return $this->_id;
    }
    
    /**
     * getter function that return the position of the slide relative to the 
     * axis X in the presentation's matrix
     * @returns {integer} 
     * returns the position of the slide relative to the axis X in the 
     * presentation's matrix
     */
    public function getXIndex() {
        return $this->xIndex;
    }
    
    /**
     * getter function that return the position of the slide relative to the 
     * axis Y in the presentation's matrix
     * @returns {integer} 
     * returns the position of the slide relative to the axis Y in the 
     * presentation's matrix
     */
    public function getYIndex() {
        return $this->yIndex;
    }
    
    /**
     * setter function that sets the position of the slide relative to the 
     * axis X in the presentation's matrix
     * @param $xIndex {integer} 
     */
    public function setXIndex($xIndex) {
        $this->xIndex = $xIndex; 
    }    
             
    /**
     * setter function that sets the position of the slide relative to the 
     * axis Y in the presentation's matrix
     * @param $yIndex {integer} 
     */
    public function setY($yIndex) {
        $this->yIndex = $yIndex; 
    }
}

