<?php

namespace Premi;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: Infographic.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class is graphic visual rapresentation of the presentation that intends to present
 * information quickly and clearly. It contains the path of the image if the user already eloborated it.
 *
 * +---------+------------+---------------+--------------------+--------------+
 * | Version |     Date   |  Programmer   |        Change      |  Description |
 * +---------+------------+---------------+--------------------+--------------+
 * |  0.0.1  | 2015-06-19 |Suierica Bogdan| class Infographic  | create class |
 * +---------+------------+---------------+--------------------+--------------+
 */

class Infographic extends Eloquent
{
    private $_id;
    private $name;
    private $path;

    /**
     * constructor method of the Infograhic class
     * @param array $_id
     * @param $name
     * @param $path
     */
    public function __construct($_id, $name, $path){
        $this->_id = $_id;
        $this->name = $name;
        $this->path = $path;
    }

    /**
     * getter method that returns the Infographic _id
     * @return array {integer}
     * Returns the Infographic _id
     */
    public function getId()
    {
        return $this->_id;
    }

    /**
     * setter method that sets the Infographic _id
     * @param $id {Integer}
     */
    public function setId($id)
    {
        $this->_id = $id;
    }

    /**
     * getter method that returns the Infographic name
     * @returns {string} Returns the Infographic name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * setter method that sets the Infographic name
     * @param $name {Integer}
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * getter method that returns the Infographic path
     * @returns {string} Returns the Infographic path
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * setter method that sets the Infographic path
     * @param $path {Integer}
     */
    public function setPath($path)
    {
        $this->path = $path;
    }


}
