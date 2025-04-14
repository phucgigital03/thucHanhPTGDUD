import { Container } from "react-bootstrap";
import BookList from "./BookList";

function Homepage() {
  return (
    <Container className="mt-4">
      <h1>Welcome to Bookstore App</h1>
        <BookList/>
    </Container>
  );
}

export default Homepage;
