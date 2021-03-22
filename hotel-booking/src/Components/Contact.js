import React, { useState } from "react";
import "../App.css";

import contactStore from "../Mobx/ContactMobx";

const Contact = () => {
  const [loader, setLoader] = useState(false);

  const [contact, setContact] = useState({
    Customername: "",
    mobile: 0,
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    alert("form is submitted👍");
    event.preventDefault();
    contactStore.createContact(contact);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        required
        placeholder="Name"
        type="text"
        name="Customername"
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        required
        placeholder="Email"
        type="text"
        name="email"
        onChange={handleChange}
      />
      <label>Mobile</label>
      <input
        required
        placeholder="mobile"
        type="text"
        name="mobile"
        onChange={handleChange}
      />
      <label>Message</label>
      <textarea
        required
        placeholder="Message"
        type="text"
        name="message"
        onChange={handleChange}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
