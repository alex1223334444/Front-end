import React, { useRef, useEffect } from 'react';
import { useState } from "react";
import Box from '@material-ui/core/Box';
import { AppBar, Toolbar } from "@material-ui/core";
import { Button } from '../../components/Button'
import axios from 'axios';


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
 let username;
 let password;
 const HandleClickEvent = () => {

  const [users, setData] = useState();
 useEffect(() => {
  const form = nameForm.current;
  username=form['name'].value;
  password= form['pass'].value;
  const fetch = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/users/all_users");
      setData(data.toArray);
      for(let i=0;i<data.length; i++)
      {
        if(username===data[i].username && password===data[i].password)
        alert('da');
      }
 } catch (err) {
      console.error(err);
    }
  };
  fetch();
}, []);
 }
  const nameForm = useRef(null);


  

  return (
    <div className="log" >
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
      <Button onClick={HandleClickEvent} style={{ position: 'absolute', left: '300px', top: '400px' }}>Submit</Button>
    </div>
  )
}

export default Login;



