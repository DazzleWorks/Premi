<?php
namespace Premi;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * Description of component
 *
 * @author Valerio
 */
abstract class Component extends Eloquent {
    
    private $idComponent;
    
    private $xIndex;
    
    private $yIndex;
    
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
