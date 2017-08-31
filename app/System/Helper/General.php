<?php //namespace App\System\Helper;
use Illuminate\Support\HtmlString;
if(!function_exists('token')){
function token($length = 32) {
	// Create random token
	$string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	
	$max = strlen($string) - 1;
	
	$token = '';
	
	for ($i = 0; $i < $length; $i++) {
		$token .= $string[mt_rand(0, $max)];
	}	
	
	return $token;
}
}
/**
 * Backwards support for timing safe hash string comparisons
 * 
 * http://php.net/manual/en/function.hash-equals.php
 */

if(!function_exists('hash_equals')) {
	function hash_equals($known_string, $user_string) {
		$known_string = (string)$known_string;
		$user_string = (string)$user_string;

		if(strlen($known_string) != strlen($user_string)) {
			return false;
		} else {
			$res = $known_string ^ $user_string;
			$ret = 0;

			for($i = strlen($res) - 1; $i >= 0; $i--) $ret |= ord($res[$i]);

			return !$ret;
		}
	}
}

if (! function_exists('public_path')) {
    /**
     * Get the path to the public folder.
     *
     * @param  string  $path
     * @return string
     */
    function public_path($path = '')
    {
        return base_path('public').($path ? DIRECTORY_SEPARATOR.$path : $path);
    }
}

