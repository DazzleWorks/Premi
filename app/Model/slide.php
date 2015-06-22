<?php
namespace Premi;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: slide.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class stores slide data that is retrieved by the slide controller
 * 
 * +---------+------------+----------------+--------------+--------------+ 
 * | Version |    Date    |   Programmer   |    Modify    | Description  |
 * +---------+------------+----------------+--------------+--------------+
 * |  0.0.1  | 2015-06-19 | Burlin Valerio | class Slide  | create class |
 * +---------+------------+----------------+--------------+--------------+
 */
class Slide extends Eloquent {
    
    /**
     * Indicates if the model should be timestamped
     * @var bool
     * @public
     */
    public $timestamps = false;
    
    private $idSlide;
    
    /**
     * position of the slide relative to the axis X in the presentation's matrix
     * @var int
     * @private
     */
    private $xIndex; 
    
    /**
     * position of the slide relative to the axis Y in the presentation's matrix
     * @var int
     * @access private
     */
    private $yIndex;
            
    /**
     * array of components of which is formed the slide
     * @var array
     * @access private
     */
    private $components = array();
    
    
    public function __construct($id,$x,$y,$c) {
        $this->idSlide = $id;
        $this->xIndex = $x;
        $this->yIndex = $y;
        $this->components = $c;
    }
    
    public function getId() {
        return $id;
    }
    
    /**
     * return the position of the slide relative to the axis X in the presentation's matrix
     * @returns {integer} position of the slide relative to the axis X in the presentation's matrix
     * @public
     */
    public function getX() {
        return $x;
    }
    
    /**
     * return the position of the slide relative to the axis Y in the presentation's matrix
     * @returns {integer} position of the slide relative to the axis Y in the presentation's matrix
     * @public
     */
    public function getY() {
        return $y;
    }
    
    /**
     * 
     * @param {type} Descrizione
     * @returns {type} Descrizione
     * @modificatore di accesso
     */
    public function setX($newX) {
       $x = $newX; 
    }
    
    /**
     * 
     * @param {type} Descrizione
     * @returns {type} Descrizione
     * @modificatore di accesso
     */
    public function setY($newY) {
       $Y = $newY; 
    }
}
