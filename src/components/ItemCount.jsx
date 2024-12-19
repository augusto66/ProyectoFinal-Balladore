import React, { useState, useContext } from "react";
import { Button, InputGroup, FormControl, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { cartContext } from "../context/cartContext";

function ItemCount({
  item,
  initialQuantity = 1,
  min = 1,
  max = 10,
  onQuantityChange = (quantity) =>
    console.log("Cantidad seleccionada:", quantity),
}) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const { addToCart } = useContext(cartContext);

  const handleIncrement = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleInputChange = (e) => {
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setQuantity(value);
    onQuantityChange(value);
  };

  const handleAddToCart = () => {
    addToCart({ ...item, qty: quantity });
  };

  return (
    <Card style={{ maxWidth: "400px", margin: "auto", padding: "10px" }}>
      <Card.Header>Selecciona la Cantidad</Card.Header>
      <Card.Body>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <InputGroup style={{ maxWidth: "200px" }}>
            <Button
              variant="outline-primary"
              onClick={handleDecrement}
              disabled={quantity <= min}
            >
              {" "}
              -{" "}
            </Button>
            <FormControl
              type="number"
              value={quantity}
              onChange={handleInputChange}
              className="text-center"
            />
            <Button
              variant="outline-primary"
              onClick={handleIncrement}
              disabled={quantity >= max}
            >
              {" "}
              +{" "}
            </Button>
          </InputGroup>
        </div>
        <Button onClick={handleAddToCart} variant="primary">
          Agregar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCount;
