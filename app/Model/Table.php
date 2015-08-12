<?php

namespace Premi\Model;

use App\Model\Object;

/**
 * @file: app/Model/Table.php
 * @author: DazzleWorks
 * @date: 2015-06-19
 * @description: This class represents the structure of the data required to 
 * represent a Table in a slide
 * 
 * +---------+------------+----------------+--------------+---------------+ 
 * | Version |    Date    |   Programmer   |    Modify    |  Description  |
 * +---------+------------+----------------+--------------+---------------+
 * |  1.0.0  | 2015-06-19 | Burlin Valerio | class Table  | create class  |
 * +---------+------------+----------------+--------------+---------------+
 */
class Table extends Object 
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
     * @row: indicates the number of the rows of the table
     * @column: indicates the number of the columns of the table
     * @title: indicates the title of the Table
     * @cellData: the array that contains the data of the table
     */
    protected $fillable = ['row', 'column', 'title', 'cellData'];
}

