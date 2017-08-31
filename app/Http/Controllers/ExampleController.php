<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\File;
use App\System\Library\Url;

class ExampleController extends Controller
{
    protected $_model_path = ['app/Models'];
    protected $_controller_path = ['app/Http/Controllers'];
    protected $_mode = 'controller'; // model
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * 测试
     */
    public function test(){
       $url = new Url('aaa','bbb');
       $rs = $url->currentUri();
       print_r($rs);
    }


    /**
     * 必须要按照先后顺序执行
     * opencart 文件整理，文件名整理
     *  php artisan oppath 命令执行
     * @return array
     */
    public function checkFiles(){
        for ($i=1;$i<=5;$i++){
            $this->doStep($i);
        }
        $step = 5; //1 目录  2 目录下的文件  3 文件内的名称空间  4 文件类名称   5 加model use
        // 缺文件与类名称一致性检查、驼峰命名规则一致性检查
        //缺引用类提取及注入use
    }


    protected function getPaths(){
        if($this->_mode=='controller'){
            return $this->_controller_path;
        }else if($this->_mode=='model'){
            return $this->_model_path;
        }
        return [];
    }

    public function replaceClassName(){
        $paths = $this->getPaths();
        foreach($paths as $path){
            $path = base_path($path);
            $dirs = $this->getSubDirs($path);
            if ($dirs !== false)
            {
                $dirs = array_flatten($dirs);
                rsort($dirs);
                foreach ($dirs as $dir){
                    $dir = str_replace('//','/',trim($dir,'/')) ;
                    $_dir = str_replace($path.'/','',ltrim($dir,'/'));

                    $files = File::glob($dir.'/*.php');
                    if ($files !== false)
                    {
                        $files = array_flatten($files);
                        rsort($files);
                        foreach ($files as $file){
                            $file = str_replace('//','/',trim($file,'/')) ;
                            $_dir = str_replace($path.'/','',ltrim($file,'/'));
                            if(is_file($file)){
                                $this->fileClassRename($file, $path);
                            }
                        }
                    }
                }
            }
        }
    }

    protected function fileClassRename($file,$dir){
        $_file = str_replace($dir,'',$file);
        $_file = str_replace('\\','/',$_file);
        $_file = str_replace(['Admin/','Catalog/'],'',$_file);
        $_file = explode('/',$_file);

        $_filename = array_pop($_file);
        $_filenames = explode('.',$_filename);
        $_filename = $_filenames[0];

        if(stripos($dir,'Controllers')!==false){
            $_className = 'Controller'.implode('',$_file).$_filename;
        }else if(stripos($dir,'Models')!==false){
            $_className = 'Model'.implode('',$_file).$_filename;
        }

        echo $_className.'---'.$_filename.'---'.$file.'--'.$dir."\n";
       // return false;
        $content = file_get_contents($file);
        if(!empty($content)){
            $content = str_replace($_className.' ',$_filename.' ',$content);
            $content = str_replace('class   ','class ',$content);
            file_put_contents($file,$content);
        }
    }


    protected function doStep($step = 0){
        if($step==4)return $this->replaceClassName();

        $paths = $this->getPaths();
        $_rs = [];
        foreach ($paths as $path){
            $path = base_path($path);
            $dirs = $this->getSubDirs($path);
            if ($dirs !== false)
            {
                $dirs = array_flatten($dirs);
                rsort($dirs);
                foreach ($dirs as $dir){
                    $dir = str_replace('//','/',trim($dir,'/')) ;
                    $_dir = str_replace($path.'/','',ltrim($dir,'/'));
                    $_dstDir = $this->nameUcFirst($_dir);
                    $files = File::glob($dir.'/*.php');
                    if ($files !== false)
                    {
                        $files = array_flatten($files);
                        rsort($files);
                        foreach ($files as $file){
                            $file = str_replace('//','/',trim($file,'/')) ;
                            $_dir = str_replace($path.'/','',ltrim($file,'/'));
                            $_dstfile = $this->nameUcFirst($_dir);
                            if($step==3){
                                if(is_file($file)){
                                    echo $file." ---addNamespace ok\n";
                                    $this->addNamespace($file);
                                }
                            }
                            if($step==2){
                                $_dstfile = $path.'/'.$_dstfile;
                                echo $file."\n".$_dstfile."\n";
                                if(is_file($file)){
                                    echo $file."\n".$_dstfile." ---moved\n\n";
                                    $this->rename_win($file, $_dstfile);
                                }
                            }
                            if($step==5){
                                if(is_file($file)){
                                    echo $file." ---addUseBase ok\n";
                                    $this->addUseBase($file);
                                }
                            }
                        }
                    }
                    if($step==1){
                        echo $dir."\n".$path.'/'.$_dstDir."\n";
                        if(is_dir($dir)){
                            echo $dir."\n".$path.'/'.$_dstDir." -- moved\n\n";
                            File::moveDirectory($dir, $path.'/'.$_dstDir);
                        }
                    }
                }
            }
        }
        return $_rs;
    }


    protected function addNamespace($file){
        $content = file_get_contents($file);
        if(stripos($content,'namespace')===false){
            $path = base_path('app');
            $namespacePath = str_replace($path,'',$file);
            $namespacePath = explode('/',$namespacePath);
            array_pop($namespacePath);
            $namespace = 'App'.implode('\\',$namespacePath);
            $content = str_replace('<?php','<?php namespace '.$namespace.';',$content);
            file_put_contents($file,$content);
            echo ' namespace -- ok';
        }
    }

    protected function addUseBase($file){
        $content = file_get_contents($file);
        if(stripos($content,'use ')===false){
            if($this->_mode=='model'){
                $content = str_replace('class ',"use App\\System\\Engine\\Model;\nclass ",$content);
                file_put_contents($file,$content);
            }elseif ($this->_mode=='controller'){
                $content = str_replace('class ',"use App\\System\\Engine\\Controller;\nclass ",$content);
                file_put_contents($file,$content);
            }
            echo ' use -- ok ';
        }
    }

    /**
     * 重命名文件
     * @param $oldfile
     * @param $newfile
     * @return bool
     */
    protected function rename_win($oldfile,$newfile) {
        if (!@rename($oldfile,$newfile)) {
            if (copy ($oldfile,$newfile)) {
                unlink($oldfile);
                return TRUE;
            }
            return FALSE;
        }
        return TRUE;
    }
    /**
     * 获取所有子目录
     * @param $dir
     * @return array
     */
    protected function getSubDirs($dir){
        $dirs = File::glob($dir.'/*',GLOB_ONLYDIR);
        if($dirs!==false && is_array($dirs)){
            $dirs = array_unique($dirs);

            foreach ($dirs as $dir){
                $_dirs = $this->getSubDirs($dir);
                $dirs = array($dirs,$_dirs);
            }
        }
        return $dirs;
    }

    protected function nameUcFirst($path){
        $_path = explode('/',$path);
        $_path = array_map(function($item){
            $_item = explode('_',$item);
            foreach ($_item as &$value){
                $value =  ucfirst($value);
            }
            $item=implode('',$_item);
            return ucwords($item);
        },$_path);
        return implode('/',$_path);

    }


    protected function getFilesFromDir($dir,$petten='/*.php'){
        return File::glob($dir.$petten);
    }
    //
}
