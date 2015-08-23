<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: app/Model/Infographic.php
 * @author: DazzleWorks
 * @date: 2015-06-23
 * @description: This class is graphic visual rapresentation of the presentation 
 * that intends to present information quickly and clearly. It contains the path 
 * of the image if the user already eloborated it.
 *
 * +---------+------------+---------------+--------------------+--------------+
 * | Version |     Date   |  Programmer   |       Modify       | Description  |
 * +---------+------------+---------------+--------------------+--------------+
 * |  1.0.0  | 2015-06-19 |Suierica Bogdan| class Infographic  | create class |
 * +---------+------------+---------------+--------------------+--------------+
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
     * the attributes that are mass assignable
     * @var array
     * @protected
     * @name: indicates the name of the Infographic
     * @path: indicates the path to retrieve the file for the Infographic
     */
    protected $fillable = ['name', 'path'];
}
