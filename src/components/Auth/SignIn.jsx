import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setIsLoading(true); // Set loading state

    const data = {
      phone: phone,
      password: password,
    };

    try {
      const response = await fetch('https://naunidh.shreeradhatechnology.com/naunidh/astro_signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage('Sign-in successful!');
        console.log(result);
      } else {
        setResponseMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setResponseMessage('Failed to connect to the server.');
      console.log(error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="md:w-2/5 w-full mx-4">
        <div className="flex min-h-full flex-1 flex-col justify-center bg-white px-6 py-8 lg:px-8 shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px] rounded-md">
          <div className="sm:mx-auto sm:w-full w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="/N (2).png"
              className="mx-auto h-20 w-auto rounded-full"
            />
            <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 w-full ">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className="block w-full focus:outline-none focus:shadow-lg bg-white rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div >
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                 className="block w-full focus:outline-none focus:shadow-lg rounded-md border-0 bg-white p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="text-right">
                <Link to="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-semibold rounded-md px-3 py-2 hover:bg-indigo-500 disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>

              {responseMessage && (
                <div className="mt-4 text-center text-sm text-red-500">
                  {responseMessage}
                </div>
              )}
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don’t have an account yet?
              <Link
                to={'/signup'}
                className="mx-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignIn;
