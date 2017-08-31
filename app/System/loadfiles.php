<?php
/**
 * Created by PhpStorm.
 * User: adu
 * Date: 2017-8-1
 * Time: 16:03
 */
// Modification Override
function modification($filename) {
    if (IS_ADMIN) {
        $file = DIR_MODIFICATION . 'Admin/' .  substr($filename, strlen(DIR_APPLICATION));
    } elseif (defined('DIR_OPENCART')) {
        $file = DIR_MODIFICATION . 'Install/' .  substr($filename, strlen(DIR_APPLICATION));
    } else {
        $file = DIR_MODIFICATION . 'Catalog/' . substr($filename, strlen(DIR_APPLICATION));
    }

    if (substr($filename, 0, strlen(DIR_SYSTEM)) == DIR_SYSTEM) {
        $file = DIR_MODIFICATION . 'System/' . substr($filename, strlen(DIR_SYSTEM));
    }

    if (is_file($file)) {
        return $file;
    }

    return $filename;
}

// Autoloader
/*

 if (is_file(DIR_STORAGE . 'vendor/autoload.php')) {
	require_once(DIR_STORAGE . 'vendor/autoload.php');
}
*/

function library($class) {
    $file = DIR_SYSTEM . 'Library/' . str_replace('\\', '/', ucfirst(camel_case($class))) . '.php';

    if (is_file($file)) {
        include_once(modification($file));

        return true;
    } else {
        return false;
    }
}

spl_autoload_register('library');
spl_autoload_extensions('.php');

// Engine
require_once(modification(DIR_SYSTEM . 'Engine/Action.php'));
require_once(modification(DIR_SYSTEM . 'Engine/Controller.php'));
require_once(modification(DIR_SYSTEM . 'Engine/Event.php'));
require_once(modification(DIR_SYSTEM . 'Engine/Router.php'));
require_once(modification(DIR_SYSTEM . 'Engine/Loader.php'));
require_once(modification(DIR_SYSTEM . 'Engine/Model.php'));
require_once(modification(DIR_SYSTEM . 'Engine/Registry.php'));
require_once(modification(DIR_SYSTEM . 'Engine/Proxy.php'));

// Helper
require_once(DIR_SYSTEM . 'Helper/General.php');
require_once(DIR_SYSTEM . 'Helper/Utf8.php');


