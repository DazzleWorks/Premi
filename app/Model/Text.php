<?php

namespace Premi\Model;

use App\Model\Component;

/**
 * @file: Text.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class represents the structure of the data required to 
 * represent a Text in a slide
 * 
 * +---------+------------+----------------+--------------+---------------------------------+ 
 * | Version |    Date    |   Programmer   |    Modify    |          Description            |
 * +---------+------------+----------------+--------------+---------------------------------+
 * |  1.0.0  | 2015-06-19 | Burlin Valerio | class Text   | create class and its getter and |
 * |         |            |                |              | setter functions                |
 * +---------+------------+----------------+--------------+---------------------------------+
 */
class Text extends Component 
{
    /**
     * indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    /**
     * indicates the content of the Text box
     * @var {string}
     * @private
     */
    private $content;
    
    /**
     * indicates the dimension of the Text font
     * @var {integer}
     * @private
     */
    private $dim;
    
    /**
     * indicates the color of the Text
     * @var {string}
     * @private
     */
    private $color;
    
    /**
     * indicates the aligmentt of the Text 
     * @var {string}
     * @private
     */
    private $alignment;
    
    /**
     * indicates the background color of the Text box
     * @var {string}
     * @private
     */
    private $backgroundColor;
    
    /**
     * indicates if the Text is bold
     * @var {boolean}
     * @private
     */
    private $bold;
    
    /**
     * indicates if the Text is italic
     * @var {boolean}
     * @private
     */
    private $italic;
    
    /**
     * indicates if the Text is underscore
     * @var {boolean}
     * @private
     */
    private $underscore;
    
    
    /**
     * getter function that returns the Text _id
     * @return {integer} 
     * returns the Text _id
     */
    public function getId() {
        return $this->_id;
    }
    
    /**
     * getter function that returns the content of a Text box
     * @return {string} 
     * returns the the content of a Text box
     */
    public function getContent() {
        return $this->content;
    }
    
    /**
     * getter function that returns the dimension of a Text font
     * @return {integer} 
     * returns the dimension of a Text font
     */
    public function getDim() {
        return $this->dim;
    }
    
    /**
     * getter function that returns the color of a Text 
     * @return {string} 
     * returns the color of a Text
     */
    public function getColor() {
        return $this->color;
    }
    
    /**
     * getter function that returns the alignment of a Text 
     * @return {string} 
     * returns the alignment of a Text
     */
    public function getAlignment() {
        return $this->alignment;
    }
    
    /**
     * getter function that returns the background color of a Text box 
     * @return {string} 
     * returns the background color of a Text box 
     */
    public function getBackgroundColor() {
        return $this->backgroundColor;
    }
    
    /**
     * getter function that returns if a Text is bold 
     * @return {boolean} 
     * returns if a Text is bold  
     */
    public function getBold() {
        return $this->bold;
    }
    
    /**
     * getter function that returns if a Text is italic 
     * @return {boolean} 
     * returns if a Text is italic  
     */
    public function getItalic() {
        return $this->italic;
    }
    
    /**
     * getter function that returns if a Text is underscore 
     * @return {boolean} 
     * returns if a Text is underscore  
     */
    public function getUnderscore() {
        return $this->underscore;
    }
    
    /**
     * setter function that sets the content of a Text box
     * @param $content {string}
     */
    public function setContent($content) {
        $this->content = $content;
    }
    
    /**
     * setter function that sets the dimension of a Text font
     * @param $dim {integer}
     */
    public function setDim($dim) {
        $this->dim = $dim;
    }
    
    /**
     * setter function that sets the color of a Text 
     * @param $color {string}
     */
    public function setColor($color) {
        $this->color = $color;
    }
    
    /**
     * setter function that sets the alignment of a Text
     * @param $alignment {string}
     */
    public function setAlignment($alignment) {
        $this->alignment = $alignment;
    }
    
    /**
     * setter function that sets the background color of a Text box
     * @param $backgroundColor {string}
     */
    public function setBackgroundColor($backgroundColor) {
        $this->backgroundColor = $backgroundColor;
    }
    
    /**
     * setter function that sets if a Text is bold
     * @param $bold {boolean}
     */
    public function setBold($bold) {
        $this->bold = $bold;
    }
    
    /**
     * setter function that sets if a Text is italic
     * @param $italic {boolean}
     */
    public function setItalic($italic) {
        $this->italic = $italic;
    }
    
    /**
     * setter function that sets if a Text is underscore
     * @param $underscore {boolean}
     */
    public function setUnderscore($underscore) {
        $this->underscore = $underscore;
    }
}
