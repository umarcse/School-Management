<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Admin;
use App\Models\TeacherDb;
use App\Models\Studentdb;
use App\Models\Parentdb;
use Auth;

class AdminController extends Controller
{
    //

    public function Index(){
        
        return Inertia::render('Admin/Login');
    }

    public function Login(Request $request){
        
       $data = $request->all();
       
       if(Auth::guard('admin')->attempt(['email'=> $data['email'], 'password'=> $data['password']])){
            //$dt = Auth::guard('admin');
            return redirect()->route('admin-dashboard');
       }else{
        return Inertia::render('Admin/Login');
       }
    }

    //? Admin Dashboard

    public function Register(){

        return Inertia::render('Admin/Register');
        
    }

    //? Create Admin

    public function CreateAdmin(Request $request){

        $data = $request->all();
        $password = Hash::make($data['password']);
        //dd($password);
        $table = new Admin;
        $table->name= $data['name'];
        $table->email= $data['email'];
        $table->password= $password;
        $table->save();

        if($table){
            return redirect()->route('login-form');
        }
    }

    //? Show Dashboard

    public function Dashboard(){

        $data = Auth::guard('admin')->user();

        return Inertia::render('Admin/Dashboard/Dashboard',compact('data'));
    }

    //? Admin Logout 

    public function Logout() {
        //dd('okay');
        Auth::guard('admin')->logout();
        return redirect()->route('login-form');

    }

    //? Teacher Crud
    public function TeacherCrud(){

        $list = TeacherDb::all();
        return Inertia::render('Admin/Dashboard/TeacherPage', compact('list'));
    }

    public function SaveTeacher(Request $request){

        $table = new TeacherDb;
        $table->name= $request->name;
        $table->teacher_id= $request->id;
        $table->subject = $request->subject;
        $table->class = $request->class;
        $table->phone = $request->phone;
        $table->address = $request->address;
        $table->save();

        if($table){
             return redirect()->back()->with('status', 'Added Successfully');
        }

    }

    //? Delete teacher from db

    public function DeleteTeacher($id){
        
        $table = TeacherDb::destroy($id);

        return redirect()->back()->with('status', "Deleted Successfully");
    }

    public function EditTeacher($id){
        
        $item= TeacherDb::find($id);
        $list = TeacherDb::all();
        return Inertia::render('Admin/Dashboard/TeacherPage', compact('item', 'list'));

    }

    public function UpdateTeacher(Request $request, $id){
        
        $table = TeacherDb::find($id);
        $table->name = $request->name;
        $table->teacher_id = $request->id;
        $table->class = $request->class;
        $table->subject = $request->subject;
        $table->phone = $request->phone;
        $table->address = $request->address;
        $table->save();  
        return redirect()->route('Teacherpage')->with('status', 'Updated Successfully');
    }

    //? Student List Index Page 

    public function StundetCrudIndex(){

        $list = Studentdb::all();

       // dd($list);
        return Inertia::render('Admin/Dashboard/StudentPage', compact('list'));
    }

    //? Student Store 

    public function StoreStudent(Request $request){
        $table = new Studentdb;

        $table->name = $request->name;
        $table->student_id = $request->id;
        $table->class = $request->class;
        $table->phone = $request->phone;
        $table->address = $request->address;
        $table->save();

        return redirect()->route('StudentPage')->with('status', 'Successfully Added');
    }

    //? Student Edit

    public function StudentEdit($id){
        
        $targetData = Studentdb::find($id);

        return redirect()->back()->with('data', $targetData);

    }

    //? Student Update

    public function StudentUpdate(Request $request, $id){
       
        $table = Studentdb::find($id);
        $table->name = $request->name;
        $table->student_id = $request->id;
        $table->class = $request->class;
        $table->phone = $request->phone;
        $table->address = $request->address;
        $table->save();
        return redirect()->route('StudentPage')->with('status', 'Successfully Updated');
    }
    

    //? Destroy Student Record

    public function StudentDelete($id){
        
        $table = Studentdb::destroy($id);

        return redirect()->back()->with('status', 'Successfully Deleted');
    }

    //? Parent List && INDEX PAGE

    public function ParentCrudIndex(){
        
        
        $students = Studentdb::all();
        $parents = Parentdb::orderBy('id','desc')->get();
        return Inertia::render('Admin/Dashboard/ParentPage',compact('students','parents'));
    }

    public function StoreParent(Request $request){
        
        $table = new Parentdb;
        $table->name = $request->name;
        $table->children = $request->children;
        $table->phone = $request->phone;
        $table->address = $request->address;
        $table->save();
        return redirect()->back()->with('status', "Successfully Added");
    }

    public function ParentDelete($id){

        $table = Parentdb::destroy($id);
        if($table){

            return redirect()->back()->with('status', 'Successfully Deleted');
        }
    }

    public function ParentEdit($id){
        
        $targetData = Parentdb::find($id);
        return redirect()->back()->with('data', $targetData);
    }

    public function ParentUpdate(Request $request, $id){
        dd($request->all(), $id);
    }
   
}
