<?php namespace App\System\Library;
/**
 * @package		OpenCart
 * @author		Daniel Kerr
 * @copyright	Copyright (c) 2005 - 2017, OpenCart, Ltd. (https://www.opencart.com/)
 * @license		https://opensource.org/licenses/GPL-3.0
 * @link		https://www.opencart.com
*/

/**
* Document class
*/
class Document {
	private $title;
	private $description;
	private $keywords;
	private $links = array();
	private $styles = array();
	private $scripts = array();
	protected $config;
	private $_debug = true;
	private $_mergeJs = false;

	public function __construct($config=null)
    {
        $this->config = $config;
    }

    /**
     * 
     *
     * @param	string	$title
     */
	public function setTitle($title) {
		$this->title = $title;
	}

	/**
     * 
	 * 
	 * @return	string
     */
	public function getTitle() {
		return $this->title;
	}

	/**
     * 
     *
     * @param	string	$description
     */
	public function setDescription($description) {
		$this->description = $description;
	}

	/**
     * 
     *
     * @param	string	$description
	 * 
	 * @return	string
     */
	public function getDescription() {
		return $this->description;
	}

	/**
     * 
     *
     * @param	string	$keywords
     */
	public function setKeywords($keywords) {
		$this->keywords = $keywords;
	}

	/**
     *
	 * 
	 * @return	string
     */
	public function getKeywords() {
		return $this->keywords;
	}
	
	/**
     * 
     *
     * @param	string	$href
	 * @param	string	$rel
     */
	public function addLink($href, $rel) {
		$this->links[$href] = array(
			'href' => $href,
			'rel'  => $rel
		);
	}

	/**
     * 
	 * 
	 * @return	array
     */
	public function getLinks() {
		return $this->links;
	}

	/**
     * 
     *
     * @param	string	$href
	 * @param	string	$rel
	 * @param	string	$media
     */
	public function addStyle($href, $rel = 'stylesheet', $media = 'screen') {
		$this->styles[$href] = array(
			'href'  => $href,
			'rel'   => $rel,
			'media' => $media
		);
	}

	/**
     * 
	 * 
	 * @return	array
     */
	public function getStyles() {
		$mixfile = $this->doMix($this->styles,'css');
		if(!empty($mixfile)){
        $this->styles = null ;
        $this->addStyle(array_pop($mixfile));
        }
        return $this->styles;
	}

	/**
     * 
     *
     * @param	string	$href
	 * @param	string	$postion
     */
	public function addScript($href, $postion = 'header') {
		$this->scripts[$postion][$href] = $href;
	}
	/**
     * 
     *
     * @param	string	$postion
	 * 
	 * @return	array
     */
	public function getScripts($postion = 'header') {
		if (isset($this->scripts[$postion])) {
			return $this->doMix($this->scripts[$postion],'js');
		} else {
			return [];
		}
	}

	/*
	 * 整理路径
	 */
	public function doMix($src,$type,$media='screen'){
        $_files = [];
        $_not_files = [];
        $needReset = false;
        $key = md5(serialize($src));
        $mixfile = $this->getMinFileName($key,$type);
        if(!$this->_debug && file_exists(base_path('public/'.$mixfile)))return [$mixfile];
        if(!is_array($src))$src = [$src];
        if(is_array($src)){
            $dir = IS_ADMIN?'admin/':'theme/';
            foreach ($src as &$item){
                if(isset($item['href'])){
                    $item=$item['href'];
                }
                if(stripos($item,'catalog/view/')!==false){
                    $item = str_replace('catalog/view/','resources/assets/theme/'.$this->config->get('theme').'/',$item);
                    $item_default = str_replace('catalog/view/','resources/assets/theme/default/',$item);
                }

                if(IS_ADMIN){
                    $item = str_replace('view/','resources/assets/admin/',$item);
                    $item_default = str_replace('view/','resources/assets/admin/',$item);
                }

                if(stripos($item,'resources/assets')!==0){
                    $item = 'resources/assets/'.$this->config->get('theme').'/'.$item;
                    $item_default = 'resources/assets/'.$dir.'/default/'.$item;
                }
                $path = base_path($item); $path_default = base_path($item_default);
                if(!file_exists($path) && file_exists($path_default) ){
                    $item = $item_default;
                }
                if(file_exists($path)){
                    $_files[] = $item;
                }else{
                    $_not_files[] =$item.' -> '.$path;
                }
            }
            if(!empty($_not_files))info($type.' file not found '.implode("\n",$_not_files));
        }
        if(!empty($_files)){
            $mixfile = $this->mixBag($_files,$type);
            return (!is_array($mixfile))?[$mixfile]:$mixfile;
        }
        return [];
    }

