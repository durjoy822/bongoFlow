<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Frontend\HomeController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });


Route::prefix('admin')->name('admin.')->controller(DashboardController::class)->group(function () {
        Route::get('/dashboard', 'adminDashboard')->name('dashboard');

    });

Route::prefix('')->name('frontend.')->controller(HomeController::class)->group(function () {
        Route::get('/', 'home')->name('home');
        Route::get('/about', 'about')->name('about');
        Route::get('/contact', 'contact')->name('contact');

    });
