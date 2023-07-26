import React from "react";
import "./sidebar.css";

//imported imgs
import logo from "../../assets/logo.png";

//imported icons
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Coffee" />
        <h2>Coffoo.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink">
              <IoMdSpeedometer className="icon" />
              <span>Dashboard</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink">
              <MdDeliveryDining className="icon" />
              <span>My Orders</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink">
              <MdOutlineExplore className="icon" />
              <span>Explore</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink">
              <BsTrophy className="icon" />
              <span>Products</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink">
              <AiOutlinePieChart className="icon" />
              <span>Charts</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink">
              <BiTrendingUp className="icon" />
              <span>Trends</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink">
              <MdOutlinePermContactCalendar className="icon" />
              <span>Contact</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink">
              <BsCreditCard2Front className="icon" />
              <span>Billing</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>

          <h3>Help Center</h3>
          <p>
            Having trouble in Antiquo, please contact us for more questions.
          </p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
