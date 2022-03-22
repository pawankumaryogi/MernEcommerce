import React from "react";
import { Card } from "react-bootstrap";
import products from "../products";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <a href={`/product/${product._id}`}>
        <Card.Title>
          <strong>{product.name}</strong>
        </Card.Title>
      </a>
      <div className="my-3">
        <Card.Text as="div">
          {product.rating} from {product.numReviews} reviews
        </Card.Text>
      </div>
      <Card.Text as="h3">${product.price}</Card.Text>
    </Card>
  );
};

export default Product;
