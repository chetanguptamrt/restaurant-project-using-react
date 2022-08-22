import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RestaurantCreate = () => {

  const [restaurant, setRestaurant] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async () => {
    fetch('http://localhost:3000/restaurants', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json" 
      },
      body: JSON.stringify(restaurant)
    }).then(res => {
      res.json().then(result => {
        alert('Restaurant has been added');
        navigate('/list')
      })
    }).catch(err=>{
      alert(err);
    })
  }

  return (
    <Container>
      <h1 className='mt-4 mb-3 text-center'>Create Restaurant</h1>
      <Form.Label column htmlFor='name'>Name</Form.Label>
      <Form.Control
        type="text"
        id="name"
        onChange={e => { setRestaurant(old => { return { ...old, name: e.target.value } }) }}
        placeholder='Enter Restaurant Name'
      />
      <Form.Label column htmlFor='email'>Email</Form.Label>
      <Form.Control
        type="email"
        id="email"
        onChange={e => { setRestaurant(old => { return { ...old, email: e.target.value } }) }}
        placeholder='Enter Restaurant Email'
      />
      <Form.Label column htmlFor='address'>Address</Form.Label>
      <Form.Control
        type="text"
        id="address"
        onChange={e => { setRestaurant(old => { return { ...old, address: e.target.value } }) }}
        placeholder='Enter Restaurant Address'
      />
      <Form.Label column htmlFor='rating'>Rating</Form.Label>
      <Form.Control
        type="number"
        id="rating"
        onChange={e => { setRestaurant(old => { return { ...old, rating: e.target.value } }) }}
        placeholder='Enter Restaurant Rating'
      />
      <div className='text-center mt-3'>
        <button
          className='btn btn-primary'
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>

    </Container>
  )
}

export default RestaurantCreate