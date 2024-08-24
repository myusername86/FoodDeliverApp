import React, { useContext } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import img1 from '../Assert/img1.jpeg';
import img2 from '../Assert/img2.jpeg';
import img3 from '../Assert/img3.jpeg';
import img4 from '../Assert/img4.jpeg';
import img5 from '../Assert/img5.jpeg';
import img6 from '../Assert/img6.jpeg';
import './Product.css';  // Import custom CSS

const products = [
  { id: 1, name: 'Chocolate Cake', price: 10, imageUrl: img1 },
  { id: 2, name: 'Pizza', price: 67, imageUrl: img2 },
  { id: 3, name: 'Cheese Burger', price: 90, imageUrl: img3 },
  { id: 4, name: 'Cinnamon Bun', price: 30, imageUrl: img4 },
  { id: 5, name: 'Donut', price: 89, imageUrl: img5 },
  { id: 6, name: 'Chicken Nugget', price: 45, imageUrl: img6 }
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Container>
      <h1 className="my-4">Our Products</h1>
      <Row>
        {products.map(product => (
          <Col md={4} key={product.id} className="card-custom">
            <Card>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <b>Price: {product.price}kr</b>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button onClick={() => addToCart(product)}>Add to Cart</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
