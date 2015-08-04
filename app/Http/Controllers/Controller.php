<?php

namespace Premi\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;

/**
 * @file: app/Http/Controller/Controller.php
 * @author: DazzleWorks
 * @date: 2015-07-15
 * @description: This abstract class is the basis of other controller.
 *
 * +---------+------------+----------------------------------+-----------------+
 * | Version |     Date   |  Programmer   |     Modify       |  Description    |
 * +---------+------------+---------------+------------------+-----------------+
 * |  1.0.0  | 2015-06-20 |Burlin Valerio | class Controller | create the      |
 * |         |            |               |                  | abstract class  |
 * +---------+------------+---------------+------------------+-----------------+
 */
abstract class Controller extends BaseController
{
    use DispatchesJobs, ValidatesRequests;
}
