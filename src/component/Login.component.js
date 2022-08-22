import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const Login = () => {

  const [credientials, setCredientials] = useState({});

  const handleSubmit = () => {
    fetch(`http://localhost:3000/login?email=${credientials.email}&password=${credientials.password}`).then(response => {
      response.json().then(result => {
        if (result.length > 0) {
          localStorage.setItem('login', JSON.stringify(result[0]))
          window.location.href = '/list';
        }
        else
          alert('Invalid credientials');
      })
    })
  }

  return (
    <Container>
      <h1 className='mt-4 mb-3 text-center'>Login</h1>
      <Form.Label column htmlFor='email'>Email</Form.Label>
      <Form.Control
        type="email"
        id="email"
        onChange={e => { setCredientials(old => { return { ...old, email: e.target.value } }) }}
        placeholder='Enter Email'
      />
      <Form.Label column htmlFor='password'>Password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        onChange={e => { setCredientials(old => { return { ...old, password: e.target.value } }) }}
        placeholder='Enter Password'
      />
      <div className='text-center mt-3'>
        <button
          className='btn btn-primary'
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </Container>
  )
}

export default Login