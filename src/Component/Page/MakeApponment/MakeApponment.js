import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const MakeApponment = () => {
  return (
    <section data-aos="zoom-out-left">
      <div
        className="my-20 flex flex-col lg:flex-row justify-center items-center"
        style={{ background: `url(${appointment})` }}
      >
        <div className="flex-1 hidden lg:block">
          <img className="mt-[-150px]" src={doctor} alt="" />
        </div>
        <div className="flex-1 flex flex-col pr-10 sm:pl-10 sm:pb-10 sm:pt-10">
          <h2 className="text-xl font-bold text-primary">Appointment</h2>
          <h2 className="text-4xl pt-3 text-white">
            Make an appointment Today
          </h2>
          <p className="py-6 text-white text-lg">
            Getting appointments with Doctors in USA is mainly based on physical
            visiting or by a phone call with the receptionist of the hospital.
            But was not a practicing phenomenon to book and get an appointment
            for online visiting in USA. We, MEDICSBD have initiated the
            opportunity of doctor appointments online in USA. We bring a
            complete online web-based (also have an app) telemedicine service in
            USA. We have visitors from various parts of the world as well.
          </p>
          <Link
            to="/appointment"
            className="btn btn-primary bg-gradient-to-r from-secondary to-primary outline-none w-2/4 text-white"
          >
            Make Apponment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MakeApponment;
