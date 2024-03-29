import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      class="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-indigo-600
    to-blue-400
  "
    >
      <div class="px-40 py-20 bg-white rounded-md shadow-xl">
        <div class="flex flex-col items-center">
          <h1 class="font-bold text-secondary text-9xl">404</h1>

          <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span class="text-red-500">Oops!</span> Page not found
          </h6>

          <p class="mb-8 text-center text-gray-500 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <Link
            to="/"
            class="btn btn-primary bg-gradient-to-r from-secondary to-primary outline-none text-white"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
