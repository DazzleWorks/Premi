<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: Component.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class represents the general structure of a component 
 * of the slide
 *
 * +---------+------------+---------------+-----------------+--------------+
 * | Version |     Date   |  Programmer   |     Modify      | Description  |
 * +---------+------------+---------------+-----------------+--------------+
 * |  1.0.0  | 2015-06-19 |Burlin Valerio | class Component | create class |                 
 * +---------+------------+---------------+-----------------+--------------+
 */
abstract class Component extends Eloquent
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
     * @xIndex: position of the Component relative to the axis X in the slide
     * @yIndex: position of the Component relative to the axis Y in the slide
     * @zIndex: position of the Component relative to the axis Z in the slide
     * @height: the height of the box of Component
     * @width: the width of the box of Component
     * @angle: the angle of rotation of the Component relative to the axis X
     * #@opacity: the level of opacity of the Component
     */
    protected $fillable = ['xIndex' , 'yIndex', 'zIndex', 'height', 'width',
                           'angle', 'opacity'];
}
