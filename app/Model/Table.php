<?php
namespace Premi;

use App\Model\Component;

/**
 * Description of table
 *
 * @author Valerio
 */
class Table extends Component {
    
    private $row;
    
    private $column;
    
    private $title;
    
    private $cellData = array();
    
    
    public function __construct($r,$c,$t,$cd) {
        parent::__construct();
        
        $this->row = $r;
        $this->column = $c;
        $this->title = $t;
        $this->cellData = $cd;
    }
    
    public function getRow() {
        return $row;
    }
    
    public function getColumn() {
        return $column;
    }
    
    public function getTitle() {
        return $title;
    }
    
    public function getCellData() {
        return $cellData;
    }
    
    public function setRow($r) {
        $row = $r;
    }
    
    public function setColumn($c) {
        $column = $c;
    }
    
    public function setTitle($t) {
        $title = $t;
    }
    
    public function setCellData($cd) {
        $cellData = $cd;
    }
}
