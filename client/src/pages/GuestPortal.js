import React, { useState } from "react";

// import { validateEmail } from "../utils/helpers";

function GuestPortal() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    foodChoice: "not selected",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { firstName, lastName, foodChoice } = formState;

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
    <section className="form-wrapper gp-photo">
      <div className="form-container">
        <div className="form-content">
          <h1 data-testid="h1tag">Will you be attending?</h1>
          <form id="RSVP" onSubmit={handleSubmit}>
            <div className="my-2">
              <input
                className="form-input"
                placeholder="First Name"
                type="text"
                name="firstName"
                defaultValue={firstName}
                onBlur={handleChange}
              />
            </div>
            <div className="my-2">
              <input
                className="form-input"
                placeholder="Last Name"
                type="text"
                name="lastName"
                defaultValue={lastName}
                onBlur={handleChange}
              />
            </div>
            <div className="my-2">
              <label htmlFor="foodChoice">Meal:</label>
              <select
                className="form-input"
                
                defaultValue={foodChoice}
                name="foodChoice"
                onBlur={handleChange}
              >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div>
            <div className="my-2">
              <label htmlFor="object">Do you object?</label>
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button data-testid="button" className="btn" type="submit">
              Yes
            </button>
            <button data-testid="button" className="btn" type="submit">
              No
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GuestPortal;
