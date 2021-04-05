import React, { useState } from "react";

import { validateEmail } from "../utils/helpers";

function GuestPortal() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    menu: "not selected",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="RSVP" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Last Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
      
        {/* <div>
          <label>
            Pick your meal:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
        </div> */}
        <div>
          <label htmlFor="object">Do you object?</label>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">
          No
        </button>
      </form>
    </section>
  );
}

export default GuestPortal;
