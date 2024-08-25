import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the Dream" />
      <h1 className="app__header-h1">SHANTI NIKETAN SCHOOL</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        The One Step to a Bright Future.Where dreams take flight and
        possibilities become reality.Unlocking doors to endless opportunities
        for every student.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.schoolpic} alt="header img" />
    </div>
  </div>
);

export default Header;
