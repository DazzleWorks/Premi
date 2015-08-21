<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: app/Model/Component.php
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
class Component extends Eloquent
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
     * @originX: indicates the position relative to X axis of the vertex of 
     *           origin of the Component
     * @originY: indicates the position relative to Y axis of the vertex of 
     *           origin of the Component
     * @left: indicates the position relative to X axis of the area where the 
     *        Component are drawing
     * @top: indicates the position relative to Y axis of the area where the 
     *        Component are drawing
     * @width: the width of the box of Component
     * @height: the height of the box of Component
     * @fill: indicates the filling color of a Component
     * @stroke: indicates the color of the line used to draw the Component
     * @strokeWidth: indicates the width of the line used to draw the Component
     * @strokeDashArray: indicates the type of the line used to draw the Component
     * @strokeLineCap: indicates the style of the end of the line used to draw 
     *                 the Component
     * @strokeLineJoin: indicates the style of the angle of the line used to 
     *                  draw the Component
     * @strokeMiterLimit: indicates the distance limit of union between two lines 
     * @scaleX: indicates the value of the width scale of a Component
     * @scaleY: indicates the value of the width scale of a Component
     * @angle: indicates the angle of rotation of a Component
     * @flipX: indicates if the Component is flipped to X axis
     * @flipY: indicates if the Component is flipped to Y axis
     * @opacity: indicates the level of opacity of the Component
     * @shadow: indicates the level of the shadow of the Component
     * @visible:  indicates if the Component is visible or not
     * @clipTo: indicates if the Component have the clip effect active
     * @backgroundColor: indicates the background color of the Component
     * @fillRule: indicates the style of the fill
     * @globalCompositeOperation: indicates the origin where the Component are 
     *                            drawn within the group
     */
    protected $fillable = ['type', 'originX', 'originY', 'left', 'top', 'width',
                           'height', 'fill', 'stroke', 'strokeWidth', 
                           'strokeDashArray', 'strokeLineCap', 'strokeLineJoin',
                           'strokeMiterLimit', 'scaleX', 'scaleY', 'angle', 
                           'flipX', 'flipY', 'opacity', 'shadow', 'visible', 
                           'clipTo', 'backgroundColor', 'fillRule', 
                           'globalCompositeOperation'];
 
}
