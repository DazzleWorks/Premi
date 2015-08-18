<?php

namespace Premi\Events;

use Premi\Events\Event;
use Premi\Model\Project;
use Illuminate\Queue\SerializesModels;

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
