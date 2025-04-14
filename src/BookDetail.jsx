import { Button, Card } from "react-bootstrap";
import { BookContext } from "./BookProvider";
import { useContext } from "react";

function BookDetail() {
  const { selectedBook, handleAddToCart } = useContext(BookContext);
  return (
    <div style={{minHeight: "800px", padding: "40px"}}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{selectedBook.title}</Card.Title>
          <Card.Img variant="top" src={selectedBook.image} alt="items" />
          <p>
            <strong>Price:</strong> {selectedBook.price}
          </p>
          <Card.Text>{selectedBook.author}</Card.Text>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="warning"
              onClick={() => {
                handleAddToCart(selectedBook.id);
              }}
            >
              Them vao gio
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookDetail;
