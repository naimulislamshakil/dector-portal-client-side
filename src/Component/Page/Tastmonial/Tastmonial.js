import React, { useEffect, useState } from "react";
import quare from "../../../assets/icons/quote.svg";
import TastmonialCard from "../../Page/Tastmonial/TastmonialCard";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Tastmonial = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("https://pacific-citadel-17977.herokuapp.com/tastmonial")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 md:align-middle">
        {reviews.map((review) => (
          <TastmonialCard key={review._id} review={review}></TastmonialCard>
        ))}
      </div>
    </section>
  );
};

export default Tastmonial;
