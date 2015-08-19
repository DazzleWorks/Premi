<?php

namespace Premi\Listeners;

use Premi\Model\Slide;
use Premi\Events\ProjectWasCreated;

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
