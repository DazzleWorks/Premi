<?php
namespace Illuminate\Foundation\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

trait RegistersUsers
{
    use RedirectsUsers;
    
    /**
     * Handle a registration request for the application.
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function postRegister(Request $request)
    {
        $validator = $this->validator($request->all());
        if ($validator->fails()) {
            $messages = $validator->messages();
            return response($messages);
        }
        else {
            $this->create($request->all());
            $credentials = $this->getCredentials($request);
            Auth::attempt($credentials, $request->has('remember'));
            $username = Auth::user()->username;
            File::makeDirectory('storage/'.$username);
            return response()->json(['username' => $username]);
        }
    }
}