import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { BookContext } from "./BookProvider";
import { useNavigate } from "react-router-dom";
// hình ảnh, tiêu đề, tác giả, giá
function BookList() {
    const { books,handleShowDetail,handleAddToCart } = useContext(BookContext);
    const navigate = useNavigate()

    const handleClickShow = (id)=>{
        handleShowDetail(id)
        navigate(`/book/${id}`)
    }
    
  return (
    <Container style={{minHeight: "500px"}}>
          <Row className="gy-4">
            {books.map((book) => (
              <Col xs={12} sm={6} md={6} lg={4} key={book.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Img variant="top" src={book.image} alt="items" />
                    <p>
                      <strong>Price:</strong> {book.price}
                    </p>
                    <Card.Text>
                      {book.author}
                    </Card.Text>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <Button
                        variant="primary"
                        onClick={()=>{handleClickShow(book.id)}}
                        >
                            Xem chi tiet
                        </Button>
                        <Button
                        variant="warning"
                        onClick={()=>{handleAddToCart(book.id)}}
                        >
                            Them vao gio
                        </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
  )
}

export default BookList