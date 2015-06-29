<?php

namespace Premi\Model;

use App\Model\Component;

/**
 * @file: RealTimeData.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class represents the structure of the data required to 
 * represent a RealTimeData in a slide
 *
 * +---------+------------+---------------+--------------------+---------------+
 * | Version |     Date   |  Programmer   |       Modify       |  Description  |
 * +---------+------------+---------------+--------------------+---------------+
 * |  1.0.0  | 2015-06-19 |Burlin Valerio | class RealTimeData | create class  | 
 * +---------+------------+---------------+--------------------+---------------+
 */
class RealTimeData extends Component 
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
     * @pathParser:
     * @pathFallback:
     * @pathHandlerJs:
     */
    protected $fillable = ['pathParser', 'pathFallback', 'pathHandlerJs'];
}

