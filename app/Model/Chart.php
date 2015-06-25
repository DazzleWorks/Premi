<?php

namespace Premi\Model;

use App\Model\Component;

/**
 * @file: Chart.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class represents the structure of the data required to 
 * represent a chart in a slide
 *
 * +---------+------------+---------------+-------------+---------------------------------+
 * | Version |     Date   |  Programmer   |   Modify    |         Description             |
 * +---------+------------+---------------+-------------+---------------------------------+
 * |  1.0.0  | 2015-06-19 |Burlin Valerio | class Chart | create class and its getter and |
 * |         |            |               |             | setter functions                |
 * +---------+------------+---------------+-------------+---------------------------------+
 */
class Chart extends Component 
{
    /**
     * indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    /**
     * indicates the type of Chart
     * @var {string}
     * @private 
     */
    private $type;
    
    /**
     * array data from which to generate the Chart
     * @var array 
     * @private
     */
    private $data = array();
    
    
    /**
     * getter function that returns the Chart _id
     * @return {integer} 
     * returns the Chart _id
     */
    public function getId() {
        return $this->_id;
    }
    
    /**
     * getter function that returns the type of Chart
     * @return {string} 
     * returns the type of Chart
     */
    public function getType() {
        return $this->type;
    }
    
    /**
     * getter function that returns the data from which to generate the Chart
     * @return array 
     * returns the array data of the Chart
     */
    public function getData() {
        return $this->data;
    }
    
    /**
     * setter function that sets the type of the Chart
     * @param $type {string}
     */
    public function setType($type) {
        $this->type = $type;
    }
    
    /**
     * setter function that sets the data from which to generate the Chart
     * @param $data array
     */
    public function setData($data) {
        $this->data = $data;
    }
    
}
