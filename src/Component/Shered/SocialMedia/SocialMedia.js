import React from "react";
import fb from "../../../assets/icons/facebook.png";
import google from "../../../assets/icons/google.png";
import github from "../../../assets/icons/github (1).png";

const SocialMedia = () => {
  return (
    <div>
      <div className="flex justify-evenly">
        <div class="avatar">
          <div class="w-14 mask mask-hexagon">
            <img src={fb} alt="" />
          </div>
        </div>
        <div class="avatar">
          <div class="w-14 mask mask-hexagon">
            <img src={google} alt="" />
          </div>
        </div>
        <div class="avatar">
          <div class="w-14 mask mask-hexagon">
            <img src={github} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
