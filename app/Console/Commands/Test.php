<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017-7-31
 * Time: 13:50
 */

namespace App\Console\Commands;
use Illuminate\Console\Command;


class Test extends Command
{
    protected $signature = 'test';
    protected $name = 'test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'test...';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
      //  $this->line(base_path('resources/'));
       // $this->line(storage_path('framework/cache'));
       // $this->line(base_path('app/System/Startup.php'));
     //   require_once base_path('app/System/autoload.php');
        require_once base_path('app/System/Startup.php');
        $this->line(start('catalog'));
        $this->line(PHP_EOL.'ok'.PHP_EOL);
    }
}