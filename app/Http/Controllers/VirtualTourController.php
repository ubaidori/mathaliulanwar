<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use Illuminate\Contracts\View\View;

class VirtualTourController extends Controller
{
    public function index(): View
    {
        return view('public.virtual-tour', [
            'siteSetting' => SiteSetting::query()->first(),
        ]);
    }
}
