import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.config";
import Loading from "../../Shered/Loading/Loading";
import SocialMedia from "../../Shered/SocialMedia/SocialMedia";
import "./Register.css";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const navigate = useNavigate();

  const registerHandel = async (event) => {
    event.preventDefault();
    const fn = event.target.fn.value;
    const ln = event.target.ln.value;
    const name = fn + ln;
    const email = event.target.email.value;
    const password = event.target.pass1.value;
    const pass1 = event.target.pass2.value;
    if (password === pass1) {
      document.getElementById("pass-text").style.display = "none";
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      await sendEmailVerification();
    } else {
      document.getElementById("pass-text").style.display = "block";
    }
  };
  if (user) {
    navigate("/");
  }

  if (loading || updating || sending) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mx-auto ">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full lg:w-7/12 p-5 rounded-lg lg:rounded-l-none shadow-2xl">
          <h3 className="pt-4 text-2xl text-center font-bold">
            Create an Account!
          </h3>
          <form
            onSubmit={registerHandel}
            className="px-8 pt-6 pb-8 mb-4 bg-white rounded "
          >
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  name="fn"
                  className="w-full px-3 py-2 text-sm leading-tight  text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-1 focus:text-secondary"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  name="ln"
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-1 focus:text-secondary"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="email"
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-1 focus:text-secondary"
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  name="pass1"
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:ring-1 focus:text-secondary"
                  id="password"
                  type="password"
                  placeholder="******************"
                  required
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="c_password"
                >
                  Confirm Password
                </label>
                <input
                  name="pass2"
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-1 focus:text-secondary"
                  id="c_password"
                  type="password"
                  placeholder="******************"
                  required
                />
              </div>
            </div>
            <div className="text-center mb-5">
              <p
                id="pass-text"
                className="text-sm italic text-red-500 pass-text"
              >
                Please Not Match!
              </p>
            </div>
            <div className="form-control mb-5">
              <label className="flex cursor-pointer">
                <input
                  type="checkbox"
                  onClick={() => setAgree(!agree)}
                  // checked="checked"
                  className="checkbox mr-5 checkbox-primary"
                />
                <span
                  className={`label-text ${
                    agree ? "" : "text-red-500"
                  } font-bold text-sm`}
                >
                  Accept Doctor <b>Protal Terms</b> and <b>Conditions</b>
                </span>
              </label>
            </div>
            <div className="mb-6 text-center">
              <input
                disabled={!agree}
                className="w-full px-4 py-2 font-bold text-white  rounded-full bg-gradient-to-r from-secondary to-primary btn btn-primary focus:outline-none focus:shadow-outline"
                type="submit"
                value="Register Account"
              />
            </div>
            <div className="text-center">
              <Link
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                to="#"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="text-center">
              <Link
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                to="/login"
              >
                Already have an account? Login!
              </Link>
            </div>
            <div className="divider">OR</div>

            <SocialMedia></SocialMedia>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
