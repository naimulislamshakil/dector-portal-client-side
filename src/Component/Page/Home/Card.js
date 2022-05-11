import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Card = () => {
  const infos = [
    {
      id: 1,
      img: clock,
      titel: "Opening Hours",
      text: "8.00 AM - 9.00PM",
      bgColor: "bg-gradient-to-r from-secondary to-primary",
      sliad: "fade-right",
    },
    {
      id: 2,
      img: marker,
      titel: "Visit our location",
      text: "Brooklyn, NY 10036, United States",
      bgColor: "bg-accent",
      sliad: "fade-down",
    },
    {
      id: 3,
      img: phone,
      titel: "Contact us now",
      text: "+000 123 456789",
      bgColor: "bg-gradient-to-r from-secondary to-primary",
      sliad: "fade-left",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10 my-5">
      {infos.map((info) => (
        <InfoCard key={info.id} info={info}></InfoCard>
      ))}
    </div>
  );
};

export default Card;
