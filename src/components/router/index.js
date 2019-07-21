import React from 'react';
import { Route, Switch } from "react-router-dom";

import CustomersList from '../customers/List'
import CustomerItem from '../customers/Item'
import Products from '../products/List'
import Invoices from '../invoices/List'

const main = () =>
   <Switch>
      <Route path="/customers" exact component={CustomersList} />
      <Route path="/customers/:id" component={CustomerItem} />
      <Route path="/products" component={Products} />
      <Route path="/invoices" component={Invoices} />
   </Switch>

export default main;