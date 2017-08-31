<?php namespace App\Models\Catalog\Design;
use App\System\Engine\Model;
class Theme extends Model {
	public function getTheme($route, $theme) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "theme WHERE store_id = '" . (int)$this->config->get('config_store_id') . "' AND theme = '" . $this->db->escape($theme) . "' AND route = '" . $this->db->escape($route) . "'");

		return $query->row;
	}
}