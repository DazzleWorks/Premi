<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: Project.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class represents a project of a user. It contains the
 * presentation and zero or more infographic created by it
 *
 * +---------+------------+---------------+---------------+---------------------------------+
 * | Version |     Date   |  Programmer   |    Modify     |  Description                    |
 * +---------+------------+---------------+---------------+---------------------------------+
 * |  1.0.0  | 2015-06-19 |Suierica Bogdan| class Project | create class and its getter and |
 * |         |            |               |               | setter functions                |
 * +---------+------------+---------------+---------------+---------------------------------+
 */
class Project extends Eloquent 
{
    /**
     * indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    /**
     * the attributes that are mass assignable
     * @var array
     * @protected
     */
    protected $fillable = ['name', 'presentation'];
    
    /**
     * indicates the name of a Project
     * @var {string}
     * @private 
     */
    private $name;
    
    
    /**
     * functions that allows to have a single embedded Presentation in a Project 
     * @return array
     */
    public function presentation() {
        return $this->embedsOne(Presentation::class);
    }
    
    /**
     * functions that allows to have embedded Infographic in a Project 
     * @return array
     */
    public function infographics() {
        return $this->embedsMany(Infographic::class);
    }

    /**
     * getter function that returns the Project _id
     * @returns {integer} 
     * returns the Project _id
     */
    public function getId() {
        return $this->_id;
    }

    /**
     * getter function that returns the Project name
     * @return {string} 
     * returns the Project name
     */
    public function getName() {
        return $this->name;
    }

    /**
     * setter function that sets the Project name
     * @param $name {string}
     */
    public function setName($name) {
        $this->name = $name;
    }
    
}

