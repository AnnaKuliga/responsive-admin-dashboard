import React from "react";
import "./top.css";

//Imported icons ====>
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";

//Imported image ====>
import anna_kul from "../../../assets/anna_kul.jpg";
import video from "../../../assets/antique.mp4";
const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Antiquo.</h1>
          <p>Welcome back, Anna!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="SearchDashboard" name="" id="" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <IoNotificationsOutline className="icon" />
          <div className="adminImage">
            <img src={anna_kul} alt="user image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard felx">
          <h2>Create and sell extraordinary products</h2>
          <p>The world's fastest growing industry! </p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
