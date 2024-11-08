<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class TempImageController extends Controller
{
    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'image' => 'required|mimes:jpeg,png,jpg,gif,svg',
        ]);

        if ($validator->fails()) {
            return response()->json([
               'status' => false,
               'errors' => $validator->errors('image'),
            ]);
        }

        $file = $request->image;
        $ext = $file->getClientOriginalExtension();
        $imageName = strtotime('now').'.'.$ext;

        $image = New TempImage();
        $image->name = $imageName;
        $image->save();

        $file->move(public_path('uploads/temp'),  $imageName);

        $sourcePath = public_path('uploads/temp/'.$imageName);
        $destPath = public_path('uploads/temp/thumb/'.$imageName);
        $manager = new ImageManager(Driver::class);
        $img = $manager->read(($sourcePath));
        $img->coverDown(300, 300);
        $img->save($destPath);


        return response()->json([
            'status' => true,
            'data' => $image,
            'message' => 'Image uploaded successfully',
        ]);

    }
}
