<?php namespace App\Models\Catalog\Setting;
use App\System\Engine\Model;
class Event extends Model {
	function getEvents() {
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "event` WHERE `trigger` LIKE 'catalog/%' AND status = '1' ORDER BY `sort_order` ASC");

		return $query->rows;
	}
}