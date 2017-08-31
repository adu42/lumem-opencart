<?php namespace App\System\Library;
/**
 * @package		OpenCart
 * @author		Daniel Kerr
 * @copyright	Copyright (c) 2005 - 2017, OpenCart, Ltd. (https://www.opencart.com/)
 * @license		https://opensource.org/licenses/GPL-3.0
 * @link		https://www.opencart.com
*/
use App\System\Library\Session\DB as SessionDB;
use App\System\Library\Session\File;
/**
* Session class
*/
class Session {
	protected $adaptor;
	protected $session_id;
	public $data = array();

	/**
	 * Constructor
	 *
	 * @param	string	$adaptor
	 * @param	object	$registry
 	*/
	public function __construct($adaptor, $registry = '') {
		    $error = false;
        $adaptor = strtolower($adaptor);
        switch($adaptor):
            case 'file':
                $this->adaptor = new File($registry);
                break;
            case 'db':
                $this->adaptor = new SessionDB($registry);
                break;
            default:
                $error = true;
                break;
        endswitch;
        register_shutdown_function(array($this, 'close'));
        if ($error) {
            throw new \Exception('Error: Could not load database adaptor ' . $adaptor . '!');
        }
	}

    /**
     * 可是获取默认值
     * 减负做法 opencart写法太累赘
     * @param $name
     * @param $arguments
     * @return null
     */
    public function __call($name, $arguments)
    {
        $name = strtolower($name);
        $methods = ['get','data'];
        if(in_array($name,$methods)){
            return isset($this->$name[$arguments[0]])? $this->$name[$arguments[0]]:(isset($arguments[1])?$arguments[1]:null);
        }
        return null;
    }
	
	/**
	 * 
	 *
	 * @return	string
 	*/	
	public function getId() {
		return $this->session_id;
	}

	/**
	 *
	 *
	 * @param	string	$session_id
	 *
	 * @return	string
 	*/	
	public function start($session_id = '') {
		if (!$session_id) {
			if (function_exists('random_bytes')) {
				$session_id = substr(bin2hex(random_bytes(26)), 0, 26);
			} else {
				$session_id = substr(bin2hex(openssl_random_pseudo_bytes(26)), 0, 26);
			}
		}

		if (preg_match('/^[a-zA-Z0-9,\-]{22,52}$/', $session_id)) {
			$this->session_id = $session_id;
		} else {
		  throw new \Exception('Error: Invalid session ID!');
		  //exit('Error: Invalid session ID!');
		}
		
		$this->data = $this->adaptor->read($session_id);
		
		return $session_id;
	}
	
	/**
	 * 
 	*/
	public function close() {
		$this->adaptor->write($this->session_id, $this->data);
	}
	
	/**
	 * 
 	*/	
	public function __destroy() {
		$this->adaptor->destroy($this->session_id);
	}
}
