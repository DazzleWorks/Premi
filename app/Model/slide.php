<?php
namespace Premi;

use Jenssegers\Mongodb\Model as Eloquent;

/**
 * @file: slide.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class stores slide data that is retrieved by the slide 
 *               controller
 * 
 * +---------+------------+----------------+--------------+--------------+ 
 * | Version |    Date    |   Programmer   |    Modify    | Description  |
 * +---------+------------+----------------+--------------+--------------+
 * |  0.0.1  | 2015-06-19 | Burlin Valerio | class Slide  | create class |
 * +---------+------------+----------------+--------------+--------------+
 */
class Slide extends Eloquent {
    
    /**
     * Indicates if the model should be timestamped
     * 
     * @var timestamps bool
     */
    public $timestamps = false;
    
    /**
     * The attributes of the class.
     *
     * @var x ->
     * @var y ->
     * @var components -> 
     */
    private $x, $y, $components = array();
}
