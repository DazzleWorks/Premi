<?php

namespace Premi;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: Infographic.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class is graphic visual rapresentation of the presentation that intends to present
 * information quickly and clearly. It contains the path of the image if the user already eloborated it.
 *
 * +---------+------------+---------------+--------------------+---------------------------------+
 * | Version |     Date   |  Programmer   |        Change      |         Description             |
 * +---------+------------+---------------+--------------------+---------------------------------+
 * |  1.0.0  | 2015-06-19 |Suierica Bogdan| class Infographic  | create class and its construct, |
 * |         |            |               |                    | getter and setter functions     |
 * +---------+------------+---------------+--------------------+---------------------------------+
 */

class Infographic extends Eloquent
{
    private $_id;
    private $name;
    private $path;

    /**
     * constructor function of the Infograhic class
     * @param $_id {integer}
     * @param $name {string}
     * @param $path {string}
     */
    public function __construct($_id, $name, $path){
        $this->_id = $_id;
        $this->name = $name;
        $this->path = $path;
    }

    /**
     * getter function that returns the Infographic _id
     * @returns {integer} returns the Infographic _id
     */
    public function getId()
    {
        return $this->_id;
    }

    /**
     * setter function that sets the Infographic _id
     * @param $id {integer}
     */
    public function setId($id)
    {
        $this->_id = $id;
    }

    /**
     * getter function that returns the Infographic name
     * @returns {string} returns the Infographic name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * setter function that sets the Infographic name
     * @param $name {integer}
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * getter function that returns the Infographic path
     * @returns {string} returns the Infographic path
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * setter function that sets the Infographic path
     * @param $path {integer}
     */
    public function setPath($path)
    {
        $this->path = $path;
    }


}
