import React from "react";
import { Link } from "react-router-dom";
// import coverImage from "../assets/cover/cover-image.jfif";
function HomePage() {
  return (
    <section className="homepage">
      <div>
        <button className="my-2">
          <Link to="/guestportal">Guest Portal</Link>
        </button>
        <button className="my-2"> 
          <Link to="/signup">Signup</Link> 
        </button>
      </div> 
    </section>
  );
}

export default HomePage;
