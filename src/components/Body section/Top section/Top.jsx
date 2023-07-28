import React from "react";
import "./top.css";

//Imported icons ====>
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

//Imported image ====>
import anna_kul from "../../../assets/anna_kul.jpg";
import video from "../../../assets/coffee.mp4";
import img from "../../../assets/coffee/extra pic.png";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Coffoo.</h1>
          <p>Welcome back, Anna!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" name="" id="" />
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
        <div className="rightCard flex">
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

        <div className="leftCard flex ">
          <div className="main flex">
            <div className="textDiv">
              <h2>My Stat</h2>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
              </div>

              <div className="flex">
                <span>
                  This Month <br /> <small>127 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img} alt="woman in a cafe" />
            </div>
            {/*
            <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>

                <h3>Help Center</h3>
                <p>
                  Having trouble in Antiquo, please contact us for more
                  questions.
                </p>
                <button className="btn">Go to help center</button>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
