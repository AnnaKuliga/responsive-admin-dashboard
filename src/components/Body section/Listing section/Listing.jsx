import React from "react";
import "./listing.css";

//Imported icons ====>
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

//Imported images ====>
import coffee_seeds from "../../../assets/coffee/coffee_seeds.png";
import coffee_seeds3 from "../../../assets/coffee/coffee-seeds3.png";
import coffee_seeds2 from "../../../assets/coffee/coffee_seeds2.png";
import coffee_maker from "../../../assets/coffee/Coffeemaker French Presses.png";
import coffee_maker2 from "../../../assets/coffee/Krups Nescafe Dolce Gusto coffee mahcine.png";
import coffee_maker3 from "../../../assets/coffee/Espresso Machines Coffee Saeco Moka pot.png";
import coffee_mug from "../../../assets/coffee/coffee_mug.png";
import coffee_mug2 from "../../../assets/coffee/coffee_mug2.png";
import coffee_mug3 from "../../../assets/coffee/coffee_mug3.png";
import user1 from "../../../assets/coffee/user (1).png";
import user2 from "../../../assets/coffee/user (2).png";
import user3 from "../../../assets/coffee/user (3).png";
import user4 from "../../../assets/coffee/user (4).png";
import user5 from "../../../assets/coffee/user (5).png";
import user6 from "../../../assets/coffee/user (6).png";

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
          <img src={coffee_seeds2} alt="coffee seeds" />
          <h3>
            Coffee seeds <br />
            <small> choose the flavour</small>
          </h3>
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
            Coffee maker <br /> <small>French Presses</small>
          </h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={coffee_maker2} alt="coffee maker" />
          <h3>
            Krups Nescafe <br /> <small>Dolce Gusto</small>
          </h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={coffee_maker3} alt="coffee maker" />
          <h3>Saeco Moka Pot</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={coffee_mug} alt="coffee mug" />
          <h3>
            Coffee Mug <small>200ml</small>
          </h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={coffee_mug2} alt="coffee mug" />
          <h3>
            Coffee Mug <small>300ml</small>
          </h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={coffee_mug3} alt="coffee mug" />
          <h3>
            Coffee Mug <small>200ml</small>
          </h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                456 Flavoured Coffee <br />
                <small>
                  12 sells within <span className="date">10 Days</span>
                </small>
              </span>
            </div>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={user4} alt="User Image" />

              <img src={user6} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                356 coffee mugs <br />
                <small>
                  15 sells within <span className="date">10 Hours</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image" />
              <img src={user6} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                756 Flavoured Coffee <br />
                <small>
                  12 sells within <span className="date">10 Weeks</span>
                </small>
              </span>
            </div>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={user5} alt="User Image" />
              <img src={user2} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                975 coffee mugs <br />
                <small>
                  15 sells within <span className="date">12 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
