import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.config";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  const manuItem = (
    <>
      <li>
        <Link className="font-bold hover:bg-primary" to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link className="font-bold hover:bg-primary" to={"/appointment"}>
          Appointment
        </Link>
      </li>
      <li>
        <Link className="font-bold hover:bg-primary" to={"/review"}>
          Review
        </Link>
      </li>
      <li>
        <Link className="font-bold hover:bg-primary" to={"/contact"}>
          Contact
        </Link>
      </li>
      <li>
        <Link className="font-bold hover:bg-primary" to={"/about"}>
          About
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link className="font-bold hover:bg-primary" to={"/login"}>
              Booking Appointment
            </Link>
          </li>
          <li>
            <Link
              onClick={logout}
              className="font-bold hover:bg-primary"
              to={"/login"}
            >
              LogOut
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link className="font-bold hover:bg-primary" to={"/login"}>
              Login
            </Link>
          </li>
          <li>
            <Link className="font-bold hover:bg-primary" to={"/singup"}>
              Register
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {manuItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          DOCTOR PORTAL
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{manuItem}</ul>
      </div>
    </div>
  );
};

export default Header;
