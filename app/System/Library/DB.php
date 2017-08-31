<?php namespace App\System\Library;
/**
 * @package		OpenCart
 * @author		Daniel Kerr
 * @copyright	Copyright (c) 2005 - 2017, OpenCart, Ltd. (https://www.opencart.com/)
 * @license		https://opensource.org/licenses/GPL-3.0
 * @link		https://www.opencart.com
*/
use App\System\Library\DB\Mpdo;
use App\System\Library\DB\MySQLi;
use App\System\Library\DB\MySQL;
use App\System\Library\DB\MSSQL;
use App\System\Library\DB\Postgre;
/**
* DB class
*/
class DB {
	private $adaptor;

	private $adaptor_type = ['Mpdo','MySQLi','MySQL','MSSQL','Postgre'];

	/**
	 * Constructor
	 *
	 * @param	string	$adaptor
	 * @param	string	$hostname
	 * @param	string	$username
     * @param	string	$password
	 * @param	string	$database
	 * @param	int		$port
	 *
 	*/
	public function __construct($adaptor, $hostname, $username, $password, $database, $port = NULL) {

        $error = false;
        $_adaptor = strtolower($adaptor);
        switch($_adaptor):
            case 'mpdo':
                $this->adaptor = new Mpdo($hostname, $username, $password, $database, $port);
                break;
            case 'mysqli':
                $this->adaptor = new MySQLi($hostname, $username, $password, $database, $port);
                break;
            case 'mysql':
                $this->adaptor = new MySQL($hostname, $username, $password, $database, $port);
                break;
            case 'mssql':
                $this->adaptor = new MSSQL($hostname, $username, $password, $database, $port);
                break;
            case 'postgre':
                $this->adaptor = new Postgre($hostname, $username, $password, $database, $port);
                break;
            default:
                $error = true;
                break;
         endswitch;

		if ($error) {
			throw new \Exception('Error: Could not load database adaptor ' . $adaptor . '!');
		}
	}

	/**
     * 
     *
     * @param	string	$sql
	 * 
	 * @return	array
     */
	public function query($sql) {
		return $this->adaptor->query($sql);
	}

	/**
     * 
     *
     * @param	string	$value
	 * 
	 * @return	string
     */
	public function escape($value) {
		return $this->adaptor->escape($value);
	}

	/**
     * 
	 * 
	 * @return	int
     */
	public function countAffected() {
		return $this->adaptor->countAffected();
	}

	/**
     * 
	 * 
	 * @return	int
     */
	public function getLastId() {
		return $this->adaptor->getLastId();
	}
	
	/**
     * 
	 * 
	 * @return	bool
     */	
	public function connected() {
		return $this->adaptor->connected();
	}
}