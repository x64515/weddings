import React, { useState } from "react";

// import { validateEmail } from "../utils/helpers";

function GuestPortal() {
  const [formState, setFormState] = useState({
    wedding: "not selected",
    firstName: "",
    lastName: "",
    foodChoice: "not selected",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { wedding, firstName, lastName, foodChoice } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      // const isValid = validateEmail(e.target.value);
      //   if (!isValid) {
      //     setErrorMessage("Your email is invalid.");
      //   } else {
      //     setErrorMessage("");
      //   }
      // } else {
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
    <section className="flex-row justify-center mb-4">
      <h1 data-testid="h1tag">Will you be attending?</h1>
      <form id="RSVP" onSubmit={handleSubmit}>
        <div className="my-2">
          <label htmlFor="wedding">Event?</label>
          <select defaultValue={wedding} name="wedding" onBlur={handleChange}>
            <option value="Selena Gomez">Selena Gomez</option>
            <option value="beyonce">beyonce</option>
            <option value="Rick James">Rick James</option>
            <option value="Justin Bieber">Justin Bieber</option>
          </select>
        </div>
        <div className="my-2">
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            name="firstName"
            defaultValue={firstName}
            onBlur={handleChange}
          />
        </div>
      </div>
    </section>
  );
}

export default GuestPortal;
