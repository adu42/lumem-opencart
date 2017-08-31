<?php namespace App\System\Engine;
/**
 * @package		OpenCart
 * @author		Daniel Kerr
 * @copyright	Copyright (c) 2005 - 2017, OpenCart, Ltd. (https://www.opencart.com/)
 * @license		https://opensource.org/licenses/GPL-3.0
 * @link		https://www.opencart.com
*/
use App\System\Library\Openbay;
use App\System\Library\Cache;
use App\System\Library\Config;
use App\System\Library\Document;
use App\System\Library\DB;
use App\System\Library\Encryption;
use App\System\Library\Image;
use App\System\Library\Language;
use App\System\Library\Log;
use App\System\Library\Mail;
use App\System\Library\Pagination;
use App\System\Library\Request;
use App\System\Library\Response;
use App\System\Library\Session;
use App\System\Library\Squareup;
use App\System\Library\Template;
use App\System\Library\Url;


/**
* Loader class
*/
final class Loader {
	protected $registry;

	/**
	 * Constructor
	 *
	 * @param	object	$registry
 	*/
	public function __construct($registry) {
		$this->registry = $registry;
	}

	/**
	 * 
	 *
	 * @param	string	$route
	 * @param	array	$data
	 *
	 * @return	mixed
 	*/	
	public function controller($route, $data = array()) {
		// Sanitize the call
		$route = preg_replace('/[^a-zA-Z0-9_\/]/', '', (string)$route);
		
		// Keep the original trigger
		$trigger = $route;
		
		// Trigger the pre events
		$result = $this->registry->get('event')->trigger('controller/' . $trigger . '/before', array(&$route, &$data));
		
		// Make sure its only the last event that returns an output if required.
		if ($result != null && !$result instanceof \Exception) {
			$output = $result;
		} else {
			$action = new Action($route);
			$output = $action->execute($this->registry, array(&$data));
		}
		
		// Trigger the post events
		$result = $this->registry->get('event')->trigger('controller/' . $trigger . '/after', array(&$route, &$data, &$output));
		
		if ($result && !$result instanceof \Exception) {
			$output = $result;
		}

		if (!$output instanceof \Exception) {
			return $output;
		}
	}

	/**
	 * 初始执行预先构造 _construct
     * 在更新系统配置的时候比较有效
	 * @param	string	$route
 	*/	
	public function model($route,$share = true) {
		// Sanitize the call

        list($class,$alias) = $this->getModelAndAlias($route);

        if($share && $this->registry->has($alias))return true;

        try{
            $proxy = new Proxy();
            // Overriding models is a little harder so we have to use PHP's magic methods
            // In future version we can use runkit
            if(empty($class))return false;

            foreach (get_class_methods($class) as $method) {
                $proxy->{$method} = $this->callback($this->registry, $route . '/' . $method);
                if($method=='_construct'){
                    $proxy->_construct($this->registry);
                }
            }
            $this->registry->set($alias, $proxy);
        }catch (\Exception $e){
            throw new \Exception('Error: Could not load model ' . $route . '!');
        }
	}

    /**
     * 整理别名，model首字母大写不带_ |view全小写带_
     * @param $route
     * @param bool $caseUpper
     * @return array
     */
	protected function splitRoute($route,$caseUpper=true){
        $_alias = explode('/',$route);
        //首字母大写
        $_alias = array_map(function($item) use ($caseUpper){
            $_words = explode('_',$item);
            foreach ($_words as &$word){
                if($caseUpper){
                    $word = ucfirst($word);
                }else{
                    $word = strtolower($word);
                }
            }
            return ($caseUpper)?implode('',$_words):implode('_',$_words);
        },$_alias);
        return $_alias;
    }


    /**
     *  use App\Models\
     *  model class 和别名
     * @param $route
     * @return mixed|string
     */
	protected function getModelAndAlias($route){
       // $application = $this->registry->get('config')->get('application');
       // $route = preg_replace('/[^a-zA-Z0-9_\/]/', '', (string)$route);
        $class = '';
        $_alias = $this->splitRoute($route);
        $first = $_alias[0];

        /*
        $this->logger = new Log('loader.log');
        $this->logger->write($route);
        $this->logger->write($_alias);
        $this->logger->write(IS_ADMIN);
        */
        if(($first=='Admin'||$first=='Front'))array_shift($_alias);

        if(IS_ADMIN||$first=='Admin'){
            $class = 'App\Models\Admin\\'.implode('\\',$_alias);
        }else{
            $class = 'App\Models\Catalog\\'.implode('\\',$_alias);
        }
        $alias = 'model_' . str_replace('/', '_', (string)$route);
      //  $this->logger->write($class);
        return [$class,$alias];
    }

