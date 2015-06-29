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
     * @content: indicates the content of the Text box
     * @dim: indicates the dimension of the Text font
     * @color: indicates the color of the Text
     * @alignment: indicates the aligmentt of the Text
     * @backgroundColor: indicates the background color of the Text box
     * @bold: indicates if the Text is bold
     * @italic: indicates if the Text is italic
     * @underscore: indicates if the Text is underscore
     */
    protected $fillable = ['content', 'dim', 'color', 'alignment', 
                           'backgroundColor', 'bold', 'italic', 'underscore'];
}
