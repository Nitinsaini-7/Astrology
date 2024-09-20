import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen relative bg-[url(/a2.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="md:w-2/5 w-full mx-4">
      <div className="absolute inset-0 bg-black md:bg-opacity-10 bg-opacity-40"></div>
        <div className=" relative flex w-full  min-h-full flex-1 flex-col justify-center backdrop-blur-sm bg-white bg-opacity-10 px-6 py-8 lg:px-8 shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px] rounded-md">
          <div className="sm:mx-auto sm:w-full w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="/N (2).png"
              className="mx-auto h-20 w-auto rounded-full"
            />
            <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Create an account
            </h2>
          </div>

          <div className="mt-10 w-full">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    autoComplete="name"
                    className="block w-full focus:outline-none focus:shadow-lg bg-transparent rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="tel"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Mobile No.
                </label>
                <div className="mt-2">
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    placeholder="Mobile No."
                    autoComplete="mobile"
                    className="block w-full focus:outline-none focus:shadow-lg bg-transparent rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    autoComplete="current-password"
                    className="block w-full focus:outline-none focus:shadow-lg bg-transparent rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-600 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-white">
              Already have an account?
              <Link
                to={"/signin"}
                className="mx-1 font-semibold leading-6 text-yellow-500 hover:text-yellow-300 duration-200"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
