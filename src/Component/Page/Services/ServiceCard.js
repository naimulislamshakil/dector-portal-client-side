import React from "react";

const ServiceCard = ({ info }) => {
  const { img, titel, text } = info;
  return (
    <div class="card lg:card-side shadow-2xl">
      <div className="flex flex-col">
        <figure>
          <img className="w-1/4 ml-10 mt-3" src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="font-bold text-xl text-center">{titel}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