	/**
	 * 
	 *
	 * @param	string	$route
	 * @param	array	$data
	 *
	 * @return	string
 	*/
	public function view($route, $data = array()) {
		// Sanitize the call
		$route = preg_replace('/[^a-zA-Z0-9_\/]/', '', (string)$route);
		
		// Keep the original trigger
		$trigger = $route;
		
		// Template contents. Not the output!
		$template = '';
		
		// Trigger the pre events
		$result = $this->registry->get('event')->trigger('view/' . $trigger . '/before', array(&$route, &$data, &$template));
		
		// Make sure its only the last event that returns an output if required.
		if ($result && !$result instanceof Exception) {
			$output = $result;
		} else {

			$template = new Template($this->registry->get('config')->get('template_engine'));
				
			foreach ($data as $key => $value) {
				$template->set($key, $value);
			}

			$output = $template->render($this->getViewPath($route), $this->registry->get('config')->get('template_cache'));
		}
		
		// Trigger the post events
		$result = $this->registry->get('event')->trigger('view/' . $trigger . '/after', array(&$route, &$data, &$output));
		
		if ($result && !$result instanceof \Exception) {
			$output = $result;
		}
		
		return $output;
	}




    /**
     * 获取视图目录位置
     * @param $route
     * @return string
     */
	protected function getViewPath($route){
        $_alias = $this->splitRoute($route,false);
        $templatePath = $this->registry->get('config')->get('template_directory');

        if(IS_ADMIN){
            $templatePath .= 'admin/'.implode('/',$_alias);
        }else{
            $theme = $this->registry->get('config')->get('theme')?$this->registry->get('config')->get('theme'):'default';
            $templatePath .= 'theme/'.$theme.'/'.implode('/',$_alias);
        }
        return $templatePath;
    }

	/**
	 * 
	 * public
	 * @param	string	$route
 	*/

	public function library($route) {
		// Sanitize the call
        //echo $this->registry->get('config')->get('application').PHP_EOL;
        $class = $route;
        try{
			$this->registry->set($this->getAlias($route), new $class($this->registry));
		} catch (\Exception $e) {
			throw new \Exception('Error: Could not load library ' . $route . '!');
		}
	}

    /**
     * library alias name:as
     *  library  (1 default)
     *  subdir_library  (2)
     *  library_as  (3)
     *
     * @param $class
     * @return mixed|string
     */
	protected function getAlias($class){
	    $_alias = explode('\\',$class);
        $alias = array_pop($_alias);
        $second='as';
	    if($this->registry->has($alias)){
            if(count($_alias))
                $second = array_pop($_alias);
            $alias = '_'.$second;
        }
        return $alias;
    }

	/**
	 * 
	 *
	 * @param	string	$route
 	*/	
	public function helper($route) {
        $route = ucfirst($route);
		$file = DIR_SYSTEM . 'Helper/' . preg_replace('/[^a-zA-Z0-9_\/]/', '', (string)$route) . '.php';

		if (is_file($file)) {
			include_once($file);
		} else {
			throw new \Exception('Error: Could not load helper ' . $route . '!');
		}
	}

	/**
	 * 
	 *
	 * @param	string	$route
 	*/	
	public function config($route) {
		$this->registry->get('event')->trigger('config/' . $route . '/before', array(&$route));
		$this->registry->get('config')->load($route);
		$this->registry->get('event')->trigger('config/' . $route . '/after', array(&$route));
	}

	/**
	 * 
	 *
	 * @param	string	$route
	 * @param	string	$key
	 *
	 * @return	array
 	*/
	public function language($route, $key = '') {
		// Sanitize the call
		$route = preg_replace('/[^a-zA-Z0-9_\/]/', '', (string)$route);
		
		// Keep the original trigger
		$trigger = $route;
				
		$result = $this->registry->get('event')->trigger('language/' . $trigger . '/before', array(&$route, &$key));
		
		if ($result && !$result instanceof \Exception) {
			$output = $result;
		} else {
			$output = $this->registry->get('language')->load($route, $key);
		}
		
		$result = $this->registry->get('event')->trigger('language/' . $trigger . '/after', array(&$route, &$key, &$output));
		
		if ($result && !$result instanceof \Exception) {
			$output = $result;
		}
				
		return $output;
	}
	
	protected function callback($registry, $route) {
		return function($args) use($registry, $route) {
			static $model;
			
			$route = preg_replace('/[^a-zA-Z0-9_\/]/', '', (string)$route);

			// Keep the original trigger
			$trigger = $route;
					
			// Trigger the pre events
			$result = $registry->get('event')->trigger('model/' . $trigger . '/before', array(&$route, &$args));
			
			if ($result && !$result instanceof \Exception) {
				$output = $result;
			} else {
			//	$class = 'Model' . preg_replace('/[^a-zA-Z0-9]/', '', substr($route, 0, strrpos($route, '/')));
               list($class,$alias)  = $this->getModelAndAlias(substr($route, 0, strrpos($route, '/')));
               if(empty($class))return '';
				// Store the model object
				$key = substr($route, 0, strrpos($route, '/'));
				
				if (!isset($model[$key])) {
					$model[$key] = new $class($registry);
				}
				
				$method = substr($route, strrpos($route, '/') + 1);
				
				$callable = array($model[$key], $method);
	
				if (is_callable($callable)) {
					$output = call_user_func_array($callable, $args);
				} else {
					throw new \Exception('Error: Could not call model/' . $route . '!');
				}					
			}
			
			// Trigger the post events
			$result = $registry->get('event')->trigger('model/' . $trigger . '/after', array(&$route, &$args, &$output));
			
			if ($result && !$result instanceof \Exception) {
				$output = $result;
			}
						
			return $output;
		};
	}	
}