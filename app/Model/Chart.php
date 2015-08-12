<?php

namespace Premi\Model;

use App\Model\Object;

/**
 * @file: app/Model/Chart.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class represents the structure of the data required to 
 * represent a chart in a slide
 *
 * +---------+------------+---------------+-------------+--------------+
 * | Version |     Date   |  Programmer   |   Modify    | Description  |
 * +---------+------------+---------------+-------------+--------------+
 * |  1.0.0  | 2015-06-19 |Burlin Valerio | class Chart | create class |
 * +---------+------------+---------------+-------------+--------------+
 */
class Chart extends Object 
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
     * @typeChart: indicates the type of Chart
     * @data: array data from which to generate the Chart 
     */
    protected $fillable = ['typeChart' , 'data'];
}
