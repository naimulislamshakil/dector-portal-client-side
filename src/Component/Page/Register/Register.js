import React from "react";

const Register = () => {
  return (
    <div class="container mx-auto ">
      <div class="flex justify-center px-6 my-12">
        <div class="w-full lg:w-7/12 p-5 rounded-lg lg:rounded-l-none shadow-2xl">
          <h3 class="pt-4 text-2xl text-center font-bold">
            Create an Account!
          </h3>
          <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded ">
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="firstName"
                >
                  First Name
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight  text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-1 focus:text-secondary"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="lastName"
                >
                  Last Name
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-1 focus:text-secondary"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="email"
              >
                Email
              </label>
              <input
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-1 focus:text-secondary"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:ring-1 focus:text-secondary"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p class="text-xs italic text-red-500">
                  Please choose a password.
                </p>
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="c_password"
                >
                  Confirm Password
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-1 focus:text-secondary"
                  id="c_password"
                  type="password"
                  placeholder="******************"
                />
              </div>
            </div>
            <div class="mb-6 text-center">
              <button
                class="w-full px-4 py-2 font-bold text-white  rounded-full bg-gradient-to-r from-secondary to-primary btn btn-primary focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register Account
              </button>
            </div>
            <div class="divider">OR</div>
            <div class="text-center">
              <a
                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div class="text-center">
              <a
                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="./index.html"
              >
                Already have an account? Login!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
