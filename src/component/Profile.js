import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from "../image/profile photo.jpg"
import { useNavigate } from 'react-router-dom';

function Profile() {

  const name = JSON.parse(localStorage.getItem("user")).name
  const email = JSON.parse(localStorage.getItem("user")).email

  const navigate = useNavigate()



  return (
    <div  >
      <h1 className='text-center' >Profile Info</h1>

      <div className='d-flex justify-content-center' >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>
            Email : {email}
          </Card.Text>
          <Button variant="warning" onClick={()=>navigate("/")} >Go To DashBoard</Button>
        </Card.Body>
      </Card>
      </div>
   


    </div>
  )
}

export default Profile
