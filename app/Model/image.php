<?php
namespace Premi;

use App\Model\Component;

/**
 * Description of image
 *
 * @author Valerio
 */
class Image extends Component {
    
    private $path;
    
    
    public function __construct($p) {
        parent::__construct();
        
        $this->path = $p;
    }
    
    public function getPath() {
        return $path;
    }
    
    public function setPath($p) {
        $path = $p;
    }
}
