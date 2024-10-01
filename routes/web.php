<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\StudentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//? ADMIN ROUTE __ Start

Route::controller(AdminController::class)->group(function (){

   Route::prefix('admin')->group(function(){

        Route::get('/login', 'Index')->name('login-form');
        Route::post('/login/owner', 'Login');
        Route::get('/register', 'Register');
        Route::post('save/admin', 'CreateAdmin');
        Route::get('dashboard', 'Dashboard')->name('admin-dashboard')->middleware('admin');
        Route::get('/logout', "Logout");

        //? Teacher Crud

        Route::get('dashboard/teacher', 'TeacherCrud')->name('Teacherpage');
        Route::post('/save/teacher', "SaveTeacher");
        Route::get('/teacher/delete/{id}', "DeleteTeacher");
        Route::get('/teacher/edit/{id}', "EditTeacher");
        Route::post('/teacher/update/{id}', "UpdateTeacher");
        

        //? Stduent CRUD

        Route::get('/dashboard/student', 'StundetCrudIndex')->name('StudentPage');
        Route::post('/student/save', "StoreStudent");
        Route::get('/student/edit/{id}', 'StudentEdit');
        Route::post('/student/update/{id}', 'StudentUpdate');
        Route::get('/student/delete/{id}', 'StudentDelete');

        //? Parents CRUD

        Route::get('/dashboard/parents', 'ParentCrudIndex')->name('ParentPage');
        Route::post('/parent/save', "StoreParent");
        Route::get('/parent/delete/{id}', 'ParentDelete');
        Route::get('/parent/edit/{id}', 'ParentEdit');
        Route::post('/parent/update/{id}', 'ParentUpdate');


   });
});

//? ADMIN ROUTE __ End


//? TEACHER ROUTE __ Start

Route::controller(TeacherController::class)->group(function(){
    Route::prefix('teacher')->group(function(){
        Route::get('/register', 'Register');
        Route::post('/register/store', 'Registration');
        Route::get('/login', 'Login')->name('teacher-login-form');
        Route::post('/login/into', 'LoginInto');
        Route::get('dashboard', 'Dashboard')->name('teacher-dashboard')->middleware('teacher');
    });
});
//? TEACHER ROUTE __End 


//? STUDENT ROUTE __start

Route::controller(StudentController::class)->group(function(){
    Route::prefix('student')->group(function(){
        Route::get('/login', 'LoginIndex')->name('student-login-form');
        Route::get('/register', 'RegisterIndex');
        Route::post('/save/student', 'SaveStudent');
        Route::post('/logInto', "LogIntoDashboard");
        Route::get('/dashboard', 'StudentDashboard')->name('student-dashboard')->middleware('student');
    });
});
//? STUDENT ROUTE __end

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
