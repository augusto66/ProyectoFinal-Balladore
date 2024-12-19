import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import { useCart } from "../context/useCart";
import { FaRegTrashCan } from "react-icons/fa6";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";
import CheckoutForm from "./CheckoutForm";

function Cart() {
  const { cart, removeFromCart, getTotal, clearCart } = useCart();
  const totalCompra = cart.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const nombre = e.target[1].value;
    const telefono = e.target[2].value;

    const order = {
      buyer: { nombre, email, telefono },
      total: getTotal(),
      items: cart,
      date: serverTimestamp(),
    };
    createOrder(order);
  };

  return (
    <div className="d-flex ">
      <ListGroup className="w-50">
        {cart.map((product) => (
          <ListGroup.Item key={product.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <span>
                  {product.title} Cant. {product.qty} Unid.
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span>Total $ {product.price * product.qty}</span>
                <FaRegTrashCan
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => removeFromCart(product.id)}
                />
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="w-50 p-3">
        <CheckoutForm handleSubmit={handleSubmit} />
        <div
          className="mt-3 d-flex justify-content-between align-items-center"
          style={{ width: "100%" }}
        >
          <h5>Importe Total de la Compra: ${totalCompra.toFixed(2)}</h5>
        </div>
      </div>
    </div>
  );
}

export default Cart;
