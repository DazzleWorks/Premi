<?php
namespace Premi\Http\Controllers\Auth;

use Validator;
use Premi\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use Premi\Model\User;
use Socialite;

/**
 * @file: app/Http/Controller/Auth/AuthController.php
 * @author: DazzleWorks
 * @date: 2015-06-24
 * @description: This class handles the registration of new users, as well as 
 *               the authentication of existing users.
 * 
 * +---------+------------+---------------+----------------------+-------------+
 * | Version |     Date   |  Programmer   |        Modify        | Description |
 * +---------+------------+---------------+----------------------+-------------+
 * |  1.0.0  | 2015-06-24 |Suierica Bogdan| class AuthController |create class | 
 * |         |            |               |                      |and its      |
 * |         |            |               |                      |functions    |
 * +---------+------------+---------------+----------------------+-------------+
 */

class AuthController extends Controller
{
    use AuthenticatesAndRegistersUsers;
    
    /**
     * Create a new authentication controller instance.
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'getLogout']);
    }

    /**
     * Get a validator for an incoming registration request
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        $rules = [
            'username' => 'required|max:255|unique:users',
            'email' => 'required|email|max:255|unique:users',
            'firstName' => 'required|max:255|alpha',
            'lastName' => 'required|max:255|alpha',
            'password' => 'required|confirmed|min:8',
        ]; 
        
        return Validator::make($data, $rules);
    }

    /**
     * Create a new user instance after a valid registration
     * @param  array  $data
     * @return Premi\Model\User
     */
    protected function create(array $data)
    {
        return User::create([
            'username' => $data['username'],
            'email' => $data['email'],
            'firstName' => $data['firstName'],
            'lastName' => $data['lastName'],
            'password' => bcrypt($data['password']),
        ]);
    }
    
    /**
     * Redirect the user to the Facebook authentication page.
     * @return Illuminate\Http\Response
     */
    public function redirectToFacebook()
    {
        return Socialite::driver('facebook')->redirect();
    }
    
    /**
     * Obtain the user information from Facebook.
     * @return Illuminate\Http\Response
     */
    public function handleFacebookCallback()
    {
        $user = Socialite::driver('facebook')->user();

        print_r($user);
        //$user->token;
    }
    
     /**
     * Redirect the user to the Facebook authentication page.
     * @return Illuminate\Http\Response
     */
    public function redirectToGithub()
    {
        return Socialite::driver('github')->redirect();
    }
    
    /**
     * Obtain the user information from Facebook.
     * @return Illuminate\Http\Response
     */
    public function handleGithubCallback()
    {
        $user = Socialite::driver('github')->user();

        print_r($user);
        //$user->token;
        return response()->json(['status' => true]);
    }
}
