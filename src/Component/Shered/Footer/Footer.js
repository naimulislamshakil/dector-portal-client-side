import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Footer = () => {
  return (
    <div className="my-10 bg-footer">
      <div data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="">
            <h2 className="text-lg font-bold text-primary text-center">
              SERVICES
            </h2>
            <p className="text-center text-lg">
              <Link to="/">Emergency Checkup</Link>
            </p>
            <p className="text-center text-lg">
              <Link to="/">Monthly Checkup</Link>
            </p>
            <p className="text-center text-lg">
              <Link to="/">Weekly Checkup</Link>
            </p>
            <p className="text-center text-lg">
              <Link to="/">Deep Checkup</Link>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-primary text-center">
              ORAL HEALTH
            </h2>
            <p className="text-center text-lg">
              <Link to="/">Fluoride Treatment</Link>
            </p>
            <p className="text-center text-lg">
              <Link to="/">Cavity Filling</Link>
            </p>
            <p className="text-center text-lg">
              <Link to="/">Teath Whitening</Link>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-primary text-center">
              OUR ADDRESS
            </h2>
            <p className="text-center text-lg">
              2729 Clinton Street,Little Rock <br />
              Arkansas-72205
            </p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-md text-center">
            Copyright {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
