<?php

namespace Premi\Model;

use App\Model\Object;

/**
 * @file: app/Model/Image.php
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
class Image extends Object 
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
     * @src: indicates the path to retrieve the file for the Image
     * @filters: indicates what filters are apply to the Image
     * @crossOrigin: uses to sent information with the Image
     * @alignX: indicates the alignment relative to the X axis
     * @alignY: indicates the alignment relative to the Y axis
     * @meetOrSlice: indicates if the Image should be cut or completely visible
     *               when narrows the window
     * @background: indicates the background of the Image
     */
    protected $fillable = ['src', 'filters', 'crossOrigin', 'alignX', 'alignY',
                           'meetOrSlice', 'background'];
}
