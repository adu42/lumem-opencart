<?php namespace App\Http\Controllers\Admin\Startup;
use App\System\Engine\Controller;
use App\System\Library\Scssc;
class Sass extends Controller {
	public function index() {
		// include_once(DIR_STORAGE . 'vendor/scss.inc.php');
		
		$file = DIR_ASSETS . 'stylesheet/bootstrap.css';

		if (!is_file($file) || !$this->config->get('developer_sass')) {
			$scss = new Scssc();
			$scss->setImportPaths(DIR_ASSETS . 'stylesheet/sass/');

			$output = $scss->compile('@import "_bootstrap.scss"');

			$handle = fopen($file, 'w');

			flock($handle, LOCK_EX);

			fwrite($handle, $output);

			fflush($handle);

			flock($handle, LOCK_UN);

			fclose($handle);
		}
	}
}
