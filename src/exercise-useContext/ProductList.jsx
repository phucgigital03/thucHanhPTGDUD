import { Modal } from "react-bootstrap";
import { useCart } from "./CartContext";
import { Button } from "react-bootstrap";
import { useState } from "react";
const products = [
  { id: 1, name: "iPhone 15", price: 999, quantity: 1, image: "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-hong-thumb-1-600x600.jpg" },
  { id: 2, name: "Samsung Galaxy S24", price: 899,quantity: 1 ,image: "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-hong-thumb-1-600x600.jpg"},
  { id: 3, name: "Google Pixel 8", price: 799,quantity: 1,image: "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-hong-thumb-1-600x600.jpg" },
];
const ProductList = () => {
  const { addToCart } = useCart();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h2>📦 Available Products</h2>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            margin: "5px 0",
            border: "1px solid #ddd",
          }}
        >
          <span>
            {product.name} - ${product.price}
          </span>
          <Button onClick={handleShow} variant="primary">
            Add to Cart
          </Button>

          {/* Modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                Do you want to add this product into cart?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you are reading to see changes!
              <p>
                <strong>Product Name:</strong>
                {product.name}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  addToCart({
                    ...product,
                    id: Date.now(),
                    // quantity: 1
                  })
                  setShow(false);
                }}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
