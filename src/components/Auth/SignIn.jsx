import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    const data = { phone, password };

    try {
      const response = await fetch('http://ec2-52-66-236-58.ap-south-1.compute.amazonaws.com:8201/naunidh/astro_signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        setResponseMessage('Sign-up successful!');
        // Optionally: save a token or navigate the user
      } else {
        setResponseMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setResponseMessage('Failed to connect to the server.');
    }
  };


  return (
    <div className="flex items-center justify-center h-screen relative bg-[url(/a2.jpg)] bg-cover bg-center bg-no-repeat">

      <div className="md:w-2/5 w-full mx-4">
      <div className="absolute inset-0 bg-black md:bg-opacity-10 bg-opacity-40"></div>

        <div className="flex min-h-full flex-1 flex-col justify-center bg-white bg-opacity-10 backdrop-blur-sm px-6 py-8 lg:px-8 shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px] rounded-md">
          <div className="sm:mx-auto sm:w-full w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="/N (2).png"
              className="mx-auto h-20 w-auto rounded-full"
            />
            <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 w-full ">
            <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    required
                    placeholder="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="phone"
                    className="block w-full focus:outline-none focus:shadow-lg bg-transparent rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between ">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white "
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-black hover:text-white duration-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    autoComplete="current-password"
                    className="block w-full focus:outline-none focus:shadow-lg rounded-md border-0 bg-transparent p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-600 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-white">
              Don’t have an account yet?
              <Link
                to={'/signup'}
                className="mx-1 font-semibold leading-6 text-yellow-500 hover:text-yellow-300 duration-300"
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
