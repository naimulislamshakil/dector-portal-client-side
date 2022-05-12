import React from "react";
import BookCard from "./BookCard";

const AppoinmentCard = () => {
  const books = [
    {
      id: 1,
      name: "Teeth Orthodontics",
      time: [
        "09.30 AM - 10.00 AM",
        "10.00 AM - 10.30 AM",
        "10.30 AM - 11.00 AM",
      ],
      space: "10 SPACES AVAILABLE",
      slied: "fade-up",
    },
    {
      id: 2,
      name: "Cosmetic Dentistry",
      time: [
        "08.30 AM - 09.00 AM",
        "09.00 AM - 9.30 AM",
        "09.30 AM - 10.00 AM",
        "10.00 AM - 10.30 AM",
        "10.30 AM - 11.00 AM",
      ],
      space: "10 SPACES AVAILABLE",
      slied: "fade-down",
    },
    {
      id: 3,
      name: "Teeth Cleaning",
      time: [],
      slied: "fade-right",
      space: "10 SPACES AVAILABLE",
    },
    {
      id: 4,
      name: "Removing plaque",
      slied: "fade-up",
      time: ["10.00 AM - 10.30 AM"],
      space: "10 SPACES AVAILABLE",
    },
    {
      id: 5,
      name: "Gritty toothpaste cleaning",
      slied: "fade-down",
      time: [
        "09.00 AM - 9.30 AM",
        "09.30 AM - 10.00 AM",
        "10.00 AM - 10.30 AM",
        "10.30 AM - 11.00 AM",
      ],
      space: "10 SPACES AVAILABLE",
    },
    {
      id: 6,
      name: "Rinsing",
      slied: "fade-right",
      time: [
        "08.00 AM - 08.30 AM",
        "08.30 AM - 09.00 AM",
        "09.00 AM - 9.30 AM",
        "09.30 AM - 10.00 AM",
        "10.00 AM - 10.30 AM",
        "10.30 AM - 11.00 AM",
      ],
      space: "10 SPACES AVAILABLE",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-20">
      {books.map((book) => (
        <BookCard key={book.id} book={book}></BookCard>
      ))}
    </div>
  );
};

export default AppoinmentCard;
