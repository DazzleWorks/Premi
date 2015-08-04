<!-- resources/views/auth/reset.blade.php -->

<div>
    <h1>Premi - Reset password</h1>
</div>

<div>
    <form method="POST" action="/password/reset">
        {!! csrf_field() !!}
        <input type="hidden" name="token" value="{{ $token }}">

        <div>
            <label>Email: </label>
            <input type="email" name="email" value="{{ old('email') }}">
        </div>

        <div>
            <label>New password: </label>
            <input type="password" name="password">
        </div>

        <div>
            <label>Repeat password: </label>
            <input type="password" name="password_confirmation">
        </div>

        <div>
            <button type="submit">
                Reset Password
            </button>
        </div>
    </form>
</div>
