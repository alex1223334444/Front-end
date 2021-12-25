import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import { Modal, Button  } from "react-bootstrap";

const fetch = () => {
  
   axios.get("http://localhost:3001/users/single_recipe")
        .then(function (response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
 
}




const Message = props => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (

    <div>
    <Card border={"success"} bg='success' style={{ width: '18rem', color: '#FFFFFF', border: '1px', backgroundColor: '#008000' }}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>
          {props.time_to_prepare} hours needed to prepare.
          {props.key}
        </Card.Text>
        <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close Modal</Button>
        </Modal.Footer>
      </Modal>
        <button variant="primary" onClick={handleShow}>See more details</button>
        

      </Card.Body>
    </Card >
    </div>
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
    <div style={{ overflowY: 'scroll', height: '100%' }}>
      {
        recipes && recipes.map((info) => (
          <li style={{
            height: '13em',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
            key={info._id}>
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