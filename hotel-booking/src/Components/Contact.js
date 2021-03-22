import React, { useState } from "react";
import "../App.css";

import contactStore from "../Mobx/ContactMobx";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const [loader, setLoader] = useState(false);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  //     db.collection("contacts")
  //       .add({
  //         name: name,
  //         email: email,
  //         message: message,
  //       })
  //       .then(() => {
  //         setLoader(false);
  //         alert("Your message has been submitted👍");
  //       })
  //       .catch((error) => {
  //         alert(error.message);
  //         setLoader(false);
  //       });

  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   };

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
        require
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        require
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Mobile</label>
      <input
        require
        placeholder="mobile"
        value={number}
        onChange={handleChange}
        onChange={(e) => setNumber(e.target.value)}
      />
      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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
