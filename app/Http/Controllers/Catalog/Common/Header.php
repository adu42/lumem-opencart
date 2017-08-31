<?php namespace App\Http\Controllers\Catalog\Common;
use App\System\Engine\Controller;
class Header extends Controller {
	public function index() {
		// Analytics
		$this->model('setting/extension');
        $this->language('common/header');
		$this->data['analytics'] = array();

		$analytics = $this->model_setting_extension->getExtensions('analytics');

		foreach ($analytics as $analytic) {
			if ($this->config->get('analytics_' . $analytic['code'] . '_status')) {
				$this->data['analytics'][] = $this->load->controller('extension/analytics/' . $analytic['code'], $this->config->get('analytics_' . $analytic['code'] . '_status'));
			}
		}

		

		$this->setFavicon();

		$this->data['title'] = $this->document->getTitle();

		$this->data['base'] = $this->getBaseUrl();
		$this->data['description'] = $this->document->getDescription();
		$this->data['keywords'] = $this->document->getKeywords();
		$this->data['links'] = $this->document->getLinks();
		$this->data['styles'] = $this->document->getStyles();
		$this->data['scripts'] = $this->document->getScripts('header');
		$this->data['lang'] = $this->lang('code');
		$this->data['direction'] = $this->lang('direction');
		$this->data['name'] = $this->config->get('config_name');
		$this->setImagesToData(['logo'=>$this->config->get('config_logo')]);

		// Wishlist
		if ($this->customer->isLogged()) {
			$this->model('account/wishlist');
			$this->data['text_wishlist'] = $this->lang('text_wishlist',$this->model_account_wishlist->getTotalWishlist());
		} else {
			$this->data['text_wishlist'] = $this->lang('text_wishlist',(isset($this->session->data['wishlist']) ? count($this->session->data['wishlist']) : 0));
		}

		$this->data['text_logged'] = $this->lang('text_logged',[$this->link('account/account', '', true),$this->customer->getFirstName(), $this->link('account/logout', '', true)]);
		
		$this->data['home'] = $this->link('common/home');
		$this->data['wishlist'] = $this->link('account/wishlist', '', true);
		$this->data['logged'] = $this->customer->isLogged();
		$this->data['account'] = $this->link('account/account', '', true);
		$this->data['register'] = $this->link('account/register', '', true);
		$this->data['login'] = $this->link('account/login', '', true);
		$this->data['order'] = $this->link('account/order', '', true);
		$this->data['transaction'] = $this->link('account/transaction', '', true);
		$this->data['download'] = $this->link('account/download', '', true);
		$this->data['logout'] = $this->link('account/logout', '', true);
		$this->data['shopping_cart'] = $this->link('checkout/cart');
		$this->data['checkout'] = $this->link('checkout/checkout', '', true);
		$this->data['contact'] = $this->link('information/contact');
		$this->data['telephone'] = $this->config->get('config_telephone');
		
		$this->data['language'] = $this->child('common/language');
		$this->data['currency'] = $this->child('common/currency');
		$this->data['search'] = $this->child('common/search');
		$this->data['cart'] = $this->child('common/cart');
		$this->data['menu'] = $this->child('common/menu');

		return $this->view('common/header');
	}
}
