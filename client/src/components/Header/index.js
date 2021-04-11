import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="flex-row px-1">
      <Link to="/">
        <h1>Wedding</h1>
      </Link>
      <nav>
        <ul>
          {Auth.loggedIn() ? (
            <>
              <li className="mx-2">
                <Link to="/weddingDetails">Me</Link>
              </li>
              <li className="mx-2">
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="mx-2">
                <Link to="/login" className="login">
                  Login
                </Link>
              </li>

              {/* <Link to="/signup">Signup</Link> */}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
