const customers = require('./db/customers.json');


export function getAll() {
   return customers;
}

export function getById(id) {
   return customers.find(c => c.id === id);
}


export function update(customer) {
   const cust = customers.find(c => c.id === customer.id);

   cust.firstName = customer.firstName;
   cust.lastName = customer.lastName;
   cust.address = customer.address;
   cust.postCode = customer.postCode;
   cust.city = customer.city;
   cust.dob = customer.dob;
}

export function insert(customer) {
   // customer.id: customers.length+1
   // customers.push(customer)
}

export function remove(customer) {
   // const cust = customers.find(c => c.id === id);
   // cust.isDeleted = true;
}