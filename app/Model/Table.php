<?php

namespace Premi\Model;

use App\Model\Component;

/**
 * @file: Table.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class represents the structure of the data required to 
 * represent a Table in a slide
 * 
 * +---------+------------+----------------+--------------+---------------------------------+ 
 * | Version |    Date    |   Programmer   |    Modify    |          Description            |
 * +---------+------------+----------------+--------------+---------------------------------+
 * |  1.0.0  | 2015-06-19 | Burlin Valerio | class Table  | create class and its getter and |
 * |         |            |                |              | setter functions                |
 * +---------+------------+----------------+--------------+---------------------------------+
 */
class Table extends Component 
{
    /**
     * indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    /**
     * indicates the number of the rows of the table
     * @var {integer}
     * @private
     */
    private $row;
    
    /**
     * indicates the number of the columns of the table
     * @var {integer}
     * @private
     */
    private $column;
    
    /**
     * indicates the title of the table
     * @var {string}
     * @private
     */
    private $title;
    
    /**
     * the array that contains the data of the table
     * @var array
     * @private
     */
    private $cellData = array();
   
    
    /**
     * getter function that returns the Table _id
     * @return {integer} 
     * returns the Table _id
     */
    public function getId() {
        return $this->_id;
    }
    
    /**
     * getter function that returns the number of the rows of the table
     * @return {integer} 
     * returns the number of the row of the table
     */
    public function getRow() {
        return $this->row;
    }
    
    /**
     * getter function that returns the number of the columns of the table
     * @return {integer} 
     * returns the number of the columns of the table
     */
    public function getColumn() {
        return $this->column;
    }
    
    /**
     * getter function that returns the title of the table
     * @return {string} 
     * returns the title of the table
     */
    public function getTitle() {
        return $this->title;
    }
    
    /**
     * getter function that returns the array that contains the data of the 
     * table
     * @return array
     * returns the array that contains the data of the table
     */
    public function getCellData() {
        return $this->cellData;
    }
    
    /**
     * setter function that sets the number of the rows of the table
     * @param $row {integer} 
     */
    public function setRow($row) {
        $this->row = $row;
    }
    
    /**
     * setter function that sets the number of the columns of the table
     * @param $column {integer} 
     */
    public function setColumn($column) {
        $this->column = $column;
    }
    
    /**
     * setter function that sets the title of the table
     * @param $title {string} 
     */
    public function setTitle($title) {
        $this->title = $title;
    }
    
    /**
     * setter function that sets the array that contains the data of the table
     * @param $cellData array 
     */
    public function setCellData($cellData) {
        $this->cellData = $cellData;
    }
}

