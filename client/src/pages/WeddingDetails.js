import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from '../utils/queries';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ATTENDANT, ADD_MEAL} from '../utils/mutations';

const WeddingDetails = props => {

  const [formState, setFormState] = useState({ name:'',firstName:'',lastName:'', });
  const [Attendance] = useMutation(ADD_ATTENDANT);
  const [Meal] = useMutation(ADD_MEAL);

  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const  mutationResponse = await Attendance({ variables: {firstName: formState.firstName, lastName: formState.lastName}});
      console.log(mutationResponse);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      firstName: '',
      lastName: ''
    });
  };
  const handleFormSubmit2 = async event => {
    event.preventDefault();

    try {
      const mutationResponse = await Meal({
        variables: { name: formState.name}
      });
      console.log(mutationResponse);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      name: '',
      
    });
  };

  
    const { data } = useQuery(QUERY_USER);
    let user;
  
    if(data){
      user=data.user;
    
 
  return (
    <>
        {user ? (
         <div className="App form-wrapper wd-photo">
          <div  className="form-container">
            <div className="form-content">
             <h1>Wedding Details</h1>
             <h3>{data.wedding.bride} & Groom</h3>
             <h3>Date:</h3>
             <p>April 10th, 2021</p>
             <p>5:00 PM</p>
             <h3>Venue:  </h3>
             <p>Allan House; 1104 San Antonio St, Austin, TX 78701</p>



           <form onSubmit={handleFormSubmit} className= "box"> 
            <h3>Add Guests:</h3>
           <input
             name="firstName"
             placeholder="Enter Guest First Name"
             value={formState.firstName}
             onChange={handleChange}
           />,
           <input
         className="ml10"
             name="lastName"
        placeholder="Enter Guest Last Name"
             value={formState.lastName}
             onChange={ handleChange}
           />
        <button className="btn d-block w-100" type="submit">
               Submit
             </button>


         </form>
         <form onSubmit={handleFormSubmit2} className= "box"> 
            <h3>Add Guests Meals:</h3>

           <input
         className="ml10"
             name="meal"
      placeholder="Enter Guest Meal"
             value={formState.Meal}
             onChange={ handleChange}
           />
        <button className="btn d-block w-100" type="submit">
               Submit
             </button>


          </form>
        </div>
       </div>
      </div>
        ) : null}


    </>)
    }
    else{
      return(<h1>Cannot find user data!</h1>)
    }
      
    

};


 

export default WeddingDetails; 