<?php

namespace Premi\Model;

use Premi\Model\Component as Component;

/**
 * @file: app/Model/Text.php
 * @author: DazzleWorks
 * @date: 2015-06-23
 * @description: This class represents the structure of the data required to 
 * represent a Text in a slide.
 * 
 * +---------+------------+----------------+--------------+----------------+ 
 * | Version |    Date    |   Programmer   |    Modify    |  Description   |
 * +---------+------------+----------------+--------------+----------------+
 * |  1.0.0  | 2015-06-23 | Burlin Valerio | class Text   | create class   |
 * +---------+------------+----------------+--------------+----------------+
 */
class Text extends Component 
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
     * @text: indicates the content of the Text box
     * @fontSize: indicates the dimension of the Text font
     * @fontWeight: indicates the thickness of the Text
     * @fontFamily: indicates the family of a Text font
     * @fontStyle: indicates the style og a Text font
     * @lineHeight: indicates the height of a line of the Text box  
     * @textDecoration: indicates the type of decoration of the Text content
     * @textAlign: indicates the alignment of the Text
     * @textBackgroundColor: indicates the background color of a Text box
     */
    protected $fillable = ['type', 'originX', 'originY', 'left', 'top' ,'width',
                           'height', 'fill', 'stroke', 'strokeWidth', 
                           'strokeDashArray', 'strokeLineCap', 'strokeLineJoin',
                           'strokeMiterLimit', 'scaleX', 'scaleY', 'angle', 
                           'flipX', 'flipY', 'opacity', 'shadow', 'visible', 
                           'clipTo', 'backgroundColor', 'fillRule', 
                           'globalCompositeOperation', 'text', 'fontSize', 
                           'fontWeight', 'fontFamily', 'fontStyle', 'lineHeight',
                           'textDecoration', 'textAlign', 'textBackgroundColor'];
    
}
