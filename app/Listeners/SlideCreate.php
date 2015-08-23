<?php

namespace Premi\Listeners;

use Premi\Model\Slide;
use Premi\Events\ProjectWasCreated;

/**
 * @file: app/Listeners/SlideCreate.php
 * @author: DazzleWorks
 * @date: 2015-06-29
 * @description: This class contains the logic to handle the event that has 
 *               invoked, creating a new slide.
 *
 * +---------+------------+---------------+------------------+-------------+
 * | Version |     Date   |  Programmer   |      Modify      | Description |
 * +---------+------------+---------------+------------------+-------------+
 * |  1.0.0  | 2015-06-29 |Burlin Valerio |class SlideCreate |create class |
 * |         |            |               |                  |and function |
 * |         |            |               |                  |   handle    |
 * +---------+------------+---------------+------------------+-------------+
 */

class SlideCreate
{
    /**
     * Handle the event.
     * @param  ProjectWasCreated  $event
     * @return void
     */
    public function handle(ProjectWasCreated $event)
    {
        $presentation = $event->project->presentation()->get();
        $slide = new Slide(['xIndex' => 1, 
                            'yIndex' => 1, 
                            'svg' => null,
                            'background' => '']);
        $presentation->slides()->save($slide);
    }
}
