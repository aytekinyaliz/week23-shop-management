import React from 'react';
import { Link } from "react-router-dom";

import './Item.css';
import { getById, update } from '../../repositories/CustomerRepository';
import { getAll as getAllCities } from '../../repositories/CityRepository';



const item = (props) => {
   const id = Number(props.match.params.id);
   const customer = getById(id);

   const refs = {
      firstName: React.createRef(),
      lastName: React.createRef(),
      address: React.createRef(),
      postCode: React.createRef(),
      city: React.createRef(),
      dob: React.createRef()
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const newCustomer = {
         id: customer.id,
         firstName: refs.firstName.current.value,
         lastName: refs.lastName.current.value,
         address: refs.address.current.value,
         postCode: refs.postCode.current.value,
         city: refs.city.current.value,
         dob: refs.dob.current.value
      }

      update(newCustomer);

      props.history.push({ pathname: `/customers` })
   }

   return (
      <form className="customer-item-form" onSubmit={handleSubmit}>
         <div className="form-group row">
            <label>First Name</label>
            <input type="text" 
               className="form-control" 
               id="firstName"
               placeholder="Enter first name"
               ref={refs.firstName}
               defaultValue={customer.firstName} />
         </div>
         <div className="form-group row">
            <label>Last Name</label>
            <input type="text" 
               className="form-control" 
               id="lastName"
               placeholder="Enter last name"
               ref={refs.lastName}
               defaultValue={customer.lastName} />
         </div>
         <div className="form-group row">
            <label>Address</label>
            <input type="text" 
               className="form-control" 
               id="address"
               placeholder="Enter address"
               ref={refs.address}
               defaultValue={customer.address} />
         </div>
         <div className="form-group row">
            <label>Post Code</label>
            <input type="text" 
               className="form-control" 
               id="postCode"
               placeholder="Enter post code"
               ref={refs.postCode}
               defaultValue={customer.postCode} />
         </div>
         <div className="form-group row">
            <label>City</label>
            <select className="form-control" id="cities" defaultValue={customer.city} ref={refs.city}>
               {getAllCities().map(c => 
                  <option 
                     key={c}>{c}</option>
               )}
            </select>
         </div>
         <div className="form-group row">
            <label>Date of Birth</label>
            <input type="text" 
               className="form-control" 
               id="dob"
               placeholder="Enter date of birth"
               ref={refs.dob}
               defaultValue={customer.dob} />
         </div>

         <button type="submit" className="btn btn-primary">Submit</button>
         <button className="btn btn-default">
            <Link to="/customers">Cancel</Link>
         </button>
      </form>
   );
}

export default item;