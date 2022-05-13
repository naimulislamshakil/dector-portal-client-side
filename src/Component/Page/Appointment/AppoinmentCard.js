import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import BookingModal from "./BookingModal";

const AppoinmentCard = ({ date }) => {
  const [books, setBook] = useState([]);

  useEffect(() => {
    fetch("https://pacific-citadel-17977.herokuapp.com/treatment")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  const [treatment, setTreatment] = useState({});
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-20">
        {books.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            setTreatment={setTreatment}
          ></BookCard>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AppoinmentCard;
