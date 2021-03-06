import React from "react";
import Common from "./Common";

const Home = () => {
  return (
    <Common
      title="Grow your business with"
      btn_title="Get Started"
      imgSrc={process.env.PUBLIC_URL + "/img/img1.svg"}
      visit="thedev/service"
      brand="The Dev"
      para="We are the team of talented developer making websites"
    />
  );
};

export default Home;
