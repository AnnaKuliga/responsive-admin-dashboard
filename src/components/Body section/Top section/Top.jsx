import React from "react";
import "./top.css";

//Imported icons ====>
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";

//Imported image ====>
import anna_kul from "../../../assets/anna_kul.jpg";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Antiquo.</h1>
          <p>Hello Anna, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="SearchDashboard" name="" id="" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <IoNotificationsOutline />
          <div className="adminImage">
            <img src={anna_kul} alt="user image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
