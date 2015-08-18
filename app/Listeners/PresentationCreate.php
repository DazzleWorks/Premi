<?php

namespace Premi\Listeners;

use Premi\Model\Presentation;
use Premi\Events\ProjectWasCreated;

class PresentationCreate
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
        $name = $event->project->name;
        $presentation = new Presentation(['title' => $name]);
        $event->project->presentation()->save($presentation);
    }
}
