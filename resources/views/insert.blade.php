@extends('layouts.base')
 
@section('body')
 
{!! Form::open(array('url' => url('project/insert'), 'method'=> 'POST', 'class' => 'form-signin')) !!}
    <h2 class="form-signin-heading"><span class="glyphicon glyphicon-pencil"></span> Project form</h2>
    @if(Session::has('errorMessage'))
        <p>{!! Session::get('errorMessage') !!}</p>
    @elseif (isset($errorMessage))
        <p>{!! $errorMessage !!}</p>
    @endif
 
    {!! Form::text('username', Input::old('username'), array('class' => 'form-control', 'placeholder' =>'Username', 'required' => 'true' )) !!}
    {!! Form::text('name', Input::old('name'), array('class' => 'form-control', 'placeholder' =>'Name', 'required' => 'true'  )) !!}
    {!! Form::text('presentation', Input::old('presentation'), array('class' => 'form-control', 'placeholder' =>'Presentation', 'required' => 'true'  )) !!}
    {!! Form::submit('Register', array('class' => 'btn btn-lg btn-primary btn-block')) !!}
{!! Form::close() !!}
@stop

