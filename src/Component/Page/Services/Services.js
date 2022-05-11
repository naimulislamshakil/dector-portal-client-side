import React from "react";
import Fluoride from "../../../assets/images/fluoride.png";
import Cavity from "../../../assets/images/cavity.png";
import Teeth from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const infos = [
    {
      id: 1,
      img: Fluoride,
      titel: "Fluoride Treatment",
      text: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
      sliad: "fade-right",
    },
    {
      id: 2,
      img: Cavity,
      titel: "Cavity Filling",
      text: "Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection. A filling seals a hole, or cavity, in the tooth.",
      sliad: "fade-up",
    },
    {
      id: 3,
      img: Teeth,
      titel: "Teeth Whitening",
      text: "Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile.",
      sliad: "fade-left",
    },
  ];
  return (
    <div className="my-16">
      <h2 className="text-primary text-center text-lg font-bold">
        OUR SERVICES
      </h2>
      <h2 className="text-3xl font-bold text-accent text-center mt-3">
        Services We Provide
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10 my-5">
        {infos.map((info) => (
          <ServiceCard key={info.id} info={info}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
