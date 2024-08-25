import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Ensure a bright future for your child" />
      <h1>Our Facilities</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_add flex__center">
        <p className="app__specialMenu-menu_heading">Academic </p>
        <div className="app__specialMenu_menu_items">
          <div className="menu__items1">
            <p>Smart Classrooms</p>
            <p>Library</p>
            <p>Science Laboratories</p>
            <p>Computer Labs</p>
            <p>Art & Music Rooms</p>
            <p>Language Labs</p>
          </div>
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.om2} alt="menu img" />
      </div>
      <div className="app__specialMenu-menu_tans flex__center">
        <p className="app__specialMenu-menu_heading">
          Extracurricular & Support
        </p>
        <div className="app__specialMenu_menu_items">
          <div className="menu__items2">
            <p>Sports Facilities</p>
            <p>Cafeteria</p>
            <p>Health & Wellness Center</p>
            <p>Auditorium</p>
            <p>Transportation</p>
            <p>Security</p>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
