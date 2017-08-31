<?php namespace App\System\Library;
/**
 * @package		OpenCart
 * @author		Daniel Kerr
 * @copyright	Copyright (c) 2005 - 2017, OpenCart, Ltd. (https://www.opencart.com/)
 * @license		https://opensource.org/licenses/GPL-3.0
 * @link		https://www.opencart.com
*/
use App\System\Library\Cache\APC;
use App\System\Library\Cache\File;
use App\System\Library\Cache\Mem;
use App\System\Library\Cache\Memcached;
use App\System\Library\Cache\Redis;
/**
* Cache class
*/
class Cache {
	private $adaptor;
	
	/**
	 * Constructor
	 *
	 * @param	string	$adaptor	The type of storage for the cache.
	 * @param	int		$expire		Optional parameters
	 *
 	*/
	public function __construct($adaptor, $expire = 3600) {
        $error = false;
        $_adaptor = strtolower($adaptor);
        switch($_adaptor):
            case 'file':
                $this->adaptor = new File($expire);
                break;
            case 'mem':
                $this->adaptor = new Mem($expire);
                break;
            case 'memcached':
                $this->adaptor = new Memcached($expire);
                break;
            case 'apc':
                $this->adaptor = new APC($expire);
                break;
            case 'redis':
                $this->adaptor = new Redis($expire);
                break;
            default:
                $error = true;
                break;
        endswitch;

        if ($error) {
            throw new \Exception('Error: Could not load cache adaptor ' . $adaptor . ' cache!');
        }
	}
	
    /**
     * Gets a cache by key name.
     *
     * @param	string $key	The cache key name
     *
     * @return	string
     */
	public function get($key) {
		return $this->adaptor->get($key);
	}
	
    /**
     * 
     *
     * @param	string	$key	The cache key
	 * @param	string	$value	The cache value
	 * 
	 * @return	string
     */
	public function set($key, $value) {
		return $this->adaptor->set($key, $value);
	}
   
    /**
     * 
     *
     * @param	string	$key	The cache key
     */
	public function delete($key) {
		return $this->adaptor->delete($key);
	}
}
