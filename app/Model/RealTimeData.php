<?php

namespace Premi\Model;

use App\Model\Component;

/**
 * Description of realTimeData
 *
 * @author Valerio
 */
class RealTimeData extends Component {
    
    private $pathParser;
    
    private $pathFallback;
    
    private $pathHandlerJs;
    
    
    public function __construct($pp,$pf,$ph) {
        parent::__construct();
        
        $this->pathParser = $pp;
        $this->pathFallback = $pf;
        $this->pathHandlerJs = $ph;
    }
    
    public function getPathParser() {
        return $pathParser;
    }
    
    public function getPathFallback() {
        return $pathFallback;
    }
    
    public function getPathHandlerJs() {
        return $pathHandlerJs;
    }
    
    public function setPathParser($pp) {
        $pathParser = $pp;
    }
    
    public function setPathFallback($pf) {
        $pathFallback = $pf;
    }
    
    public function setPathHandlerJs($ph) {
        $pathHandlerJs = $ph;
    }
}

