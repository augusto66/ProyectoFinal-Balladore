import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <Col>
      <Card>
        <Card.Text>{item.category}</Card.Text>
        <Card.Img
          variant="top"
          src={item.thumbnail}
          style={{
            width: "450px",
            height: "450px",
            display: "block",
            margin: "0 auto",
          }}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Title>$ {item?.price}</Card.Title>

          <Card.Text>{item.description}</Card.Text>
          <Button as={Link} to={`/item/${item.id}`}>
            Detalles
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
