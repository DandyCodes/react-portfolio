import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const setters = new Map([
    ["name", setNameError],
    ["email", setEmailError],
    ["message", setMessageError],
  ]);

  const checkIfEmpty = event => {
    if (event.target.id === "email" && event.target.value !== "") {
      return;
    }
    !event.target.value
      ? setters.get(event.target.id)("This field is required")
      : setters.get(event.target.id)("");
  };

  const inputChange = event => {
    checkIfEmpty(event);
    if (event.target.id !== "email") {
      return;
    }
    !validateEmail(event.target.value)
      ? setEmailError("Must be a valid email")
      : setEmailError("");
  };

  return (
    <article className="face" id="contact">
      <h1>Get In Touch</h1>
      <form action="">
        {nameError && (
          <div>
            <span className="error-text">{nameError}</span> <br />
          </div>
        )}
        <input
          id="name"
          type="text"
          placeholder="Name"
          required
          onBlur={checkIfEmpty}
          onChange={inputChange}
        />
        <br />
        {emailError && (
          <div>
            <span className="error-text">{emailError}</span> <br />
          </div>
        )}
        <input
          id="email"
          type="email"
          placeholder="Email"
          required
          onBlur={checkIfEmpty}
          onChange={inputChange}
        />
        <br />
        {messageError && (
          <div>
            <span className="error-text">{messageError}</span> <br />
          </div>
        )}
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          required
          onBlur={checkIfEmpty}
          onChange={inputChange}
        ></textarea>
        <button>Submit</button>
      </form>
    </article>
  );
}

export default Contact;

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
