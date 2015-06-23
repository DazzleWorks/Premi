<?php

namespace Premi;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: Project.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class stores the work of the user.
 *
 * +---------+------------+---------------+---------------+--------------+
 * | Version |     Date   |  Programmer   |     Change    |  Description |
 * +---------+------------+---------------+---------------+--------------+
 * |  0.0.1  | 2015-06-19 |Suierica Bogdan| class Project | create class |
 * +---------+------------+---------------+---------------+--------------+
 */

class Project extends Eloquent
{
    /**
     * Indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    protected $collection = 'users_collection';
    
    //private $_id;
    private $name;
    private $presentation;

    /*
     *array of infographics associated with the project
     */
    //private $infographics = [];

    /**
     * constructor method of the Project class
     * @param array $_id
     * @param $name
     * @param $presentation
     * @param $infographics
     */
    /*public function __construct($_id, $name, $presentation, $infographics){
        //$this->_id = $_id;
        $this->name = $name;
        $this->presentation = $presentation;
        $this->infographics = $infographics;
    }*/

    /**
     * getter method that returns the project _id
     * @returns {integer} Returns the project _id
     */
    public function getId()
    {
        return $this->_id;
    }

    /**
     * setter method that sets the project _id
     * @param $id {Integer}
     */
    public function setId($id)
    {
        $this->_id = $id;
    }

    /**
     * getter method that returns the Project name
     * @return {string} Returns the Project name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * setter method that sets the Project name
     * @param $name {string}
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * getter method that returns the Project presentation
     * @return {Presentation} Returns the Project presentation
     */
    public function getPresentation()
    {
        return $this->presentation;
    }

    /**
     * setter method that sets the Project presentation
     * @param $name {Presentation}
     */
    public function setPresentation($presentation)
    {
        $this->presentation = $presentation;
    }

    /**
     * getter method that returns the Project infographics
     * @return array {Infographic} Returns the Project infographics
     */
    public function getInfographics()
    {
        return $this->infographics;
    }

    /**
     * setter method that sets the Project infographics
     * @param $infographics array {Infographics}
     */
    public function setInfographics($infographics)
    {
        $this->infographics = $infographics;
    }

    public function getProjectById($id){
        $project = Projects::find($id);
        return $project;
    }
}
