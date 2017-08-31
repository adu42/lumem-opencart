<?php namespace App\Models\Catalog\Extension\Total;
use App\System\Engine\Model;
class Total extends Model {
	public function getTotal($total) {
		$this->load->language('extension/total/total');

		$total['totals'][] = array(
			'code'       => 'total',
			'title'      => $this->language->get('text_total'),
			'value'      => max(0, $total['total']),
			'sort_order' => $this->config->get('total_total_sort_order')
		);
	}
}