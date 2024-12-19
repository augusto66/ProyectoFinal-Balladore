import Item from "./Item";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Itemlist({ items }) {
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
}

export default Itemlist;
