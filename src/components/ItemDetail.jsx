import _default from "react-bootstrap/esm/Navbar"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import ItemCounter from './ItemCounter'

function ItemDetail({ item }) {
    return (
        <>
            <Card>
                <Card.Header>{item?.category}</Card.Header>
                <Card.Img variant="top" src={item?.thumbnail} />
                <Card.Body>
                    <Card.Title>{item?.title}</Card.Title>
                    <Card.Text>
                        {item?.description}
                    </Card.Text>
                </Card.Body>

            </Card>
            <ItemCounter />
        </>
    )
}

export default ItemDetail