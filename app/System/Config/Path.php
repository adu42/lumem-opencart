<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017-8-1
 * Time: 10:37
 */
define('VERSION', '1.0.0');
$sub_sys = $application_config ?: 'catalog';
$sub_sys = strtolower($sub_sys);
$_sub_sys = ucfirst($sub_sys);
if (!function_exists('host_name_lowercase')) {
    /**
     * 获取当前域名/域名带上一个二级目录
     * 域名会带上www.
     * @param bool $all
     * @return array
     */
    function host_name_lowercase($all = false)
    {
        $path_info = isset($_SERVER['HTTP_HOST']) ? strtolower($_SERVER['HTTP_HOST']) : '';
        $path_info .= isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';
        $_path_info = explode('?', $path_info);
        $path_info = trim($_path_info[0], '/');
        $path_info = str_replace(['http://', 'https://'], '', $path_info);
        $_path_info = explode('/', $path_info);
        $_path_info = array_slice($_path_info, 0, 2);
        $path_info_1 = $_path_info[0];
        $path_info_2 = implode('/', $_path_info);
        if ($all) return array_unique([$path_info_1, $path_info_2]);
        return $path_info_1;
    }
}

if (!function_exists('http_server')) {
    function http_server($path = '',$secure = false)
    {
        $path = ltrim($path,'/');
        if($secure)return 'https://' . host_name_lowercase() . '/' . $path;
        return ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS']) ? 'https://' : 'http://') . host_name_lowercase() . '/' . $path;
    }
}

define('DIR_APPLICATION', base_path());
define('SUB_SYSTEM', $sub_sys);
if ($sub_sys == 'admin') {
    // HTTP
    define('HTTP_SERVER', http_server('admin/'));
    define('HTTP_CATALOG', http_server());
// HTTPS
    define('HTTPS_SERVER', http_server('admin/',true));
    define('HTTPS_CATALOG', http_server('',true));
    define('IS_ADMIN', true);
} else {
    // HTTP
    define('HTTP_SERVER', http_server());
    // HTTPS
    define('HTTPS_SERVER', http_server('',true));
    define('IS_ADMIN', false);
}

define('DIR_APPLICATION_CONTROLLERS', base_path('app/Http/Controllers/' . $_sub_sys . '/'));
define('DIR_APPLICATION_MODELS', base_path('app/Models/' . $_sub_sys . '/'));

define('DIR_APPLICATION_CATALOG_CONTROLLERS', base_path('app/Http/Controllers/Catalog/'));
define('DIR_APPLICATION_ADMIN_CONTROLLERS', base_path('app/Http/Controllers/ADMIN/'));
define('DIR_APPLICATION_CATALOG_MODELS', base_path('app/Models/Catalog/'));
define('DIR_APPLICATION_ADMIN_MODELS', base_path('app/Models/Admin/'));

// DIR
define('DIR_SYSTEM', base_path('app/System/'));
define('DIR_MODIFICATION', DIR_SYSTEM . 'modification/');


define('DIR_RESOURCES', base_path('resources/'));
define('DIR_UPLOAD', base_path('public/media/up/'));
define('DIR_IMAGE', base_path('public/media/images/'));
define('DIR_STATIC_IMAGE', base_path('public/static/images/'));
define('DIR_UPLOAD_WEB_PATH', '/media/up/');
define('DIR_IMAGE_WEB_PATH', '/media/images/');
define('DIR_STATIC_IMAGE_WEB_PATH', base_path('/static/default/images/'));
define('DIR_STORAGE', base_path('storage/'));
define('DIR_CONFIG', DIR_SYSTEM . 'Config/');
define('DIR_CACHE', DIR_STORAGE . 'framework/cache/');
define('DIR_DOWNLOAD', DIR_STORAGE . 'download/');
define('DIR_LOGS', DIR_STORAGE . 'logs/');
define('DIR_SESSION', DIR_STORAGE . 'session/');


define('DIR_LANGUAGE_ADMIN', DIR_RESOURCES . 'languages/admin/');
define('DIR_LANGUAGE_LOCALE', DIR_RESOURCES . 'languages/locale/');


define('DIR_ASSETS_ADMINHTML_DEFAULT', DIR_RESOURCES . 'assets/admin/');
define('DIR_ASSETS_FRONTEND_DEFAULT', DIR_RESOURCES . 'assets/theme/default/');
define('DIR_ASSETS_FRONTEND', DIR_RESOURCES . 'assets/theme/');

define('DIR_TEMPLATE', DIR_RESOURCES . 'views/');

define('DIR_TEMPLATE_ADMINHTML', DIR_TEMPLATE . 'admin/');
// define('DIR_TEMPLATE_FRONTEND_DEFAULT', DIR_TEMPLATE . 'catalog/theme/default/');
define('DIR_TEMPLATE_FRONTEND', DIR_TEMPLATE . '/theme/');

define('DIR_STATIC_FRONTEND', base_path('public/static/'));
define('DIR_STATIC_FRONTEND_WEB_PATH', '/static/');

if (IS_ADMIN) {
    define('DIR_LANGUAGE', DIR_LANGUAGE_ADMIN);
    define('DIR_ASSETS', DIR_ASSETS_ADMINHTML_DEFAULT);
    define('DIR_THEME', DIR_TEMPLATE_ADMINHTML);
} else {
    define('DIR_LANGUAGE', DIR_LANGUAGE_LOCALE);
    define('DIR_ASSETS', DIR_ASSETS_FRONTEND_DEFAULT);
    define('DIR_THEME', DIR_TEMPLATE_FRONTEND);
}

define('OPENCART_SERVER', 'http://www.opencart.com/');

// DB default
define('DB_DRIVER', 'Mpdo');
define('DB_HOSTNAME', config('database.connections.mysql.host'));
define('DB_USERNAME', config('database.connections.mysql.username'));
define('DB_PASSWORD', config('database.connections.mysql.password'));
define('DB_DATABASE', config('database.connections.mysql.database'));
define('DB_PORT', '3306');
define('DB_PREFIX', config('database.connections.mysql.prefix'));






