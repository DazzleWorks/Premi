<?php
namespace Premi;

use App\Model\Component;

/**
 * Description of chart
 *
 * @author Valerio
 */
class Chart extends Component {
    
    private $type;
    
    private $data = array();
    
    private $options = array();
    
    
    public function __construct($t,$d,$o) {
        parent::_construct();
        
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
