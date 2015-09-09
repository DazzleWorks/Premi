<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: app/Model/Project.php
 * @author: DazzleWorks
 * @date: 2015-06-23
 * @description: This class represents a project of a user. It contains the
 * presentation and zero or more infographic created by it.
 *
 * +---------+------------+---------------+---------------+---------------+
 * | Version |     Date   |  Programmer   |    Modify     |  Description  |
 * +---------+------------+---------------+---------------+---------------+
 * |  1.0.0  | 2015-06-23 |Suierica Bogdan| class Project | create class  |
 * |         |            |               |               | and functions |
 * |         |            |               |               | presentation()|
 * |         |            |               |               |      and      |
 * |         |            |               |               | infographics()|   
 * +---------+------------+---------------+---------------+---------------+
 */
class Project extends Eloquent 
{
    /**
     * Indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    /**
     * The attributes that are mass assignable
     * @var array
     * @protected
     * @name: indicates the name of a Project
     */
    protected $fillable = ['name'];
    
    
    /**
     * Allows to have a single embedded Presentation in a Project
     * @return array
     */
    public function presentation() {
        return $this->embedsOne(Presentation::class);
    }
    
    /**
     * Allows to have embedded Infographic in a Project 
     * @return array
     */
    public function infographics() {
        return $this->embedsMany(Infographic::class);
    }
    
    /**
     * Filters out the parameters for a project
     * @param Project $project
     * @return array
     */
    public static function getParamByProject($project) {
        $data = (['projectID' => $project->_id, 
                  'name' => $project->name,
                  'presentationID' => $project->presentation->_id,
                  'theme' => $project->presentation->theme,
                  'transition' => $project->presentation->transition,
                  'slideID' => $project->presentation->slides[0]->_id,
                  'firstSvg' => $project->presentation->slides[0]->svg]);
        
        return $data;
    }
}

