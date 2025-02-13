import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import ImageMagnify from "react-image-magnify";
import "./product-details.css";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ selectedProduct }) => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const IsAuthenticated = sessionStorage.getItem(".auth");
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handelAdd = (selectedProduct, quantity) => {
    if (IsAuthenticated) {
      dispatch(addToCart({ product: selectedProduct, num: quantity }));
      toast.success("Product has been added to cart!");
    } else {
      router("/signin-signup");
    }
  };

  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            {selectedProduct?.imgUrl && (
              <ImageMagnify
                {...{
                  smallImage: {
                    alt: selectedProduct?.productName,
                    isFluidWidth: true,
                    src: selectedProduct?.imgUrl,
                  },
                  largeImage: {
                    src: selectedProduct?.imgUrl,
                    width: 1200,
                    height: 1200,
                  },
                }}
              />
            )}
          </Col>
          <Col md={6}>
            <h2>{selectedProduct?.productName}</h2>
            <div className="rate">
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <span>{selectedProduct?.avgRating} ratings</span>
            </div>
            <div className="info">
              <span className="price">${selectedProduct?.price}</span>
              <span>category:{selectedProduct?.category}</span>
            </div>
            <p>{selectedProduct?.shortDesc}</p>
            <input
              className="qty-input"
              type="number"
              placeholder="Qty"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={() => handelAdd(selectedProduct, quantity)}
            >
              Add To Cart
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
