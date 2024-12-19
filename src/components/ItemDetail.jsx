import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <>
      <Card>
        <Card.Header>{item?.category}</Card.Header>
        <Card.Img
          variant="top"
          src={item?.thumbnail}
          style={{
            width: "350px",
            height: "350px",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
        <Card.Body>
          <Card.Title>{item?.title}</Card.Title>
          <Card.Title>$ {item?.price}</Card.Title>
          <Card.Text>{item?.description}</Card.Text>
        </Card.Body>
      </Card>
      <ItemCount item={item} />
    </>
  );
}

export default ItemDetail;
