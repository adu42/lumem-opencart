<?php namespace App\Http\Controllers\Admin\Extension\Openbay;
use App\System\Engine\Controller;
class EtsyShop extends Controller {
	public function getSections() {
		$response = $this->openbay->etsy->call('v1/etsy/shop/getSections/', 'GET');

		$this->response->addHeader('Content-Type: application/json');
		return $this->response->setOutput(json_encode($response));
	}
}