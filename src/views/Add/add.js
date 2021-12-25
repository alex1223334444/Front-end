import React from 'react';
import { Header } from '../../components/Header';
import styled from 'styled-components';
import { useRef } from 'react';
import axios from 'axios';
import { Button } from '../../components/Button'
//const Add = props => {
function Add() {

  const nameForm = useRef(null);
  const handleClickEvent = () => {
    const form = nameForm.current
    axios.post('http://localhost:3001/users/add_recipe',  {
      title: `${form['title'].value}`,
      ingredients: `${form['ingredients'].value}`,
      time_to_prepare: `${form['time'].value}`,
      how_to_prepare: `${form['how'].value}`,
    })
      .then((response) => {
        alert(response)
      }, (error) => {
        console.log(error);
      });
    //alert(`${form['title'].value} ${form['ingredients'].value} ${form['time'].value} ${form['how'].value}`)
  }
  return (
    <div className="log" >
      <Header></Header>
      <p style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', left: '300px', top: '200px', fontSize: '20px' }}>Add a recipe:</p>
      <form ref={nameForm} action='/users/add_recipe' method='POST'>
        <label style={{ alignContent: 'flex-start', position: 'absolute', left: '300px', top: '300px', fontSize: '20px' }}>
          Title:
          <input style={{ alignContent: 'flex-end', position: 'absolute', fontSize: '20px' }} type="text" name="title" />
        </label>
        <h1></h1>
        <label style={{ position: 'absolute', left: '270px', top: '350px', fontSize: '20px' }}>
          Ingredients:
          <input style={{ position: 'absolute', fontSize: '20px' }} type="text" name="ingredients" />
        </label>
        <label style={{ alignContent: 'flex-start', position: 'absolute', left: '300px', top: '400px', fontSize: '20px' }}>
          Time to prepare:
          <input style={{ alignContent: 'flex-end', position: 'absolute', fontSize: '20px' }} type="text" name="time" />
        </label>
        <h1></h1>
        <label style={{ alignContent: 'flex-start', position: 'absolute', left: '300px', top: '450px', fontSize: '20px' }}>
          How to prepare:
          <input style={{ alignContent: 'flex-end', position: 'absolute', fontSize: '20px' }} type="text" name="how" />
        </label>
        <h1></h1>
      </form>
      <Button onClick={handleClickEvent} style={{ position: 'absolute', left: '300px', top: '500px' }}>Submit</Button>
    </div>
  );
};

export default Add;