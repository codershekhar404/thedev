import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="img_container">
          <img src={props.imgSrc} alt="card img" />
        </div>
        <div className="card_body">
          <h5 className="card_title">{props.title}</h5>
          <p className="card_text">{props.description}</p>
          <NavLink to="" className="btn card_btn">
            go somewhere
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Card;
