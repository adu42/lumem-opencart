<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017-7-31
 * Time: 13:50
 */

namespace App\Console\Commands;
use Illuminate\Console\Command;
use App\Http\Controllers\ExampleController;

class OpencartPath extends Command
{
    protected $signature = 'oppath';
    protected $name = 'Opencart Path Process';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '把文件小写规则整理成驼峰规则';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $c =new  ExampleController();
        $rs =  $c->checkFiles();
        if(is_array($rs)){
            foreach ($rs as $r){
                $this->line($r);
            }
        }
        $this->line(PHP_EOL.'ok'.PHP_EOL);
    }
}