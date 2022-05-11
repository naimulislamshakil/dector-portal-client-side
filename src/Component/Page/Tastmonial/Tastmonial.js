import React from "react";
import quare from "../../../assets/icons/quote.svg";
import person1 from "../../../assets/images/people1.png";
import person2 from "../../../assets/images/people2.png";
import person3 from "../../../assets/images/people3.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Tastmonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      location: "Califonia",
      review: "",
      img: person1,
      slied: "",
    },
    {
      id: 1,
      name: "",
      location: "",
      review: "",
      img: person2,
      slied: "",
    },
    {
      id: 1,
      name: "",
      location: "",
      review: "",
      img: person3,
      slied: "",
    },
  ];
  return (
    <section className="mx-10">
      <div className="flex justify-between">
        <div data-aos="zoom-out-right">
          <div className="mt-5">
            <h2 className="text-primary font-bold text-xl">Testimonial</h2>
            <h3 className="text-3xl">What Our Patients Says</h3>
          </div>
        </div>
        <div data-aos="zoom-out-left">
          <img className="w-3/4" src={quare} alt="" />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Tastmonial;
