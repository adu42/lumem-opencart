<?php namespace App\Http\Controllers\Catalog\Extension\Analytics;
use App\System\Engine\Controller;
class Google extends Controller {
    public function index() {
		return html_entity_decode($this->config->get('analytics_google_code'), ENT_QUOTES, 'UTF-8');
	}
}
