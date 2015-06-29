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
 * +---------+------------+---------------+--------------------+---------------------------------+
 * | Version |     Date   |  Programmer   |       Modify       |           Description           |
 * +---------+------------+---------------+--------------------+---------------------------------+
 * |  1.0.0  | 2015-06-19 |Burlin Valerio | class RealTimeData | create class and its getter and |
 * |         |            |               |                    | setter functions                | 
 * +---------+------------+---------------+--------------------+---------------------------------+
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
     * indicates the path to access the data parser 
     * @var {string}
     * @private
     */
    private $pathParser;
    
    /**
     * indicates the path to access the data fallback in case of lack of 
     * connection
     * @var {string}
     * @private
     */
    private $pathFallback;
    
    /**
     * ???
     * @var {string}
     * @private
     */
    private $pathHandlerJs;
    
    
    public function getPathParser() {
        return $this->pathParser;
    }
    
    public function getPathFallback() {
        return $this->pathFallback;
    }
    
    public function getPathHandlerJs() {
        return $this->pathHandlerJs;
    }
    
    public function setPathParser($pathParser) {
        $this->pathParser = $pathParser;
    }
    
    public function setPathFallback($pathFallback) {
        $this->pathFallback = $pathFallbackf;
    }
    
    public function setPathHandlerJs($pathHandlerJs) {
        $this->pathHandlerJs = $pathHandlerJs;
    }
}

