import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { loginUser } from '../../axios';

function Login({setUser}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault();
    
        
        if (!email || !password) {
          setError('Please enter both email and password.');
          return;
        }

        loginUser(email, password).then((response)=> {
          setError(null);
          localStorage.setItem('user', JSON.stringify(response.data.user))
          setUser(response.data.user)
          alert(`Login successful! Welcome ${response.data.user.name}`)
          navigate('/events')
        }).catch((err)=> {
          console.error('login failed', err)
          setError(err.response?.data?.msg || 'Invalid email or password. Please try again.')
        })

        

    }



  return (
    <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
    
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
    
              {error && <p className="text-red-500 text-sm">{error}</p>}
    
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-indigo-600 hover:underline">
                  Forgot password?
                </a>
              </div>
    
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition-colors"
              >
                Log In
              </button>
            </form>
            <p className="mt-4 text-sm text-center">
                Don’t have an account?{' '}
                <Link to="/signup" className="text-blue-500 hover:underline">
                Sign up here
                </Link>
</p>

          </div>
        </div>
        
        </>
  )
}

export default Login