<!-- resources/views/auth/register.blade.php -->

<form method="POST" action="/auth/register">
    {!! csrf_field() !!}

    <div class="col-md-6">
        UserName
        <input type="text" name="username" value="{{ old('username') }}">
    </div>

    <div>
        Email
        <input type="email" name="email" value="{{ old('email') }}">
    </div>
    
    <div class="col-md-6">
        First Name
        <input type="text" name="firstName" value="{{ old('firstName') }}">
    </div>
    
    <div class="col-md-6">
        Second Name
        <input type="text" name="lastName" value="{{ old('lastName') }}">
    </div>

    <div>
        Password
        <input type="password" name="password">
    </div>

    <div class="col-md-6">
        Confirm Password
        <input type="password" name="password_confirmation">
    </div>

    <div>
        <button type="submit">Register</button>
    </div>
</form>