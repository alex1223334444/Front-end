import React, { useState, useEffect } from "react";
import { Header } from '../../components/Header';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from 'react-bootstrap/Card'
import { Scrollbar } from "react-scrollbars-custom";



const Message = props => {
  return (
    <Card border={"success"} bg='success' style={{ width: '18rem', color: '#FFFFFF', border: '1px', backgroundColor: '#008000' }}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>
          {props.time_to_prepare} hours needed to prepare.
        </Card.Text>
        <button variant="primary">See more details</button>
      </Card.Body>
    </Card>
  )
  }
function SeeAll() {
  const [recipes, setData] = useState();


  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/users/all_recipes");
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);


  return (
    <div style={{overflowY:'scroll', height:'100%'}}>
      
      {
        recipes && recipes.map((info) => (
          <li style={{
            height: '13em',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
            key={info.id}>
            <Message
              title={info.title}
              time_to_prepare={info.time_to_prepare}
            />
          </li>
        ))}  
        </div>
  )

};

export default SeeAll;