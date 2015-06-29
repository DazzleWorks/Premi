<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: Component.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class represents the general structure of a component 
 * of the slide
 *
 * +---------+------------+---------------+-----------------+---------------------------------+
 * | Version |     Date   |  Programmer   |     Modify      |         Description             |
 * +---------+------------+---------------+-----------------+---------------------------------+
 * |  1.0.0  | 2015-06-19 |Burlin Valerio | class Component | create class and its getter and |
 * |         |            |               |                 | setter functions                |
 * +---------+------------+---------------+-----------------+---------------------------------+
 */
abstract class Component extends Eloquent
{
    /**
     * indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    /**
     * position of the Component relative to the axis X in the slide
     * @var {integer}
     * @private
     */
    private $xIndex;
    
    /**
     * position of the Component relative to the axis Y in the slide
     * @var {integer}
     * @private
     */
    private $yIndex;
    
    /**
     * position of the Component relative to the axis Z in the slide
     * @var {integer}
     * @private
     */
    private $zIndex;
    
    /**
     * the height of the box of Component
     * @var {integer}
     * @private
     */
    private $height;
    
    /**
     * the width of the box of Component
     * @var {integer}
     * @private
     */
    private $width;
    
    /**
     * the angle of rotation of the Component relative to the axis X
     * @var {integer}
     * @private
     */
    private $angle;
    
    /**
     * the level of opacity of the Component
     * @var {integer}
     * @private
     */
    private $opacity;
    
    
    /**
     * getter function that returns the Component _id
     * @return {integer} 
     * returns the Component _id
     */
    public function getId() {
        return $this->_id;
    }
    
    /**
     * getter function that returns the position of the Component relative to 
     * the axis X in the slide
     * @return {integer} 
     * returns the position of the Component relative to the axis X in the slide
     */   
    public function getXIndex() {
        return $this->xIndex;
    }
    
    /**
     * getter function that returns the position of the Component relative to 
     * the axis Y in the slide
     * @return {integer} 
     * returns the position of the Component relative to the axis Y in the slide
     */ 
    public function getYIndex() {
        return $this->yIndex;
    }
    
    /**
     * getter function that returns the position of the Component relative to 
     * the axis Z in the slide
     * @return {integer} 
     * returns the position of the Component relative to the axis Z in the slide
     */ 
    public function getZIndex() {
        return $this->zIndex;
    }
    
    /**
     * getter function that returns the height of the box of Component
     * @return {integer} 
     * returns the height of the box of Component
     */ 
    public function getHeight() {
        return $this->height;
    }
    
    /**
     * getter function that returns the width of the box of Component
     * @return {integer} 
     * returns the width of the box of Component
     */ 
    public function getWidth() {
        return $this->width;
    }
    
    /**
     * getter function that returns the angle of rotation of the Component 
     * relative to the axis X
     * @return {integer} 
     * returns the angle of rotation of the Component relative to the axis X
     */
    public function getAngle() {
        return $this->angle;
    }
    
    /**
     * getter function that returns the level of opacity of the Component
     * @return {integer} 
     * returns the level of opacity of the Component
     */ 
    public function getOpacity() {
        return $this->opacity;
    }
    
    /**
     * setter function that sets the position of the Component relative to the 
     * axis X in the slide
     * @param $xIndex {integer}
     */
    public function setXIndex($xIndex) {
        $this->xIndex = $xIndex;
    }
    
    /**
     * setter function that sets the position of the Component relative to the 
     * axis Y in the slide
     * @param $yIndex {integer}
     */
    public function setYIndex($yIndex) {
        $this->yIndex = $yIndex;
    }
    
    /**
     * setter function that sets the position of the Component relative to the 
     * axis Z in the slide
     * @param $zIndex {integer}
     */
    public function setZIndex($zIndex) {
        $this->zIndex = $zIndex;
    }
    
    /**
     * setter function that sets the height of the box of Component
     * @param $height {integer}
     */
    public function setHeight($height) {
        $this->height = $height;
    }
    
    /**
     * setter function that sets the width of the box of Component
     * @param $width {integer}
     */
    public function setWidth($width) {
        $this->width = $width;
    }
    
    /**
     * setter function that sets the the angle of rotation of the Component 
     * relative to the axis X
     * @param $angle {integer}
     */
    public function setAngle($angle) {
        $this->angle = $angle;
    }
    
    /**
     * setter function that sets the level of opacity of the Component
     * @param $opacity {integer}
     */
    public function setOpacity($opacity) {
        $this->opacity = $opacity;
    }
}
