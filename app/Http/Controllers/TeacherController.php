<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Teacher;
use Auth;
class TeacherController extends Controller
{
    //? Show Register Page

    public function Register(){
        
        return Inertia::render('Teacher/Register');
    }

    //? Save Registration 

    public function Registration(Request $request){
       
        $data = $request->all();
        $table = new Teacher;
        $password = Hash::make($data['password']);
        $table->name= $data['name'];
        $table->email= $data['email'];
        $table->password= $password;
        $table->save();
        if($table){
            return redirect()->route('teacher-login-form');
        }
    }


    //? Show Login form

    public function Login(){

        return Inertia::render('Teacher/Login');
    }

    //? Login Into

    public function LoginInto(Request $request){
        
        $data = $request->all();

        if(Auth::guard('teacher')->attempt(['email'=> $data['email'], 'password'=> $data['password']])){

            return redirect()->route('teacher-dashboard');
        }else{
           
            return redirect()->route('teacher-login-form');

           
        }
    }

    //? Dashboard Show

    public function Dashboard(){
        return Inertia::render('Teacher/Dashboard');
    }
}
