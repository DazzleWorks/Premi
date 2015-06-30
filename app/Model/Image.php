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
 * +---------+------------+---------------+-------------+--------------+
 * | Version |     Date   |  Programmer   |   Modify    | Description  |
 * +---------+------------+---------------+-------------+--------------+
 * |  1.0.0  | 2015-06-19 |Burlin Valerio | class Image | create class |
 * +---------+------------+---------------+-------------+--------------+
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
     * the attributes that are mass assignable
     * @var array
     * @protected
     * @path: indicates the path to retrieve the file for the Image
     * @filters:
     * @crossOrigin:
     * @alignX:
     * @alignY:
     * @meetOrSlice:
     * @background:
     */
    protected $fillable = ['src', 'filters', 'crossOrigin', 'alignX', 'alignY',
                           'meetOrSlice', 'background'];
}
