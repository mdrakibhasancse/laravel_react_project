<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Facades\Image;

class ServiceController extends Controller
{

    public function index(){
        $services = Service::latest()->get();
        return response()->json([
            'status' => true,
            'data' => $services,
         ]);
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required|unique:services,title',
        ]);

        if ($validator->fails()) {
            return response()->json([
               'status' =>false,
               'errors' => $validator->errors(),
            ], 422);
        }

        $service = new Service();
        $service->title = $request->title;
        $service->slug = Str::slug($request->title);
        $service->excerpt = $request->excerpt;
        $service->description = $request->description;
        $service->status = $request->status;
        $service->save();

        if($request->imageId > 0){
            $oldImg = $service->image;
            $tempImg = TempImage::find($request->imageId);
            if($tempImg != null){
                $extArr = explode('.', $tempImg->name);
                $ext = last($extArr);
                $imageName = strtotime('now').$service->id.'.'.$ext;

                $sourcePath = public_path('uploads/temp/'.$tempImg->name);
                //create small image
                $destPath = public_path('uploads/services/small/'.$imageName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destPath);

                //create large image
                $destPath = public_path('uploads/services/large/'.$imageName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destPath);

                $service->image = $imageName;
                $service->save();

                if($oldImg != ''){
                    File::delete(public_path('uploads/services/large/'.$oldImg));
                    File::delete(public_path('uploads/services/small/'.$oldImg));
                }
            }
        }
        return response()->json([
            'status' => true,
            'message' =>'Service Added Successfully!',
        ]);
    }

    public function edit($id){
        $service = Service::where('id', $id)->first();
        if(!$service){
            return response()->json([
                'status' => false,
                'data' =>  'Service not found',
             ],404);
        }

        return response()->json([
            'status' => true,
            'data' =>  $service,
         ]);
    }

    public function update(Request $request, $id){
        $service = Service::where('id', $id)->first();
        if(!$service){
            return response()->json([
                'status' =>false,
                'errors' => 'Service not found!',
             ],404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'required|unique:services,title,' . $id,
        ]);

        if ($validator->fails()) {
            return response()->json([
               'status' =>false,
               'errors' => $validator->errors(),
            ],422);
        }

        $service->title = $request->title;
        $service->slug = Str::slug($request->title);
        $service->excerpt = $request->excerpt;
        $service->description = $request->description;
        $service->status = $request->status;
        $service->save();

        if($request->imageId > 0){
            $oldImg = $service->image;

            $tempImg = TempImage::find($request->imageId);
            if($tempImg != null){
                $extArr = explode('.', $tempImg->name);
                $ext = last($extArr);
                $imageName = strtotime('now').$service->id.'.'.$ext;

                $sourcePath = public_path('uploads/temp/'.$tempImg->name);
                //create small image
                $destPath = public_path('uploads/services/small/'.$imageName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destPath);

                //create large image
                $destPath = public_path('uploads/services/large/'.$imageName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destPath);

                $service->image = $imageName;
                $service->save();

                if($oldImg != ''){
                    File::delete(public_path('uploads/services/large/'.$oldImg));
                    File::delete(public_path('uploads/services/small/'.$oldImg));
                }
            }
        }


        return response()->json([
            'status' => true,
            'message' =>'Service Updated Successfully!',
        ]);
    }

    public function destroy($id){
        $service = Service::where('id', $id)->first();
        if(!$service){
            return response()->json([
                'status' => false,
                'data' =>  'Service not found',
             ],404);
        }

        $service->delete();
        return response()->json([
            'status' => true,
            'message' =>'Service Deleted Successfully!',
         ]);
    }
}
