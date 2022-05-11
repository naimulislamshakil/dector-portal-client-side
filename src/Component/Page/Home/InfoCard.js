import React from "react";

const InfoCard = ({ info }) => {
  const { img, titel, text, bgColor } = info;
  return (
    <div class={`card lg:card-side shadow-xl ${bgColor} text-white`}>
      <figure>
        <img className="w-3/4 ml-10" src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{titel}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
