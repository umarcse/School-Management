<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Student;
use Auth;
use Illuminate\Support\Facades\Hash;
class StudentController extends Controller
{
    //? Index of Login Page

    public function LoginIndex(){
        
        return Inertia::render('Student/Login');
    }

    public function RegisterIndex(){
        return Inertia::render('Student/Register');
    }

    public function SaveStudent(Request $request){
        
        $data = $request->all();
        $password = Hash::make($data['password']);
        //dd($password);
        $table = new Student;
        $table->name= $data['name'];
        $table->email= $data['email'];
        $table->password= $password;
        $table->save();

        if($table){
            return redirect()->route('student-login-form');
        }
    }

    //? Login condition
    public function LogIntoDashboard(Request $request){

        $data = $request->all();
        if(Auth::guard('student')->attempt(['email'=>$data['email'], 'password'=> $data['password']])){
            return redirect()->route('student-dashboard');
        }else{
            return redirect()->route('student-login-form');
        }
    }

    //? Show Dashboard

    public function StudentDashboard(){

        $userinfo = Auth::guard('student')->user();

        //dd($userinfo->name);
        return Inertia::render('Student/Dashboard/Dashboard',compact('userinfo'));
    }
}
