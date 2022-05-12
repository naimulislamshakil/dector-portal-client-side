import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from "../../../assets/images/bg.png";
import { format } from "date-fns";

const AppoinmentHero = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div class="hero min-h-screen" style={{ background: `url(${bg})` }}>
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div className="mr-10">
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
            ></DayPicker>
          </div>
        </div>
      </div>
      <div>
        {date ? (
          <h2 className="text-primary text-lg text-center font-bold my-5">
            Available Appointments on {format(date, "PP")}
          </h2>
        ) : (
          <h2 className="text-primary text-lg text-center font-bold my-5">
            Seclect a Date!
          </h2>
        )}
      </div>
    </div>
  );
};

export default AppoinmentHero;
