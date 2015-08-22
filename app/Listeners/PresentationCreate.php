<?php

namespace Premi\Listeners;

use Premi\Model\Presentation;
use Premi\Events\ProjectWasCreated;

/**
 * @file: app/Listeners/PresentationCreate.php
 * @author: DazzleWorks
 * @date: 2015-06-29
 * @description: This class contains the logic to handle the event that has invoked, 
 *               creating a new presentation.
 *
 * +---------+------------+---------------+-------------------------+-------------+
 * | Version |     Date   |  Programmer   |        Modify           | Description |
 * +---------+------------+---------------+-------------------------+-------------+
 * |  1.0.0  | 2015-06-29 |Burlin Valerio |class PresentationCreate |create class |
 * |         |            |               |                         |and function |
 * |         |            |               |                         |   handle    |
 * +---------+------------+---------------+-------------------------+-------------+
 */

class PresentationCreate
{
    /**
     * Handle the event.
     * @param  ProjectWasCreated  $event
     * @return void
     */
    public function handle(ProjectWasCreated $event)
    {
        $name = $event->project->name;
        $presentation = new Presentation(['title' => $name,
                                          'theme' => 'sky',
                                          'transition' => 'none']);
        $event->project->presentation()->save($presentation);
    }
}
