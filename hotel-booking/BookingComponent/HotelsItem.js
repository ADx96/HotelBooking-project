import React from "react";
import ProductWrapper from "../styles";
import Book from "../Buttons/DeleteButton";
import { Link } from "react-router-dom";
const ProductItem = ({ hotel }) => {
  return (
    <ProductWrapper>
      <MDBRow>
        <MDBCol md="3">
          <MDBCard wide cascade>
            <MDBView cascade>
              <Link to={`/BookNow/Hotel/${hotel.slug}`}>
                <MDBCardImage
                  hover
                  overlay="white-slight"
                  className="card-img-top"
                  src={hotel.image}
                  alt="Card cap"
                />
              </Link>
            </MDBView>

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>{hotel.name}</strong>
              </MDBCardTitle>

              <MDBCardText>{hotel.description}</MDBCardText>
              <p className="product-price">{hotel.price} KD</p>
              <Book hotelId={hotel.id} />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </ProductWrapper>
  );
};

export default ProductItem;
