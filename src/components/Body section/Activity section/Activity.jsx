import React from "react";
import "./activity.css";

// Imported icons ====>
import { BsArrowRightShort } from "react-icons/bs";

// Imported Images ====>
import user1 from "../../../assets/coffee/user (1).png";

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
          <div className="customerDetails">
            <span className="name">Martin Olafsen</span>
            <small>Ordered coffee mugs</small>
          </div>
          <div className="duration">5 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
