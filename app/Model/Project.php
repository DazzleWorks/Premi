<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;

class Project extends Eloquent {
    /**
     * Indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'presentation'];
    
    private $name;
    private $presentation;


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
    
    public function setPresentation($presentation)
    {
        $this->presentation = $presentation;
    }

    
     * getter method that returns the Project infographics
     * @return array {Infographic} Returns the Project infographics
     
    public function getInfographics()
    {
        return $this->infographics;
    }

    /**
     * setter method that sets the Project infographics
     * @param $infographics array {Infographics}
     
    public function setInfographics($infographics)
    {
        $this->infographics = $infographics;
    }

    public function getProjectById($id){
        $project = Projects::find($id);
        return $project;
    }*/
}

