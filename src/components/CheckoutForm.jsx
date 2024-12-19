// src/components/CheckoutForm.js
import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CheckoutForm = ({ handleSubmit }) => {
  const formRef = useRef(null);

  const handleFormSubmit = (e) => {
    handleSubmit(e);
    formRef.current.reset();
  };

  return (
    <>
      <h4 className="mb-3">Complete los datos para finalizar la compra</h4>
      <Form className="w-50" ref={formRef} onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su Email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su Nombre Completo"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="+54 999 9999999" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CheckoutForm;
