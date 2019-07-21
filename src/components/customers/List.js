import React from 'react';


import './List.css';
import { getAll } from '../../repositories/CustomerRepository';


const list = (props) => {
   const handleEditClick = (e) => {
      const id = e.target.getAttribute('name');

      props.history.push({ pathname: `/customers/${id}` })
   }

   return (
      <table className="table table-striped">
         <thead className="thead-dark">
            <tr>
               <th scope="col">#</th>
               <th scope="col">First Name</th>
               <th scope="col">Last Name</th>
               <th scope="col">City</th>
               <th scope="col">DoB</th>
               <th>-</th>
            </tr>
         </thead>
         <tbody>
            {getAll().map(c => (
               <tr key={c.id}>
                  <th scope="row">{c.id}</th>
                  <td>{c.firstName}</td>
                  <td>{c.lastName}</td>
                  <td>{c.city}</td>
                  <td>{ new Date(c.dob).toLocaleDateString()}</td>
                  <td>
                     <i className="far fa-edit" onClick={e => handleEditClick(e)} name={c.id} />&nbsp;&nbsp;
                     <i className="far fa-trash-alt" />
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}

export default list;
