import React, { useState } from "react";
 
function WeddingDetails() {
  const [inputList, setInputList] = useState([{
   guestName: "",}]);
 
  // handle input change
 
  return (
    <div className="App">
      
      <h1>Wedding Details</h1>
      <h3>Bride & Groom</h3>
      <h3>Date:</h3>
      <p>April 10th, 2021</p>
      <h3>Venue:  </h3>
      <p>Allan House; 1104 San Antonio St, Austin, TX 78701</p>

     </div>
  );
}
 
export default WeddingDetails;