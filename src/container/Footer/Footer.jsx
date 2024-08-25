import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Bihar,Bhojpur,802301,INDIA</p>
        <p className="p__opensans">9128280707</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.om2} alt="footer_logo" />
        <p className="p__opensans">
          &quot;Empowering minds and shaping futures with excellence in
          education since 2012.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 03:00 pm</p>
        <p className="p__opensans">Saturday:</p>
        <p className="p__opensans">08:00 am - 01:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Shanti Niketan. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
