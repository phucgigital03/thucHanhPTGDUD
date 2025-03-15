import { Card, Col, Container, Row } from "react-bootstrap";
import { useCart } from "./CartContext";
import { Button } from "react-bootstrap";
const Cart = () => {
  const { cart, removeFromCart, totalItems, totalPrice,handleIncrement,handleDecrement,handleQuantityChange } = useCart();
  console.log(cart);

  return (
    <div>
      <h2> Cart ({totalItems} items)</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <Container>
          <Row className="gy-4">
            {cart.map((product) => (
              <Col xs={12} sm={6} md={6} lg={4} key={product.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Img variant="top" src={product.image} alt="items" />
                    <p>
                      <strong>Price:</strong> {product.price}
                    </p>
                    <div style={{display: "flex", alignItems: "center"}}>
                      <button className="btn btn-outline-secondary" onClick={() => handleDecrement(product.id)}>
                        -
                      </button>
                      <input
                        className="form-control text-center"
                        type="number"
                        value={product.quantity}
                        min={1}
                        onChange={(e) =>
                          handleQuantityChange(
                            product.id,
                            parseInt(e.target.value, 10)
                          )
                        }
                        style={{ width: "50px", textAlign: "center" }}
                      />
                      <button className="btn btn-outline-secondary" onClick={() => handleIncrement(product.id)}>
                        +
                      </button>
                    </div>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card content.
                    </Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
      <h2>Total Price: {totalPrice}</h2>
      <Button variant="info">Xac nhan don hang</Button>
    </div>
  );
};
export default Cart;