    /**
     * 合并css应该没问题
     * 合并js； jquery及其插件加载延迟dom问题，使body里事件定义失效。
     * mix
     * @param $files
     * @param $key
     */
    public function mixBag($files,$type='js'){
        $change = false;
        $mixfile = $this->addMixLines($files,$type,$change);
        if($change){
            $mix_webpack = base_path('webpack.mix.js');
            if(file_exists($mix_webpack)){
                    if( env('APP_ENV')== 'production'){
                        @exec('npm run production',$rs);
                    }else {
                        @exec('npm run dev', $rs);
                    }
            }
        }
        return $mixfile;
    }

    /**
     * 判断怎么加
     * @param $files
     * @param $type
     * @return array
     */
    protected function addMixLines($files,$type,&$change){
        $template= $template_file = $mixfile= '';
        $return = [];
        if($this->_mergeJs) {
            $key = md5(serialize($files));
            $mixfile = $this->getMinFileName($key,$type);
            $template_file ="'public$mixfile'";
            if($type=='js'){
                $template = '.js(';
            }else{
                $template = '.styles(';
            }
            $template .= '["' . implode('","', $files) . '"],';
            $template .= $template_file;
            $template .= ")\n";
            $template .= ";";
            $return[]=$mixfile;
            $r = $this->addMixLine($mixfile,$template);
            if($r)$change = true;
        }else{
            if($type=='js') {
                foreach ($files as $file) {
                    $dstFile = $this->getMinFileName($this->getPublishPath($file), $type);
                    $template = '.copy("' . $file . '","public' . $dstFile . '")' . "\n";
                    $template .= ";";
                    $return[]=$dstFile;
                    $r = $this->addMixLine($dstFile,$template);
                    if($r)$change = true;
                }
            }else{
                $key = md5(serialize($files));
                $mixfile = $this->getMinFileName($key,$type);
                $template_file ="'public$mixfile'";
                $template = '.styles(';
                $template .= '["' . implode('","', $files) . '"],';
                $template .= $template_file;
                $template .= ")\n";
                $template .= ";";
                $return[]=$mixfile;
                $r =$this->addMixLine($mixfile,$template);
                if($r)$change = true;
            }
        }
        return $return;
    }

    /**
     * 加一行
     * @param $file
     * @param $template
     * @return bool
     */
    protected function addMixLine($file,$template){
        $mix_webpack = base_path('webpack.mix.js');
        if(file_exists($mix_webpack)){
            $content = file_get_contents($mix_webpack);
            if(stripos($content,$file)===false){
                $content = substr($content,0,strripos($content,';')).$template;
                file_put_contents($mix_webpack,$content);
                return true;
            }
        }
        return false;
    }

    /**
     * 获取发布地址
     */
    protected function getPublishPath($file){
        $file = str_replace('\\','/',$file);
        $_file = explode('/',$file);
        $file = array_pop($_file);
        return substr($file,0,strripos($file,'.'));
    }

    /**
     * 获得输出文件名
     * @param $key
     * @param $type
     * @return string
     */
    protected function getMinFileName($key,$type){
        $mixfile= '';
        if($type=='js'){
            $mixfile = $this->config->get('theme_web_path').$this->config->get('theme')."/js/$key.js";
        }else
        {
            $mixfile = $this->config->get('theme_web_path').$this->config->get('theme')."/css/$key.css";
        }
        return $mixfile;
    }

}