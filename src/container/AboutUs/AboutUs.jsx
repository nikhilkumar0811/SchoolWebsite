import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.s} alt="s letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className="p__opensans">
          At Shanti Niketan, we are dedicated to fostering a nurturing and
          inspiring environment where every student can thrive. Our mission is
          to provide a holistic education that goes beyond academics, nurturing
          the mind, body, and spirit. We believe in the power of curiosity,
          creativity, and critical thinking, and we strive to cultivate these
          qualities in our students.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_Knife flex__center">
        <img src={images.pen1} alt="about_pen1" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our history</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className="p__opensans">
          Since opening our doors in 2016, Shanti Niketan has been dedicated to
          providing a high-quality education that empowers students to achieve
          their dreams. From our humble beginnings, we have grown into a vibrant
          and dynamic community that values academic excellence, character
          development, and a love of learning.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
