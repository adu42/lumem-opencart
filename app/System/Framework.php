<?php
namespace App\System;
use App\System\Engine\Registry;
use App\System\Library\Config;
use App\System\Library\Log;
use App\System\Engine\Event;
use App\System\Engine\Loader;
use App\System\Library\Request;
use App\System\Library\Response;
use App\System\Engine\Controller;
use App\System\Engine\Model;
use App\System\Engine\Router;
use App\System\Engine\Action;
use App\System\Library\DB;
use App\System\Library\Session;
use App\System\Library\Cache;
use App\System\Library\Language;
use App\System\Library\Openbay;
use App\System\Library\Document;
use App\System\Library\Url;
// Registry
$registry = new Registry();
/*
 * $application_config 在 Startup.php 中声明
 */
// Config
$config = new Config();
$config->load('default');
$config->load($application_config);
$config->set('application',$application_config);
$registry->set('config', $config);

// Log
$log = new Log($config->get('error_filename'));

$registry->set('log', $log);

date_default_timezone_set($config->get('date_timezone'));


/**
 * $error_handler 在 System/helper/General.php中声明
 */
set_error_handler($error_handler);

// Event
$event = new Event($registry);
$registry->set('event', $event);

// Event Register
if ($config->has('action_event')) {
	foreach ($config->get('action_event') as $key => $value) {
		foreach ($value as $priority => $action) {
			$event->register($key, new Action($action), $priority);
		}
	}
}

// Loader
$loader = new Loader($registry);
$registry->set('load', $loader);

// Request
$registry->set('request', new Request());

// Response
$response = new Response();
$response->addHeader('Content-Type: text/html; charset=utf-8');
$response->setCompression($config->get('config_compression'));
$registry->set('response', $response);

// Database
if ($config->get('db_autostart')) {
	$registry->set('db', new DB($config->get('db_engine'), $config->get('db_hostname'), $config->get('db_username'), $config->get('db_password'), $config->get('db_database'), $config->get('db_port')));
}

// Session
$session = new Session($config->get('session_engine'), $registry);
$registry->set('session', $session);

if ($config->get('session_autostart')) {
	/*
	We are adding the session cookie outside of the session class as I believe
	PHP messed up in a big way handling sessions. Why in the hell is it so hard to
	have more than one concurrent session using cookies!

	Is it not better to have multiple cookies when accessing parts of the system
	that requires different cookie sessions for security reasons.

	Also cookies can be accessed via the URL parameters. So why force only one cookie
	for all sessions!
	*/

	if (isset($_COOKIE[$config->get('session_name')])) {
		$session_id = $_COOKIE[$config->get('session_name')];
	} else {
		$session_id = '';
	}

	$session->start($session_id);

	setcookie($config->get('session_name'), $session->getId(), ini_get('session.cookie_lifetime'), ini_get('session.cookie_path'), ini_get('session.cookie_domain'));
}

// Cache
$registry->set('cache', new Cache($config->get('cache_engine'), $config->get('cache_expire')));

// OpenBay Pro
$registry->set('openbay', new Openbay($registry));

// Config Autoload
if ($config->has('config_autoload')) {
	foreach ($config->get('config_autoload') as $value) {
		$loader->config($value);
	}
}

// Url
if ($config->get('url_autostart')) {
    $registry->set('url', new Url($config->get('site_url'), $config->get('site_ssl')));
}

// Language
$language = new Language($config->get('language_directory'));
$registry->set('language', $language);

// Language Autoload
if ($config->has('language_autoload')) {
	foreach ($config->get('language_autoload') as $value) {
		$loader->language($value);
	}
}

// Library Autoload
if ($config->has('library_autoload')) {
	foreach ($config->get('library_autoload') as $value) {
		$loader->library($value);
	}
}

// Model Autoload
if ($config->has('model_autoload')) {
	foreach ($config->get('model_autoload') as $value) {
		$loader->model($value);
	}
}

// Document
$registry->set('document', new Document($config));

// Route
$route = new Router($registry);

// Pre Actions
if ($config->has('action_pre_action')) {
	foreach ($config->get('action_pre_action') as $value) {
		$route->addPreAction(new Action($value));
	}
}

// Dispatch
$route->dispatch(new Action($config->get('action_router')), new Action($config->get('action_error')));

// Output
return $response->output();