if (! function_exists('mix')) {
    /**
     * Get the path to a versioned Mix file.
     *
     * @param  string  $path
     * @param  string  $manifestDirectory
     * @return \Illuminate\Support\HtmlString
     *
     * @throws \Exception
     */
    function mix($path, $manifestDirectory = '')
    {
        static $manifests = [];
        if (! starts_with($path, '/')) {
            $path = "/{$path}";
        }
        if ($manifestDirectory && ! starts_with($manifestDirectory, '/')) {
            $manifestDirectory = "/{$manifestDirectory}";
        }
        if (file_exists(public_path($manifestDirectory.'/hot'))) {
            return new HtmlString("//localhost:8080{$path}");
        }
        $manifestPath = public_path($manifestDirectory.'/mix-manifest.json');
        if (! isset($manifests[$manifestPath])) {
            if (! file_exists($manifestPath)) {
                throw new Exception('The Mix manifest does not exist.');
            }
            $manifests[$manifestPath] = json_decode(file_get_contents($manifestPath), true);
        }
        $manifest = $manifests[$manifestPath];
        if (! isset($manifest[$path])) {
            throw new Exception(
                "Unable to locate Mix file: {$path}. Please check your ".
                'webpack.mix.js output paths and try again.'
            );
        }
        return new HtmlString($manifestDirectory.$manifest[$path]);
    }

    if (! function_exists('asset')) {
        /**
         * Generate an asset path for the application.
         *
         * @param  string  $path
         * @param  bool    $secure
         * @return string
         */
        function asset($path, $secure = null)
        {
            return app('url')->asset($path, $secure);
        }
    }

    if (! function_exists('view_file')) {
        /**
         * Generate an asset path for the application.
         * 获取视图文件所在
         * @param  string  $path
         * @param  bool    $secure
         * @return string
         */
        function view_file($path,$theme='',$side = '')
        {
            if($side == 'catalog'){
                $dir = DIR_TEMPLATE_FRONTEND;
            }else if($side == 'admin'){
                $dir = DIR_TEMPLATE_ADMINHTML_DEFAULT;
            }else if(IS_ADMIN){
                $dir = DIR_TEMPLATE_ADMINHTML_DEFAULT;
            }else{
                $dir = DIR_TEMPLATE_FRONTEND;
            }

           if($theme && $theme!='default'){
               $file = $dir . $theme . '/' . $path;
               if(file_exists($file))return $file;
           }
           if($dir == DIR_TEMPLATE_ADMINHTML_DEFAULT){
               $file = $dir . $path;
           }else{
               $file = $dir . 'default/' . $path;
           }
           return $file;
        }
    }

    if (! function_exists('registry')) {
        /**
         * Generate an asset path for the application.
         * 获取当前主题名称
         * @param  string  $path
         * @param  bool    $secure
         * @return string
         */
        function registry($objectName)
        {
            global $registry;
            if (is_object($registry) && $registry->has($objectName)){
                return $registry->get($objectName);
            }
            return false;
        }
    }

    if (! function_exists('theme_name')) {
        /**
         * Generate an asset path for the application.
         * 获取当前主题名称
         * @param  string  $path
         * @param  bool    $secure
         * @return string
         */
        function theme_name()
        {
            $theme = 'default';
            if(IS_ADMIN)$theme='admin';
            if($config = registry('config')){
                $theme=$config->get('theme');
            }
            return $theme;
        }
    }

    if (! function_exists('image_theme_file')) {
        /**
         * Generate an asset path for the application.
         * 获取视图文件所在
         * 如果只需要当前主题的图片，有就返回，没有就返回not
         * 如果需要当前主题的图片，有就返回，没有就找default，再没有就返回not
         * @param  string  $path
         * @param  bool    $secure
         * @return string
         */
        function image_theme_file($file,$theme=null,$onlyTheme=false)
        {
            $theme = $theme?:theme_name();
            $path = DIR_STATIC_FRONTEND.$theme.DIRECTORY_SEPARATOR.'images'.DIRECTORY_SEPARATOR.$file;
            if(file_exists($path))return http_server(DIR_STATIC_FRONTEND_WEB_PATH.$theme.'/images/'.$file);
            if($onlyTheme)return http_server(DIR_STATIC_FRONTEND_WEB_PATH.'default/images/no_image.png');
            $path = DIR_STATIC_FRONTEND.'default'.DIRECTORY_SEPARATOR.'images'.DIRECTORY_SEPARATOR.$file;
            if(file_exists($path))return http_server(DIR_STATIC_FRONTEND_WEB_PATH.'default/images/'.$file);
            return http_server(DIR_STATIC_FRONTEND_WEB_PATH.'default/images/no_image.png');
        }
    }

    if (! function_exists('image_theme_file_or_empty')) {
        /**
         * Generate an asset path for the application.
         * 获取视图文件所在
         * 如果只需要当前主题的图片，有就返回，没有就返回not
         * 如果需要当前主题的图片，有就返回，没有就找default，再没有就返回not
         * @param  string  $path
         * @param  bool    $secure
         * @return string
         */
        function image_theme_file_or_empty($file,$theme=null)
        {
            $theme = $theme?:theme_name();
            $path = DIR_STATIC_FRONTEND.$theme.DIRECTORY_SEPARATOR.'images'.DIRECTORY_SEPARATOR.$file;
            if(file_exists($path))return http_server(DIR_STATIC_FRONTEND_WEB_PATH.$theme.'/images/'.$file);
            return false;
        }
    }

    if (! function_exists('error_handler')) {
        /**
         * Generate an asset path for the application.
         * 获取视图文件所在
         * @param  string  $path
         * @param  bool    $secure
         * @return string
         */
       $error_handler = function($code, $message, $file, $line){
            // error suppressed with @
            if (error_reporting() === 0) {
                return false;
            }

            switch ($code) {
                case E_NOTICE:
                case E_USER_NOTICE:
                    $error = 'Notice';
                    break;
                case E_WARNING:
                case E_USER_WARNING:
                    $error = 'Warning';
                    break;
                case E_ERROR:
                case E_USER_ERROR:
                    $error = 'Fatal Error';
                    break;
                default:
                    $error = 'Unknown';
                    break;
            }

            if($config = registry('config')){
                if ($config->get('error_display')) {
                    echo '<b>11' . $error . '</b>: ' . $message . ' in <b>' . $file . '</b> on line <b>' . $line . '</b>';
                }

                if ($config->get('error_log') && $log=registry('log')) {
                    $log->write('PHP ' . $error . ':  ' . $message . ' in ' . $file . ' on line ' . $line);
                }
            }
            return true;
        };
    }
}