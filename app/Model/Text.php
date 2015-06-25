<?php

namespace Premi\Model;

use App\Model\Component;

/**
 * Description of text
 *
 * @author Valerio
 */
class Text extends Component {
    
    private $content;
    
    private $dim;
    
    private $color;
    
    private $alignment;
    
    private $backgroundColor;
    
    private $bold;
    
    private $italic;
    
    private $underscore;
    
    
    public function __construct($cnt,$d,$clr,$a,$bck,$b,$i,$u) {
        parent::__construct();
        
        $this->content = $cnt;
        $this->dim = $d;
        $this->color = $clr;
        $this->alignment = $a;
        $this->backgroundColor = $bck;
        $this->bold = $b;
        $this->italic = $i;
        $this->underscore = $u;  
    }
    
    public function getContent() {
        return $content;
    }
    
    public function getDim() {
        return $dim;
    }
    
    public function getColor() {
        return $color;
    }
    
    public function getAlignment() {
        return $alignment;
    }
    
    public function getBackgroundColor() {
        return $backgroundColor;
    }
    
    public function getBold() {
        return $bold;
    }
    
    public function getItalic() {
        return $italic;
    }
    
    public function getUnderscore() {
        return $underscore;
    }
    
    public function setContent($cnt) {
        $content = $cnt;
    }
    
    public function setDim($d) {
        $dim = $d;
    }
    
    public function setColor($clr) {
        $color = $clr;
    }
    
    public function setAlignment($a) {
        $alignment = $a;
    }
    
    public function setBackgroundColor($bck) {
        $backgroundColor = $bck;
    }
    
    public function setBold($b) {
        $bold = $b;
    }
    
    public function setItalic($i) {
        $italic = $i;
    }
    
    public function setUnderscore($u) {
        $underscore = $u;
    }
}
