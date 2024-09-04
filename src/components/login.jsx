import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../appwrite/appwrite';1
import { Toaster, toast } from 'react-hot-toast';
import { OAuthProvider } from 'appwrite';

const Login = () => {
  const baseUrl = window.location.origin + "/sankritisync";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


 const loginUser = async (e)=>{
    e.preventDefault();
    try {
        await account.createEmailPasswordSession(
            email,
            password
        )
        toast.success('Successfully logged in!');
        setTimeout(() => {
            navigate(`/profile`);
          }, 2000);
     } catch (error) {
        console.log(error);
        toast.error('Login failed. Please check your credentials.');
     }
    
 }

  const handleCreateAccount = () => {
    // Navigate to the Create Account page
    navigate(`/register`);
  };

  const oauthSignUp = async ()=>{
    account.createOAuth2Session(
      OAuthProvider.Google,
      `${baseUrl}/profile`,
      `${baseUrl}/register`,
    )
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Toaster/>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login to Your Account</h2>
        <form onSubmit={loginUser} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <input
                  type="checkbox"
                  id="show-password"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="mr-2"
                />
                <label htmlFor="show-password" className="text-sm text-gray-600">
                  Show Password
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember_me" className="block ml-2 text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={oauthSignUp}
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            <span className="sr-only">Sign in with Google</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 12.207c0-.638-.057-1.25-.164-1.838H12v3.476h5.951c-.257 1.37-1.013 2.525-2.136 3.307v2.75h3.451c2.02-1.856 3.181-4.593 3.181-7.695z"></path>
              <path d="M12 23c3.222 0 5.914-1.072 7.885-2.9l-3.45-2.75c-1.134.764-2.578 1.221-4.435 1.221-3.413 0-6.301-2.31-7.337-5.416H1.299v3.464C3.264 20.312 7.308 23 12 23z"></path>
              <path d="M4.663 14.154a7.456 7.456 0 0 1-.391-2.385c0-.828.143-1.63.391-2.385v-3.464H1.299C.471 7.356 0 9.103 0 10.769c0 1.666.471 3.414 1.299 5.081l3.364-1.696z"></path>
              <path d="M12 4.77c1.863 0 3.537.642 4.857 1.898l3.64-3.64C17.913 1.663 15.222.591 12 .591 7.308.591 3.264 3.279 1.299 6.874l3.364 1.696c1.035-3.106 3.923-5.416 7.337-5.416z"></path>
            </svg>
          </button>

          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            <span className="sr-only">Sign in with GitHub</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.164c-3.338.724-4.043-1.416-4.043-1.416-.546-1.387-1.334-1.758-1.334-1.758-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.23 1.84 1.23 1.07 1.835 2.806 1.305 3.492.998.11-.776.42-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.382 1.235-3.222-.124-.303-.535-1.525.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.4 3.006-.404 1.023.004 2.05.138 3.008.404 2.29-1.553 3.296-1.23 3.296-1.23.653 1.651.242 2.873.118 3.176.769.84 1.235 1.912 1.235 3.222 0 4.609-2.806 5.62-5.48 5.92.433.373.823 1.103.823 2.222v3.293c0 .318.218.691.824.574C20.565 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z"></path>
            </svg>
          </button>

          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            <span className="sr-only">Sign in with Facebook</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82V14.706h-3.017v-3.704h3.017V8.4c0-2.99 1.791-4.623 4.508-4.623 1.281 0 2.623.227 2.623.227v2.883H17.99c-1.576 0-2.063.979-2.063 1.987v2.428h3.534l-.565 3.704h-2.969V24h5.824c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
            </svg>
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={handleCreateAccount}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Create an account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
