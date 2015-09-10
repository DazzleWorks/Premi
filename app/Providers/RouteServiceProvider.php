<?php

namespace Premi\Providers;

use Illuminate\Routing\Router;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

/**
 * @file: app/Providers/RouteServiceProvider.php
 * @author: DazzleWorks
 * @date: 2015-06-28
 * @description: This class contains the associations between events and listeners.
 * 
 * +---------+------------+---------------+---------------------------+------------------+
 * | Version |     Date   |  Programmer   |          Modify           |  Description     |
 * +---------+------------+---------------+---------------------------+------------------+
 * |  1.0.0  | 2015-06-28 |Burlin Valerio | class RouteServiceProvider| add link from    | 
 * |         |            |               |                           |ProjectWasCreated |
 * |         |            |               |                           |       and        |
 * |         |            |               |                           |PresentationCreate|
 * |         |            |               |                           |   SlideCreate    |
 * +---------+------------+---------------+---------------------------+------------------+
 */

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to the controller routes in your routes file.
     * In addition, it is set as the URL generator's root namespace.
     * @var string
     */
    protected $namespace = 'Premi\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function boot(Router $router)
    {
        //

        parent::boot($router);
    }

    /**
     * Define the routes for the application.
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function map(Router $router)
    {
        $router->group(['namespace' => $this->namespace], function ($router) {
            require app_path('Http/routes.php');
        });
    }
}
