<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
               'status' =>false,
               'errors' => $validator->errors(),
            ]);
        }

        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials, 1)) {
            $user = User::where('id', Auth::id())->first();
            $token = $user->createToken('token')->plainTextToken;
            return response()->json([
                'status' => true,
                'token'  => $token,
                'id'     => Auth::id(),
             ]);
        }else{
            return response()->json([
                'status' =>false,
                'message' =>'Credentials Is Not Match!',
            ],401);
        }
    }

    public function logout()
    {
        $user = User::where('id', Auth::id())->first();
        $user->tokens()->delete();
        return response()->json([
            'status' => true,
            'message' =>'Logout Successfully!',
         ]);
    }
}
