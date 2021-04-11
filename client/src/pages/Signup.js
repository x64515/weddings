import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="form-wrapper su-photo">
      <div  className="form-container">
        <div className="form-content">
          <h2>Sign Up</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="First Name"
                name="firstName"
                type="firstName"
                id="firstName"
                value={formState.firstName}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Last Name"
                name="lastName"
                type="lastName"
                id="lastName"
                value={formState.lastName}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>

            {error && <div>Signup failed</div>}
          </div>
        </div>
      </div>
  );
};

export default Signup;
