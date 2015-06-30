<?php

namespace Premi\Model;

use App\Model\Component;

/**
 * @file: Text.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class represents the structure of the data required to 
 * represent a Text in a slide
 * 
 * +---------+------------+----------------+--------------+----------------+ 
 * | Version |    Date    |   Programmer   |    Modify    |  Description   |
 * +---------+------------+----------------+--------------+----------------+
 * |  1.0.0  | 2015-06-19 | Burlin Valerio | class Text   | create class   |
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
     * @fontWeight: 
     * @fontFamily: 
     * @fontStyle: 
     * @lineHeight: 
     * @textDecoration: 
     * @textAlign: 
     * @textBackgroundColor:
     */
    protected $fillable = ['text', 'fontSize', 'fontWeight', 'fontFamily', 
                           'fontStyle', 'lineHeight', 'textDecoration', 
                           'textAlign', 'textBackgroundColor'];
}
