import React from "react";
import ProductWrapper from "../styles";
import Book from "../Buttons/DeleteButton";
import { Link } from "react-router-dom";
const ProductItem = ({ hotel }) => {
  return (
    <ProductWrapper>
      <Link to={`/BookNow/Hotel/${hotel.slug}`}>
        <img alt={hotel.name} src={hotel.image} />
      </Link>

      <p>{hotel.name}</p>
      <p>{hotel.description}</p>
      <p className="product-price">{hotel.price} KD</p>
      <Book hotelId={hotel.id} />
    </ProductWrapper>
  );
};

export default ProductItem;
