import React from "react";
import Common from "./Common";
const About = () => {
  return (
    <Common
      title="Welcome to About Page"
      btn_title="Contact Us"
      imgSrc={process.env.PUBLIC_URL + "/img/img2.svg"}
      visit="thedev/contact"
      para="We are the team of talented developer making websites"
    />
  );
};

export default About;
