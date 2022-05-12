import React from "react";
import "react-day-picker/dist/style.css";
import AppoinmentCard from "./AppoinmentCard";
import AppoinmentHero from "./AppoinmentHero";
import Footer from "../../Shered/Footer/Footer";

const Appointment = () => {
  return (
    <div>
      <AppoinmentHero></AppoinmentHero>
      <AppoinmentCard></AppoinmentCard>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
