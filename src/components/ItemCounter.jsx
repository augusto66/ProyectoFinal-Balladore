import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import ItemCount from "./ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemCounter() {
  const handleQuantityChange = (quantity) => {
    console.log("Cantidad seleccionada:", quantity);
  };

  return (
    <Card>
      <Card.Header>Selecciona la Cantidad</Card.Header>
      <Card.Body>

        <ItemCount
          initialQuantity={1}
          min={1}
          max={20}
          onQuantityChange={handleQuantityChange}
        />
        <Button variant="primary">Agregar</Button>
      </Card.Body>
    </Card>
  )
}
export default ItemCounter;