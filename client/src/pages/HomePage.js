import React from "react";
import { Link } from "react-router-dom";
import  Auth  from '../utils/auth';
// import coverImage from "../assets/cover/cover-image.jfif";
function HomePage() {
  if(Auth.loggedIn()){
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
        <Link to="/weddingdetails">Wedding Details</Link> 
      </div>
    </section>
  );
  }
  else{
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
}

export default HomePage;
