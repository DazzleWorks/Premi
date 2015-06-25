<?php

namespace Premi\Model;

use App\Model\Component;

/**
 * @file: Chart.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class represents the structure of the data required to represent a chart.
 *
 * +---------+------------+---------------+-------------+---------------------------------+
 * | Version |     Date   |  Programmer   |   Change    |         Description             |
 * +---------+------------+---------------+-------------+---------------------------------+
 * |  1.0.0  | 2015-06-19 |Burlin Valerio | class Chart | create class and its construct, |
 * |         |            |               |             | getter and setter functions     |
 * +---------+------------+---------------+-------------+---------------------------------+
 */
class Chart extends Component {
    
    /**
     * Indicates if the model should be timestamped
     * @var bool
     * @public
     */
    private $type;
    
    private $data = array();
    
    private $options = array();
    
    
    public function __construct($t,$d,$o) {
        parent::__construct();
        
        $this->type = $t;
        $this->data = $d;
        $this->options = $o;
    }
    
    public function getType() {
        return $type;
    }
    
    public function getData() {
        return $data;
    }
    
    public function getOptions() {
        return $options;
    }
    
    public function setType($t) {
        $type = $t;
    }
    
    public function setData($d) {
        $data = $d;
    }
    
    public function setOptions($o) {
        $options = $o;
    }
}
