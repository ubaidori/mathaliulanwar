<?php

namespace App\Http\Controllers;

class VirtualTourController extends Controller
{
    public function index()
    {
        return view('public.virtual-tour');
    }
}
