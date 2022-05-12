import React from "react";
import Button from "../../Shered/Button/Button";

const BookCard = ({ book }) => {
  const { name, slied, time } = book;
  return (
    <div data-aos={slied}>
      <div class="card lg:w-96 sm:w-80 sm:mx-auto shadow-2xl mt-5 text-primary-content transition ease-in-out delay-150  hover:translate-y-6  hover:scale-100  duration-300">
        <div class="card-body">
          <h2 class="card-title justify-center text-primary">{name}</h2>
          <p className="text-center font-bold">
            {time.length > 0 ? (
              <p className="text-center font-bold">{time[0]} </p>
            ) : (
              <p className="text-center font-bold text-red-500">
                Try another date.
              </p>
            )}
          </p>
          <p className="text-center font-bold">
            {time.length} {time.length > 1 ? "spaces" : "space"} available.
          </p>
          <div class="card-actions justify-center">
            <button
              disabled={time.length === 0}
              className="btn btn-primary bg-gradient-to-r from-secondary to-primary outline-none text-white"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
