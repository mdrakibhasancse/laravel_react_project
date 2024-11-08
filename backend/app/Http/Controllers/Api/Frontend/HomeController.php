<?php

namespace App\Http\Controllers\Api\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function latestServices(){
        $services = Service::where('status', 1)->take(4)->latest()->get();
        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }

    public function allServices(){
        $services = Service::where('status', 1)->latest()->get();
        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }
}
