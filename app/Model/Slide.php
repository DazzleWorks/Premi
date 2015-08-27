<?php

namespace Premi\Model;

use Jenssegers\Mongodb\Model as Eloquent;
use Premi\Model\Component;
use Premi\Model\Text;
use Premi\Model\Image;

/**
 * @file: app/Model/Slide.php
 * @author: DazzleWorks
 * @date: 2015-06-23
 * @description: This class stores slide data that is retrieved by the slide 
 * controller.
 * 
 * +---------+------------+----------------+--------------+--------------+ 
 * | Version |    Date    |   Programmer   |    Modify    | Description  |
 * +---------+------------+----------------+--------------+--------------+
 * |  0.1.0  | 2015-06-23 | Burlin Valerio | class Slide  | create class | 
 * |         |            |                |              | and function |
 * |         |            |                |              | components() | 
 * +---------+------------+----------------+--------------+--------------+
 * |  1.0.0  | 2015-06-27 | Burlin Valerio | class Slide  |    create    |
 * |         |            |                |              |functions for |
 * |         |            |                |              |  update and  |   
 * |         |            |                |              |    delete    |
 * |         |            |                |              |  compoents   |
 * +---------+------------+----------------+--------------+--------------+ 
 */
class Slide extends Eloquent 
{
    /**
     * indicates if the model should be timestamped
     * @var {boolean}
     * @public
     */
    public $timestamps = false;
    
    /**
     * the attributes that are mass assignable
     * @var array
     * @protected
     * @xIndex: position of the Slide relative to the axis X in the 
     *          presentation's matrix
     * @yIndex: position of the Slide relative to the axis Y in the 
     *          presentation's matrix
     */
    protected $fillable = ['xIndex', 'yIndex', 'background', 'svg'];
     
    
    /**
     * Allows to have embedded Component in a Slide
     * @return array
     */
    public function components() {
        return $this->embedsMany(Component::class);
    }
    
    /**
     * Delete old components of a Slide before update it
     * @param Slide $slide
     * @return void
     */
    public static function deleteOldComponents($slide)
    {
        $components = $slide->components()->all();
        
        foreach($components as $component)
        {
            $component->delete();
        }
    }
    
    /**
     * Update a Slide with new components 
     * @param Slide $slide
     * @param Component[] $components
     * @return void
     */
    public static function updateNewComponents($slide,$components)
    {
        foreach($components as $component)
        {
            $type = $component['type'];
            switch ($type) {
                case "text":
                    $newText = new Text($component);
                    $slide->components()->save($newText);
                    break;
                case "image":
                    $newImage = new Image($component);
                    $slide->components()->save($newImage);
                    break;
            }
        }
    }
    
    public static function getComponentsBySlide($slide) 
    {
        $data = (['slideID' => $slide->_id,
                  'components' => $slide->components,
                  'xIndex' => $slide->xIndex,
                  'yIndex' => $slide->yIndex]);
        
        return $data;
    }
    
    public static function getSVGBySlides($slide) 
    {
        $data = (['svg' => $slide->svg,
                  'xIndex' => $slide->xIndex,
                  'yIndex' => $slide->yIndex]);
        
        return $data;
    }
}

