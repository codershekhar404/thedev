import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <div className="container">
      <div className="info">
        <h1>
          {props.title}
          <strong className="brand_name"> {props.brand}</strong>
        </h1>
        <h2>{props.para}</h2>
        <div className="btn_container">
          <NavLink to={props.visit} className="btn">
            {props.btn_title}
          </NavLink>
        </div>
      </div>

      <div className="img_container">
        <img src={props.imgSrc} alt="Img" className="img animated" />
      </div>
    </div>
  );
};

export default Common;
