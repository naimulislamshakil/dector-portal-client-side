import React from "react";
import "../../../Style.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const InfoCard = ({ info }) => {
  const { img, titel, text, bgColor, sliad } = info;
  return (
    <div data-aos={sliad}>
      <div
        class={`card lg:card-side shadow-xl ${bgColor} transition ease-in-out delay-150  hover:translate-y-6  hover:scale-100  duration-300 text-white`}
      >
        <figure>
          <img className="w-3/4 sm:w-16 sm:mt-3 ml-10" src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{titel}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
