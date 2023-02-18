<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('welcome', [
           'AppVersion' => App::version(),
           'PhpVersion' => PHP_VERSION
        ]);
    }
}
