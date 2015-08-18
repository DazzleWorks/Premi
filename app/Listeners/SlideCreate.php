<?php

namespace Premi\Listeners;

use Premi\Model\Slide;
use Premi\Events\ProjectWasCreated;

class SlideCreate
{
    /**
     * Create the event listener.
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     * @param  ProjectWasCreated  $event
     * @return void
     */
    public function handle(ProjectWasCreated $event)
    {
        $presentation = $event->project->presentation()->get();
        $slide = new Slide(['xIndex' => 1, 'yIndex' => 1, 'svg' => null]);
        $presentation->slides()->save($slide);
    }
}
