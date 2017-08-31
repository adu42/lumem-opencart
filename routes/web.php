<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/test', [
    'as' => 'test', 'uses' => 'ExampleController@test'
]);
$app->group(['prefix' => '/admin'], function ($app) {
    $app->get('/', function () use ($app) {
        return start('Admin');
    });
    $app->get('/{uri}', function () use ($app) {
        return start('Admin');
    });
    $app->post('/{uri}', function () use ($app) {
        return start('Admin');
    });
});
$app->get('/', function () use ($app) {
    return start('Catalog');
});
$app->post('/', function () use ($app) {
    return start('Catalog');
});
