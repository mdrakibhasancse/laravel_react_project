<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\Frontend\HomeController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\TempImageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');



Route::post('/login', [AuthController::class, 'login']);

Route::get('/latest-services', [HomeController::class, 'latestServices']);
Route::get('/all-services', [HomeController::class, 'allServices']);




Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::get('/dashboard', [DashboardController::class, 'dashboard']);
    // service route
    Route::get('/services', [ServiceController::class, 'index']);
    Route::post('/service/store', [ServiceController::class, 'store']);
    Route::get('/service/edit/{id}', [ServiceController::class, 'edit']);
    Route::put('/service/update/{id}', [ServiceController::class, 'update']);
    Route::delete('/service/destroy/{id}', [ServiceController::class, 'destroy']);

    //temp image route
    Route::post('/temp/image/store', [TempImageController::class, 'store']);

    Route::get('/logout', [AuthController::class, 'logout']);
});
