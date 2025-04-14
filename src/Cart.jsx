import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { BookContext } from "./BookProvider";


const Cart = () => {
  const { cart,handleRemoveCart } = useContext(BookContext);

  const totalPrice = cart.reduce((start,item)=>{
    return start + item.price
  },0)

  return (
    <>
      <h2 style={{margin: '10px 20px'}}>Gio hang :{cart.length}</h2>
      <h2 style={{margin: '10px 20px'}}>Total Price :{totalPrice}</h2>
    <Container style={{minHeight: "500px"}}>
          <Row className="gy-4">
            {cart.map((item) => (
              <Col xs={12} sm={6} md={6} lg={4} key={item.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Img variant="top" src={item.image} alt="items" />
                    <p>
                      <strong>Price:</strong> {item.price}
                    </p>
                    <Card.Text>
                      {item.author}
                    </Card.Text>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <Button
                        variant="info"
                        onClick={()=>{handleRemoveCart(item.id)}}
                        >
                          Delete
                        </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
    </>
  );
};
export default Cart;
