import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

function ItemCount({ initialQuantity = 1, min = 1, max = 10, onQuantityChange }) {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleIncrement = () => {
        if (quantity < max) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onQuantityChange && onQuantityChange(newQuantity);
        }
    };

    const handleDecrement = () => {
        if (quantity > min) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange && onQuantityChange(newQuantity);
        }
    };

    const handleInputChange = (e) => {
        const value = Math.max(min, Math.min(max, Number(e.target.value)));
        setQuantity(value);
        onQuantityChange && onQuantityChange(value);
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            backgroundColor: "#f8f9fa",
        }}
        >
            <InputGroup style={{ maxWidth: "200px" }}>
                <Button
                    variant="outline-primary"
                    onClick={handleDecrement}
                    disabled={quantity <= min}> - </Button>
                <FormControl
                    type="number"
                    value={quantity}
                    onChange={handleInputChange}
                    className="text-center" />
                <Button
                    variant="outline-primary"
                    onClick={handleIncrement}
                    disabled={quantity >= max}> + </Button>
            </InputGroup>
        </div>
    )
}

export default ItemCount