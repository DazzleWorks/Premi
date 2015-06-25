<?php

namespace Premi\Model;

use App\Model\Component;

/**
 * @file: Image.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class represents the structure of the data required to 
 * represent an image in a slide
 *
 * +---------+------------+---------------+-------------+---------------------------------+
 * | Version |     Date   |  Programmer   |   Modify    |         Description             |
 * +---------+------------+---------------+-------------+---------------------------------+
 * |  1.0.0  | 2015-06-19 |Burlin Valerio | class Image | create class and its getter and |
 * |         |            |               |             | setter functions                |
 * +---------+------------+---------------+-------------+---------------------------------+
 */
class Image extends Component 
{
    /**
     * indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    /**
     * indicates the path to retrieve the file for the Image
     * @var {string}
     * @private 
     */
    private $path;
    
    
    /**
     * getter function that returns the Image _id
     * @return {integer} 
     * returns the Image _id
     */
    public function getId() {
        return $this->_id;
    }
    
    /**
     * getter function that returns the path to retrieve the file for the Image
     * @return {string} 
     * returns the path to retrieve the file for the Image
     */
    public function getPath() {
        return $this->path;
    }
    
    /**
     * setter function that sets the path to retrieve the file for the Image
     * @param $path {string}
     */
    public function setPath($path) {
        $this->path = $path;
    }
}
