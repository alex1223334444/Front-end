import React from 'react';
import { BrowserRouter, Router, Routes, Route, Link, Switch, withRouter, Redirect } from 'react-router-dom';
import { Login } from './views/Login';
import { Add } from './views/Add';
import { Header } from './components/Header';
import './App.css';
import { Navigate } from "react-router-dom";

const imgMyimageexample = require('./background.jpg');
const divStyle = {
  width: '100%',
  height: '721px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover',
  position: 'fixed'
};

const navStyle={
position: 'fixed' ,
  padding: '0',
  top: '100px',
  
};

const App = props => {
  return (
    <div style={divStyle} className="App">
      <Header></Header>
      <BrowserRouter>
        <nav  style={navStyle} >
          <ul >
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Add">Add recipe</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Add">
            <Add />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

