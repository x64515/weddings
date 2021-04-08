import React from "react";
import { Link } from "react-router-dom";
import  Auth  from '../utils/auth';
// import coverImage from "../assets/cover/cover-image.jfif";
function HomePage() {
  if(Auth.loggedIn()){
  return (
    <section className="my-5 form-wrapper hp-photo">
    
          <div className="form-container">
            <div className="form-content">
      {/* <h1 id="HomePage">My Wedding</h1> */}
      {/* <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      /> */}
      <button className="my-2">
        <Link to="/weddingdetails">Wedding Details</Link> 
      </button>
      </div>
      </div>
    </section>
  );
  }
  else{
  return (
    <section className="homepage form-wrapper">
     <div className="form-container">
            <div className="form-content">
        <button className="my-2">
          <Link to="/guestportal">Guest Portal</Link>
        </button>
        <button className="my-2"> 
          <Link to="/signup">Signup</Link> 
        </button>
      </div> 
      </div> 
    </section>
  );
  }
}

export default HomePage;
