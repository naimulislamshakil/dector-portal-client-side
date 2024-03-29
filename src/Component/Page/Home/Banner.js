import React from "react";
import chair from "../../../assets/images/chair.png";
import Button from "../../Shered/Button/Button";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-img">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl sm:w-full"
          alt=""
        />
        <div className="mr-10">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. <br /> In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
