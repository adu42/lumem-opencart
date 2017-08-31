<?php namespace App\System\Engine;
/**
 * @package		OpenCart
 * @author		Daniel Kerr
 * @copyright	Copyright (c) 2005 - 2017, OpenCart, Ltd. (https://www.opencart.com/)
 * @license		https://opensource.org/licenses/GPL-3.0
 * @link		https://www.opencart.com
*/

/**
* Action class
*/
class Action {
	private $id;
	private $route;
	private $method = 'index';
	
	/**
	 * Constructor
	 *
	 * @param	string	$route
 	*/
	public function __construct($route) {
		$this->id = $route;
		
		$parts = explode('/', preg_replace('/[^a-zA-Z0-9_\/]/', '', (string)$route));

		// Break apart the route
		while ($parts) {
		    $class = $this->getControllerClass(implode('/', $parts));
           // echo $class.'==='.PHP_EOL;
			if (class_exists($class)) {
				$this->route = implode('/', $parts);
				break;
			} else {
				$this->method = array_pop($parts);
			}
		}
	}

	/**
	 * 
	 *
	 * @return	string
	 *
 	*/	
	public function getId() {
		return $this->id;
	}
	
	/**
	 * 
	 *
	 * @param	object	$registry
	 * @param	array	$args
 	*/	
	public function execute($registry, array $args = array()) {
		// Stop any magical methods being called
		if (substr($this->method, 0, 2) == '__') {
			return new \Exception('Error: Calls to magic methods are not allowed!');
		}

	//	$file  = DIR_APPLICATION . 'controller/' . $this->route . '.php';
	//	$class = 'Controller' . preg_replace('/[^a-zA-Z0-9]/', '', $this->route);
      //  echo $this->route.'==='.PHP_EOL;
        $class = $this->getControllerClass($this->route);


            if(class_exists($class)){
                $controller = new $class($registry);
            }else{
                return new \Exception('Error: Could not exists ' .$class . '!');
            }

		$reflection = new \ReflectionClass($class);
		
		if ($reflection->hasMethod($this->method) && $reflection->getMethod($this->method)->getNumberOfRequiredParameters() <= count($args)) {
			return call_user_func_array(array($controller, $this->method), $args);
		} else {
			return new \Exception('Error: Could not call ' . $this->route . '/' . $this->method . '!');
		}
	}

	public function getControllerClass($route){
        $application = SUB_SYSTEM;
        // $route = preg_replace('/[^a-zA-Z0-9_\/]/', '', (string)$route);
        $class = '';
        $_alias = explode('/',$route);
        //首字母大写
        $_alias = array_map(function($item){
            $_words = explode('_',$item);
            foreach ($_words as &$word){
                $word = ucfirst($word);
            }
            return implode('',$_words);
        },$_alias);

        return $class = 'App\Http\Controllers\\'.ucfirst($application).'\\'.implode('\\',$_alias);
    }
}
