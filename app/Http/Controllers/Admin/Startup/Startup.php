<?php namespace App\Http\Controllers\Admin\Startup;
use App\System\Engine\Controller;
use App\System\Library\Language;
use App\System\Library\Cart\Customer;
use App\System\Library\Cart\Currency;
use App\System\Library\Cart\Tax;
use App\System\Library\Cart\Weight;
use App\System\Library\Cart\Length;
use App\System\Library\Cart\Cart;
use App\System\Library\Encryption;
use App\System\Library\Openbay;
class Startup extends Controller {
	public function index() {
		// Settings
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "setting WHERE store_id = '0'");
		
		foreach ($query->rows as $setting) {
			if (!$setting['serialized']) {
				$this->config->set($setting['key'], $setting['value']);
			} else {
				$this->config->set($setting['key'], json_decode($setting['value'], true));
			}
		}

		// Theme
		$this->config->set('template_cache', $this->config->get('developer_theme'));
				
		// Language
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "language` WHERE code = '" . $this->db->escape($this->config->get('config_admin_language')) . "'");
		
		if ($query->num_rows) {
			$this->config->set('config_language_id', $query->row['language_id']);
		}
		
		// Language
		$language = new Language($this->config->get('config_admin_language'));
		$language->load($this->config->get('config_admin_language'));
		$this->registry->set('language', $language);
		
		// Customer
		$this->registry->set('customer', new Customer($this->registry));

		// Currency
		$this->registry->set('currency', new Currency($this->registry));
	
		// Tax
		$this->registry->set('tax', new Tax($this->registry));
		
		if ($this->config->get('config_tax_default') == 'shipping') {
			$this->tax->setShippingAddress($this->config->get('config_country_id'), $this->config->get('config_zone_id'));
		}

		if ($this->config->get('config_tax_default') == 'payment') {
			$this->tax->setPaymentAddress($this->config->get('config_country_id'), $this->config->get('config_zone_id'));
		}

		$this->tax->setStoreAddress($this->config->get('config_country_id'), $this->config->get('config_zone_id'));

		// Weight
		$this->registry->set('weight', new Weight($this->registry));
		
		// Length
		$this->registry->set('length', new Length($this->registry));
		
		// Cart
		$this->registry->set('cart', new Cart($this->registry));
		
		// Encryption
		$this->registry->set('encryption', new Encryption($this->config->get('config_encryption')));
		
		// OpenBay Pro
		$this->registry->set('openbay', new Openbay($this->registry));
	}
}