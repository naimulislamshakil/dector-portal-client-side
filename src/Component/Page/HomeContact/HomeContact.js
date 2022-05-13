import React from "react";
import contact from "../../../assets/images/appointment.png";
import Button from "../../Shered/Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const HomeContact = () => {
  return (
    <section data-aos="fade-down-left">
      <div style={{ background: `url(${contact})` }} className=" pt-5">
        <h2 className="text-primary text-center font-bold text-lg">
          Contact Us
        </h2>
        <h2 className="text-3xl text-white text-center">
          Stay connected with us
        </h2>
        <div className="flex flex-col w-2/4 py-20 mx-auto">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered mt-3"
          />
          <input
            type="text"
            placeholder="Subject..."
            className="input input-bordered mt-3"
          />

          <textarea
            rows="10"
            cols="50"
            type="text"
            placeholder="Enter Your Massage.."
            className="input input-bordered mt-3 mb-3"
          />
          <div className="flex justify-center">
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
