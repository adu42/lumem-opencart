<?php namespace App\System\Engine;
/**
 * @package        OpenCart
 * @author        Daniel Kerr
 * @copyright    Copyright (c) 2005 - 2017, OpenCart, Ltd. (https://www.opencart.com/)
 * @license        https://opensource.org/licenses/GPL-3.0
 * @link        https://www.opencart.com
 */

/**
 * Controller class
 */
abstract class Controller
{
    protected $registry;
    public $data = array();
    public $queryParams = array();

    public function __construct($registry)
    {
        global $error_handler;
        set_error_handler($error_handler);
        $this->registry = $registry;
    }

    public function __get($key)
    {
        return $this->registry->get($key);
    }

    public function __set($key, $value)
    {
        $this->registry->set($key, $value);
    }

    /**
     * 加载模型
     * @param $route
     * @return $this
     */
    public function model($route, $share = true)
    {
        $this->registry->get('load')->model($route, $share);
        return $this;
    }

    /**
     * 获取配置
     * @param $key
     * @return mixed
     */
    public function config($key)
    {
        return $this->registry->get('config')->get($key);
    }

    /**
     * 更新配置
     * @param $key
     * @return mixed
     */
    public function setConfig($key, $value)
    {
        return $this->registry->get('config')->set($key, $value);
    }

    /**
     * 加载语言包
     * @param $route
     * @param string $key
     * @return $this
     */
    public function languages($route, $key = '')
    {
        $this->registry->get('load')->language($route, $key);
        return $this;
    }

    /**
     * 翻译,并检查替换参数
     * @param $key
     * @param $params
     * @return string
     */
    public function lang($key,$params=[]){
        $str = $this->language->get($key);
        if(!empty($str)){
            $_check = str_replace('%%','|||',$str);
            $count = substr_count($_check,'%');
            if(!$count)return $str;
            if(is_string($params))$params=[$params];
            $diff = $count - count($params);
            if($diff)array_pad($params,$count,'');
            $str = vsprintf($str, $params);
        }
        return $str;
    }

    /**
     * 简写
     * @param $str
     * @param int $type
     * @param string $charset
     * @return string
     */
    public function htmlEntityDecode($str,$type=ENT_QUOTES,$charset='UTF-8'){
        return html_entity_decode($str, $type,$charset);
    }
    /**
     * 加载视图
     * @param $route
     * @param array $data
     * @return $this
     */
    public function view($route, $data = array())
    {
        $this->data = array_merge($this->data,$data);
        return $this->registry->get('load')->view($route, $this->data);
    }

    /**
     * 加载子控制器结果
     * @param $route
     * @param array $data
     * @return $this
     */
    public function child($route, $data = array())
    {
        return $this->registry->get('load')->controller($route, $data);
    }

    /**
     * 获得根url
     * @return mixed
     */
    public function getBaseUrl(){
        if ($this->request->server['HTTPS']) {
            $server = $this->config->get('config_ssl');
        } else {
            $server = $this->config->get('config_url');
        }
        return $server;
    }
    /**
     * 装配链接
     * @param $route
     * @param string $args
     * @param bool $secure
     * @return $this
     */
    public function link($route, $args = '', $secure = false)
    {
        if (!empty($args)) {
            if (!is_array($args)) {
                $args = [$args];
            }
        }
        $args[] = '&user_token=' . $this->session->data('user_token');
        return $this->registry->get('url')->link($route, $args, $secure);
    }

    /**
     * 装配url
     * @param $route
     * @param array $query get 参数
     * @param array $values 装配自定义参数，覆盖get
     * @param bool $secure 是否https
     * @return string link
     */
    public function url($route,$query=[],$values=[],$secure = false){
        $query = array_merge($query,['path','sort','order','page','limit']);
        $params = $this->getQueryParams($query,$values);
        return $this->link($route,$params,$secure);
    }
    /**
     * 放图片进数组
     * @param array $fileNames
     * @return $this
     */
    public function setImagesToData($fileNames=[]){
        foreach ($fileNames as $name=>$file){
            if(is_string($name))
            $this->data[$name]=image_theme_file($file);
        }
        return $this;
    }

    /**
     * 放ico文件进document
     * @return $this
     */
    public function setFavicon(){
        if ($img = image_theme_file_or_empty($this->config->get('config_icon'))) {
            $this->document->addLink($img, 'icon');
        }
        return $this;
    }

    /**
     * 设置标题
     * @param string $title
     */
    public function setTitle($title=''){
        $this->document->setTitle($title?$title:$this->config->get('config_meta_title'));
        return $this;
    }

    /**
     * 设置描述
     * @param string $description
     */
    public function setDescription($description=''){
        $this->document->setDescription($description?$description:$this->config->get('config_meta_description'));
        return $this;
    }

    /**
     * 设置关键词
     * @param string $keywords
     * @return $this
     */
    public function setKeywords($keywords=''){
        $this->document->setKeywords($keywords?$keywords:$this->config->get('config_meta_keyword'));
        return $this;
    }

    /**
     * 装配数据
     * 找post
     * 找config
     * 返回
     *  post / config
     */
    public function postBeforConfig($key, $default = null)
    {
        $value = $this->request->post($key);
        if (!$value) $value = $this->config($key);
        if (!$value) $value = $default;
        return $value;
    }
    /**
     * 装配数据
     * 找post
     * 找数据行
     * 返回
     * @param $key
     * @param $dataRow
     * @param null $default
     * @return bool|null
     */
    public function postBeforDb($key,$dataRow, $default = null){
        $value = $this->request->post($key);
        if (!$value) $value = isset($dataRow[$key])?$dataRow[$key]:false;
        if (!$value) $value = $default;
        return $value;
    }

    /**
     * 获得get过滤参数数组
     * $params选择需要哪些数据
     */
    public function getQueryParams($params = array(),$values = array())
    {
        $key = md5(serialize($params));
        if(!isset($this->queryParams[$key])){
            $new_params = array();
            if (is_array($params)) {
                foreach ($params as $key => $param) {
                    if ($value = $this->request->get($param)) {
                        if (!is_string($key)) $key = $param;
                        $new_params[$key]= $value;
                    }
                }
            }
            $new_params = array_merge($new_params,$values);
            $this->queryParams[$key] = $new_params;
        }
        return $this->queryParams[$key];
    }

    /**
     * 装配过滤参数到新的url
     *
     */
    public function setQueryParams($params = array()){
        if(is_array($params)){
            $_params = array();
            foreach ($params as $key=>$value){
                $_params[] = "$key=$value";
            }
            return implode('&',$_params);
        }
        return '';
    }

    /**
     * 获得带参数的查询数据
     * @param array $params
     * @param array $values
     * @return string
     */
    public function getQueryInUrl($params = array(),$values = array()){
        $params = $this->getQueryParams($params,$values);
        return $this->setQueryParams($params);
    }

    //直接装配对应的链接

    /**
     * 获取默认值，数组预先判断，没有就给默认值
     * @param $name
     * @param $arguments
     * @return null
     */
    public function __call($name, $arguments)
    {
        $name = strtolower($name);
        $methods = ['get', 'data', 'error','post'];
        if (in_array($name, $methods)) {
            if($name=='get')return $this->registry->get('request')->get($arguments[0]);
            if($name=='post')return $this->registry->get('request')->post($arguments[0]);
            return isset($this->$name[$arguments[0]]) ? $this->$name[$arguments[0]] : (isset($arguments[1]) ? $arguments[1] : null);
        }
        return null;
    }

}