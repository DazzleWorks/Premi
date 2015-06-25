<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: Component.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class represents the structure of the data required to represent a chart.
 *
 * +---------+------------+---------------+-----------------+---------------------------------+
 * | Version |     Date   |  Programmer   |     Change      |         Description             |
 * +---------+------------+---------------+-----------------+---------------------------------+
 * |  1.0.0  | 2015-06-19 |Burlin Valerio | class Component | create class and its construct, |
 * |         |            |               |                 | getter and setter functions     |
 * +---------+------------+---------------+-----------------+---------------------------------+
 */
abstract class Component extends Eloquent {
    
    /**
     * Indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    private $_id;
    
    /**
     * position of the component relative to the axis X in the slide
     * @var {integer}
     * @private
     */
    private $xIndex;
    
    /**
     * position of the component relative to the axis Y in the slide
     * @var {integer}
     * @private
     */
    private $yIndex;
    
    /**
     * position of the component relative to the axis Z in the slide
     * @var {integer}
     * @private
     */
    private $zIndex;
    
    private $height;
    
    private $width;
    
    private $angle;
    
    private $opacity;
    
    
    public function __construct($id,$x,$y,$z,$h,$w,$a,$o) {
        $this->idComponent = $id;
        $this->xIndex = $x;
        $this->yIndex = $y;
        $this->zIndex = $z;
        $this->height = $h;
        $this->width = $w;
        $this->angle = $a;
        $this->opacity = $o;
    }
    
    public function getId() {
        return $idSlide;
    }
    
    public function getXIndex() {
        return $xIndex;
    }
    
    public function getYIndex() {
        return $yIndex;
    }
    
    public function getZIndex() {
        return $zIndex;
    }
    
    public function getHeight() {
        return $height;
    }
    
    public function getWidth() {
        return $width;
    }
    
    public function getAngle() {
        return $angle;
    }
    
    public function getOpacity() {
        return $opacity;
    }
    
    public function setXIndex($x) {
        $xIndex = $x;
    }
    
    public function setYIndex($y) {
        $yIndex = $y;
    }
    
    public function setZIndex($z) {
        $zIndex = $z;
    }
    
    public function setHeight($h) {
        $height = $h;
    }
    
    public function setWidth($w) {
        $width = $w;
    }
    
    public function setAngle($a) {
        $angle = $a;
    }
    
    public function setOpacity($o) {
        $opacity = $o;
    }
}
