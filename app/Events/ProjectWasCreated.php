<?php

namespace Premi\Events;

use Premi\Events\Event;
use Premi\Model\Project;
use Illuminate\Queue\SerializesModels;

/**
 * @file: app/Events/ProjectWasCreated.php
 * @author: DazzleWorks
 * @date: 2015-06-28
 * @description: This class is responsible for creating an instance of the event 
 *               launched.
 *
 * +---------+------------+---------------+-----------------------+-------------+
 * | Version |     Date   |  Programmer   |        Modify         | Description |
 * +---------+------------+---------------+-----------------------+-------------+
 * |  1.0.0  | 2015-06-28 |Burlin Valerio |class ProjectWasCreated|create class |
 * |         |            |               |                       |and function |
 * |         |            |               |                       | __construct |
 * +---------+------------+---------------+-----------------------+-------------+
*/

class ProjectWasCreated extends Event
{
    use SerializesModels;

    public $project;
    
    /**
     * Create a new event instance.
     * @param Project $project: the project which raise the event
     * @return void
     */
    public function __construct(Project $project)
    {
        $this->project = $project;
    }
}
