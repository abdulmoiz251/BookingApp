<?php

use Illuminate\Http\Request;
use App\Property;

Route::get('properties', 'PropertyController@index');
Route::get('properties/{id}', 'PropertyController@show');
Route::post('addproperty', 'PropertyController@store');
