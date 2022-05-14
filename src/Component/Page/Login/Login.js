import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.config";
import Loading from "../../Shered/Loading/Loading";
import SocialMedia from "../../Shered/SocialMedia/SocialMedia";

const Login = () => {
  const [signInWithEmailAndPassword, loading, user] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const fromHandeler = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/");
  }

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-2/4">
        <h3 className="text-2xl font-bold text-center capitalize">
          Login to your account
        </h3>
        <form onSubmit={fromHandeler}>
          <div className="mt-4">
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:text-secondary"
              />
            </div>
            <div className="mt-4">
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:text-secondary"
                required
              />
            </div>
            <div className="flex items-center justify-center mt-5">
              <input
                className="w-full btn btn-primary px-4 py-2 font-bold text-white rounded-full bg-gradient-to-r from-secondary to-primary focus:outline-none focus:shadow-outline"
                type="submit"
                value="LogIn Account"
                required
              />
            </div>

            <div className="text-center my-6">
              <Link
                className="inline-block text-sm text-blue-500 align-baseline font-bold hover:text-blue-800"
                to="/login"
              >
                No Account Yet! Register!
              </Link>
            </div>

            <div className="divider">OR</div>
            <div>
              <SocialMedia></SocialMedia>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
