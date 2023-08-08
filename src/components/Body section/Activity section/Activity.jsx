import React from "react";
import "./activity.css";

// Imported icons ====>
import { BsArrowRightShort } from "react-icons/bs";

// Imported Images ====>
import user1 from "../../../assets/coffee/user (1).png";
import user2 from "../../../assets/coffee/user (2).png";
import user3 from "../../../assets/coffee/user (3).png";
import user4 from "../../../assets/coffee/user (4).png";
import user5 from "../../../assets/coffee/user (5).png";
import user6 from "../../../assets/coffee/user (6).png";

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h2>Recent Activity</h2>
        <button className="btn flex">
          See All
          <BsArrowRightShort />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="User Image" />
          <div className="customerDetails ">
            <span className="name">
              Martin Olafsen
              <br />
            </span>
            <p>Ordered coffee mugs</p>
          </div>
          <div className="duration">10 sec ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="User Image" />
          <div className="customerDetails ">
            <span className="name">
              Maria Colara
              <br />
            </span>
            <p>Ordered coffee seeds</p>
          </div>
          <div className="duration">1 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="User Image" />
          <div className="customerDetails ">
            <span className="name">
              Hugo Bores
              <br />
            </span>
            <p>Ordered a coffee maker</p>
          </div>
          <div className="duration">5 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="User Image" />
          <div className="customerDetails ">
            <span className="name">
              Adrian Andres
              <br />
            </span>
            <p>Ordered a coffetiere</p>
          </div>
          <div className="duration">7 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user5} alt="User Image" />
          <div className="customerDetails ">
            <span className="name">
              Anna Warnhol
              <br />
            </span>
            <p>Ordered 8 bags of flavoured ground coffee seeds</p>
          </div>
          <div className="duration">10 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user6} alt="User Image" />
          <div className="customerDetails ">
            <span className="name">
              Alex Simsons
              <br />
            </span>
            <p> Dolce Gusto Espresso Cafe</p>
          </div>
          <div className="duration">15 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
