import React, { useContext } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container>
      <h1 className="my-4">Your Cart</h1>
      {cart.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    style={{ width: '60px' }}
                  />
                </td>
                <td>{item.price}kr</td>
                <td>{item.price * item.quantity}kr</td>
                <td>
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3"><strong>Total</strong></td>
              <td colSpan="2"><strong>{total}kr</strong></td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Container>
  );
};

export default Cart;
