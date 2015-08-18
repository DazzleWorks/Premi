<?php

namespace Premi\Listeners;

use Premi\Events\ProjectWasCreated;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

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
        //$slide = new Slide(['xIndex' => 1, 'yIndex' => 1]);
        $presentation = $event->project->presentation()->get();
        $presentation->slides()->create(array('xIndex' => 1, 'yIndex' => 1, 'svg' => null));
    }
}
