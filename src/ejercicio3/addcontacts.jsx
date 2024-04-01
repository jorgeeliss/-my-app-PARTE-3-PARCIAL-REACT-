import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const addcontacts = () => {
  const [formData, setFormData] = useState({
    identify: '',
    names: '',
    telephone: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const SendContacts = async () => {
    try {
      const response = await axios.post("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project", formData);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='containercontactos'>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Identify</Form.Label>
          <Form.Control type="text" name="identify" placeholder="identify" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Names</Form.Label>
          <Form.Control type="text" name="names" placeholder="names" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Telephone</Form.Label>
          <Form.Control type="text" name="telephone" placeholder="telephone" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" name="image" placeholder="image" onChange={handleChange} />
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={EnviarContactos}>Agregar Contacto</Button>
    </div>
  );
};

export default addcontacts;
