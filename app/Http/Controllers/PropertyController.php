<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Property;

class PropertyController extends Controller
{
  public function index()
  {
      return Property::all();
  }

  public function show($id)
  {
      return Property::find($id);
  }

  public function store(Request $request)
  {
      $article = Property::create($request->all());
      return response()->json('Record created successfully!', 201);
  }

  public function update(Request $request, $id)
  {
      $article = Property::findOrFail($id);
      $article->update($request->all());

      return response()->json($article, 200);
  }

  public function delete(Request $request, $id)
  {
      $article = Property::findOrFail($id);
      $article->delete();

      return response()->json(null, 204);
  }
}
