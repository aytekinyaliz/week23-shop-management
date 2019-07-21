import { getAll as getAllCustomers } from './CustomerRepository';



export function getAll() {
   return [...new Set(getAllCustomers().map(c => c.city))].sort();
}