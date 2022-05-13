import React from "react";

const BookCard = ({ book, setTreatment }) => {
  const { name, slied, time } = book;
  return (
    <div data-aos={slied}>
      <div className="card lg:w-96 sm:w-80 sm:mx-auto shadow-2xl mt-5 text-primary-content transition ease-in-out delay-150  hover:translate-y-6  hover:scale-100  duration-300">
        <div className="card-body">
          <h2 className="card-title justify-center text-primary">{name}</h2>
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
          <div className="card-actions justify-center">
            <label
              htmlFor="booking-modal"
              disabled={time.length === 0}
              onClick={() => setTreatment(book)}
              className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
