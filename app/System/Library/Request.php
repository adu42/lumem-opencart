<?php namespace App\System\Library;
/**
 * @package		OpenCart
 * @author		Daniel Kerr
 * @copyright	Copyright (c) 2005 - 2017, OpenCart, Ltd. (https://www.opencart.com/)
 * @license		https://opensource.org/licenses/GPL-3.0
 * @link		https://www.opencart.com
*/

/**
* Request class
*/
class Request {
	public $get = array();
	public $post = array();
	public $cookie = array();
	public $files = array();
	public $server = array();
	
	/**
	 * Constructor
 	*/
	public function __construct() {
		$this->get = $this->clean($_GET);
		$this->post = $this->clean($_POST);
		$this->request = $this->clean($_REQUEST);
		$this->cookie = $this->clean($_COOKIE);
		$this->files = $this->clean($_FILES);
		$this->server = $this->clean($_SERVER);
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
        $methods = ['get','post','request','cookie','files','server'];
        if(in_array($name,$methods)){
            return isset($this->$name[$arguments[0]])? $this->$name[$arguments[0]]:(isset($arguments[1])?$arguments[1]:null);
        }
        return null;
    }

    /**
     * 
	 * @param	array	$data
	 *
     * @return	array
     */
	public function clean($data) {
		if (is_array($data)) {
			foreach ($data as $key => $value) {
				unset($data[$key]);

				$data[$this->clean($key)] = $this->clean($value);
			}
		} else {
			$data = htmlspecialchars($data, ENT_COMPAT, 'UTF-8');
		}

		return $data;
	}
}