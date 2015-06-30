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
     * @type: indicates the type of the Component
     * @originX: 
     * @originY: 
     * @left:
     * @top: 
     * @width: the width of the box of Component
     * @height: the height of the box of Component
     * @fill: 
     * @stroke: 
     * @strokeWidth:
     * @strokeDashArray:
     * @strokeLineCap:
     * @strokeLineJoin:
     * @strokeMiterLimit:
     * @scaleX:
     * @scaleY:
     * @angle:
     * @flipX:
     * @flipY:
     * @opacity:
     * @shadow:
     * @visible:
     * @clipTo:
     * @backgroundColor:
     * @fillRule:
     * @globalCompositeOperation:
     */
    protected $fillable = ['type', 'originX', 'OriginY', 'left', 'top', 'width',
                           'height', 'fill', 'stroke', 'strokeWidth', 
                           'strokeDashArray', 'strokeLineCap', 'strokeLineJoin',
                           'strokeMiterLimit', 'scaleX', 'scaleY', 'angle', 
                           'flipX', 'flipY', 'opacity', 'shadow', 'visible', 
                           'clipTo', 'backgroundColor', 'fillRule', 
                           'globalCompositeOperation'];
}
