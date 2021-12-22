import React, {  useRef } from 'react';
import styled from 'styled-components';
import { useState } from "react";
import ReactDOM from 'react-dom';
import Box from '@material-ui/core/Box';
import { AppBar, Toolbar } from "@material-ui/core";






const imgMyimageexample = require('../../background.jpg');
const divStyle = {
  width: '100%',
  height: '721px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover',
  position: 'fixed'
};


const Button = styled.button`
  background-color: green;
  color: white;
  font-size: 30px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const tool = () => {
  return <Toolbar style={{ fontSize: '30px', top: '-10px' }}>Healty recipes</Toolbar>;
};
const Header = () => {
  return (
    <header>
      <AppBar style={{ backgroundColor: 'green', height: '45px' }}>{tool()}</AppBar>
    </header>
  );
}

function Login() {
  const nameForm = useRef(null);
  const handleClickEvent = () => {
    const form = nameForm.current
    alert(`${form['name'].value} ${form['pass'].value}`)
  }
  return (
  <div className="log" style={divStyle}>
    <Header></Header>
    <Box style={{ display: 'flex', color: '4E4948', bgcolor: 'BEB6B4', border: '15px', borderColor: '4E4948', width: '100px', height: '100px' }}>
      <p style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', left: '300px', top: '200px', fontSize: '20px' }}>Log into your account:</p>
      <form ref={nameForm}>
        <label style={{ alignContent: 'flex-start', position: 'absolute', left: '300px', top: '300px', fontSize: '20px' }}>
          Name:
          <input style={{ alignContent: 'flex-end', position: 'absolute', fontSize: '20px' }} type="text" name="name" />
        </label>
        <h1></h1>
        <label style={{ position: 'absolute', left: '270px', top: '350px', fontSize: '20px' }}>
          Password:
          <input style={{ position: 'absolute', fontSize: '20px' }} type="password" name="pass" />
        </label>
      </form>
    </Box>
    <Button onClick={handleClickEvent} style={{ position: 'absolute', left: '300px', top: '400px' }}>Submit</Button>
  </div>
  )
}

export default Login;



