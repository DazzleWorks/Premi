<?php

namespace Premi\Listeners;

use Premi\Model\Presentation;
use Premi\Events\ProjectWasCreated;

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
