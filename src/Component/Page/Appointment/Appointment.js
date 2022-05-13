import React, { useState } from "react";
import "react-day-picker/dist/style.css";
import AppoinmentCard from "./AppoinmentCard";
import AppoinmentHero from "./AppoinmentHero";
import Footer from "../../Shered/Footer/Footer";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppoinmentHero date={date} setDate={setDate}></AppoinmentHero>
      <AppoinmentCard date={date}></AppoinmentCard>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
