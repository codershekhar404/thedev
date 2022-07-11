import React from "react";
import Common from "./Common";
const Error = () => {
  return (
    <>
      <Common
        title="I have a bad news for you"
        btn_title="Come Home"
        imgSrc={process.env.PUBLIC_URL + "/img/error.svg"}
        visit="/thedev"
        para=" The Page you are looking for might be removed or its temporarily
            unavailable"
      />
    </>
  );
};

export default Error;
