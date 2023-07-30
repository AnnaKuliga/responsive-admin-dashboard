import React from "react";
import "./listing.css";

//Imported icons ====>
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

//Imported images ====>
import coffee_seeds from "../../../assets/coffee/coffee_seeds.png";
const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h2>My Listings</h2>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={coffee_seeds} alt="coffee seeds" />
          <h3>Coffee seeds</h3>
        </div>
      </div>
    </div>
  );
};

export default Listing;
