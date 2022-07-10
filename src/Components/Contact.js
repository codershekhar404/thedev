import React, { useState } from "react";

import Popup from "./Popup";

// icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitEvent = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  return (
    <>
      {openModal && <Popup closeModal={setOpenModal} name={data.name} setData={setData}/>}
      <div className="contact_container">
        <div className="heading">
          <h1>Get in touch!</h1>
          <h5>Any question or remarks? Just write us a message!</h5>
        </div>
        <div className="form_container">
          <div className="contact_info">
            <div className="icons_container">
              <LocationOnIcon style={{ fontSize: 30, color: "#3e2093" }} />
              <h4>Address</h4>
              <p>Surkhet, NP12</p>
              <p>Birendranagar 06</p>
            </div>
            <div className="icons_container">
              <CallIcon style={{ fontSize: 30, color: "#3e2093" }} />
              <h4>Phone</h4>
              <p>+0098 9893 5647</p>
              <p>+0096 3434 5678</p>
            </div>
            <div className="icons_container">
              <EmailIcon style={{ fontSize: 30, color: "#3e2093" }} />
              <h4>Email</h4>
              <p>thedev@gmail.com</p>
              <p>info.thedev@gmail.com</p>
            </div>
          </div>

          <form onSubmit={submitEvent} autoComplete="off">
            <h3>Contact Form</h3>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              onChange={inputEvent}
              required
              value={data.name}
              name="name"
            />
            <label htmlFor="name">Mail</label>
            <input
              type="email"
              onChange={inputEvent}
              required
              value={data.email}
              name="email"
            />
            <label htmlFor="name">Phone</label>
            <input
              type="number"
              onChange={inputEvent}
              required
              value={data.phone}
              name="phone"
            />
            <label htmlFor="message">Message</label>
            <textarea
              onChange={inputEvent}
              required
              value={data.message}
              name="message"
              cols="3"
              rows="3"
            ></textarea>
            <button className="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
