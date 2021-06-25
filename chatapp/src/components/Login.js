import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';


export default function Login ({ onIdSubmit }) {
const idRef = useRef()

function handleSubmit(e) {
  e.preventDefault()

  onIdSubmit(idRef.current.value)

}

  return (
   <Container className="align-items-center d-flex" style={{ height:'100vh'}}>
     <Form onSubmit={handleSubmit} className="w-100">
      <Form.Group>
        <Form.Label> Enter Your ID </Form.Label>
        <Form.Control type="text" ref={idRef} required/>
      </Form.Group>
      <Button type="submit" className="mr-2"> Login </Button>
      <Button variant="secondary"> Create A new Id </Button>
     </Form>
   </Container>
  )
}