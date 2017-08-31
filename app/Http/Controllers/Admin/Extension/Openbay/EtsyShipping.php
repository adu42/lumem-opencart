<?php namespace App\Http\Controllers\Admin\Extension\Openbay;
use App\System\Engine\Controller;
class EtsyShipping extends Controller {
	public function getAll() {
		$response = $this->openbay->etsy->call('v1/etsy/product/shipping/getAllTemplates/', 'GET');

		$this->response->addHeader('Content-Type: application/json');
		return $this->response->setOutput(json_encode($response));
	}
}