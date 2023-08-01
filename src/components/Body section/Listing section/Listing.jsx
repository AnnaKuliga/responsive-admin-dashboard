import React from "react";
import "./listing.css";

//Imported icons ====>
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

//Imported images ====>
import coffee_seeds from "../../../assets/coffee/coffee_seeds.png";
import coffee_seeds3 from "../../../assets/coffee/coffee-seeds3.png";
import coffee_maker from "../../../assets/coffee/Coffeemaker French Presses.png";
import coffee_maker2 from "../../../assets/coffee/Krups Nescafe Dolce Gusto coffee mahcine.png";

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

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={coffee_seeds3} alt="coffee seeds" />
          <h3>
            Coffee seeds <br />
            <small> choose the flavour</small>
          </h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={coffee_maker} alt="coffee maker" />
          <h3>
            Coffeemaker <br /> <small>French Presses</small>
          </h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={coffee_maker2} alt="coffee maker" />
          <h3>
            Krups Nescafe <br /> <small>Dolce Gusto</small>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Listing;
