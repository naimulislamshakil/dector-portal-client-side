import React from "react";
import quare from "../../../assets/icons/quote.svg";
import person1 from "../../../assets/images/people1.png";
import person2 from "../../../assets/images/people2.png";
import person3 from "../../../assets/images/people3.png";
import TastmonialCard from "../../Page/Tastmonial/TastmonialCard";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Tastmonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      location: "Califonia",
      review:
        "Director Nelson weaves an intricate, entertaining, socially relevant and extremely likable film in his latest film.. Doctor. A host of excellent artistes and a magical musical score by Aniruddh adds to the charm.",
      img: person1,
      slied: "fade-up",
    },
    {
      id: 2,
      name: "Richard N Nees",
      location: "New York",
      review:
        "Siva Karthikeyan is the biggest highlight of the film as he showcases a different side to his personality. He as an army doctor evokes good comedy, drama, and carries the film on his shoulder. ",
      img: person2,
      slied: "fade-down",
    },
    {
      id: 3,
      name: "Tina D McClure",
      location: "Arizona",
      review:
        "Well scripted Dark Humour Comedy. When it comes to the comedy genre, we shouldn't expect the logics. So I strongly say there was no lacks. Siva and Vinay character designed very well.",
      img: person3,
      slied: "fade-up-right",
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
        {reviews.map((review) => (
          <TastmonialCard key={review.id} review={review}></TastmonialCard>
        ))}
      </div>
    </section>
  );
};

export default Tastmonial;
