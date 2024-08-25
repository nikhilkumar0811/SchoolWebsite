import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.principal} alt="principal" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Principal's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            We believe in nurturing the potential of every student.
          </p>
        </div>
        <p className="p__opensans">
          fostering a love for learning that lasts a lifetime. Our commitment is
          to provide a holistic education that balances academic excellence with
          character development, ensuring that our students grow into
          responsible, compassionate, and innovative individuals. At our school,
          we emphasize the importance of integrity, respect, and perseverance,
          preparing our students to face the challenges of tomorrow with
          confidence and courage.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Dr.Veena Singh</p>
        <p className="p__opensans">Principal & Founder</p>
        <img src={images.signre} alt="signre" />
      </div>
    </div>
  </div>
);

export default Chef;
