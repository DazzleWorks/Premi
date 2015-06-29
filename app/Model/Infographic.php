<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: Infographic.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class is graphic visual rapresentation of the presentation 
 * that intends to present information quickly and clearly. It contains the path 
 * of the image if the user already eloborated it
 *
 * +---------+------------+---------------+--------------------+---------------------------------+
 * | Version |     Date   |  Programmer   |       Modify       |         Description             |
 * +---------+------------+---------------+--------------------+---------------------------------+
 * |  1.0.0  | 2015-06-19 |Suierica Bogdan| class Infographic  | create class and its getter and |
 * |         |            |               |                    | setter functions                |
 * +---------+------------+---------------+--------------------+---------------------------------+
 */
class Infographic extends Eloquent
{
    /**
     * indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    /**
     * indicates the name of the Infographic
     * @var {string}
     * @private 
     */
    private $name;
    
    /**
     * indicates the path to retrieve the file for Infographic
     * @var {string}
     * @private 
     */
    private $path;

    
    /**
     * getter function that returns the Infographic _id
     * @return array {integer} returns the Infographic _id
     */
    public function getId() {
        return $this->_id;
    }

    /**
     * getter function that returns the Infographic name
     * @returns {string} 
     * returns the Infographic name
     */
    public function getName() {
        return $this->name;
    }

    /**
     * setter function that sets the Infographic name
     * @param $name {integer}
     */
    public function setName($name) {
        $this->name = $name;
    }

    /**
     * getter function that returns the path to retrieve the file for 
     * Infographic
     * @returns {string} 
     * returns the path to retrieve the file for Infographic
     */
    public function getPath() {
        return $this->path;
    }

    /**
     * setter function that sets the path to retrieve the file for Infographic
     * @param $path {integer}
     */
    public function setPath($path)
    {
        $this->path = $path;
    }

}
