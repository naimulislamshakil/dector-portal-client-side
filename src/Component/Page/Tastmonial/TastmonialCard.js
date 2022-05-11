import React from "react";

const TastmonialCard = ({ review }) => {
  return (
    <div data-aos={review.slied}>
      <div class="card w-96 text-primary-content shadow-2xl transition ease-in-out delay-150  hover:translate-y-6  hover:scale-100  duration-300">
        <div class="card-body">
          <p>{review.review}</p>
          <div className="flex mt-3 items-center">
            <div class="avatar">
              <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={review.img} alt="" />
              </div>
            </div>
            <div className="">
              <h2>{review.name}</h2>
              <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TastmonialCard;
