import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Shered/Button/Button";

const Login = () => {
  return (
    <div class="flex items-center justify-center  min-h-screen bg-gray-100">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg w-2/4">
        <h3 class="text-2xl font-bold text-center capitalize">
          Login to your account
        </h3>
        <form className="">
          <div class="mt-4">
            <div>
              <input
                type="text"
                placeholder="Email"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:text-secondary"
              />
            </div>
            <div class="mt-4">
              <input
                type="password"
                placeholder="Password"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:text-secondary"
              />
            </div>
            <div class="flex items-center justify-center mt-5">
              <Button>Login</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
