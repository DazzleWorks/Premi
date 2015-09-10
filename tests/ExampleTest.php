<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ExampleTest extends TestCase
{
    use WithoutMiddleware;
    
    /**
     * A basic functional test example
     * @return void
     */
    public function testBasicUsername()
    {
        $this->get('api/user/valexbrl', ['username' => 'valexbrl'])
             ->seeJson([
                 'created' => true,
             ]);
    }
}
