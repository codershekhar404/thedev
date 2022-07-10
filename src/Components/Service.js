import React from "react";
import Api from "../Api/Api";
import Card from "./Card";

const Service = () => {
  return (
    <>
      <div className="service_container">
        <h1>Our Services</h1>

        <div className="card_container">
          {Api.map((val, index) => {
            return (
              <Card key={index}
                imgSrc={val.imgSrc}
                title={val.title}
                description={val.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
