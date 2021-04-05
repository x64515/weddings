import React from "react";
import { Link } from "react-router-dom";
// import coverImage from "../assets/cover/cover-image.jfif";
function HomePage() {
  return (
    <section className="my-5">
      {/* <h1 id="HomePage">My Wedding</h1> */}
      {/* <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      /> */}
      <div className="my-2">
        <Link to="/guestportal">Guest Portal</Link>
        <Link to="/signup">Signup</Link> 
      </div>
    </section>
  );
}

export default HomePage;
