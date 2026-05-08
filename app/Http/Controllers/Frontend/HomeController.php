<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function home()
    {
        return Inertia::render('Frontend/Home');
    }
    public function about()
    {
        return Inertia::render('Frontend/About');
    }
    public function contact()
    {
        return Inertia::render('Frontend/Contact');
    }
}
