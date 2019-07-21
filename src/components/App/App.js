import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import MyRouter from '../router';

import './App.css';
import Header from '../header';
import Footer from '../footer';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <MyRouter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
