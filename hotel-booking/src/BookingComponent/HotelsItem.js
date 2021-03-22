import React from "react";
import { ProductWrapper } from "../Components/Styles";
import { Link } from "react-router-dom";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
} from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "../App.css";

const ProductItem = ({ hotel }) => {
  return (
    <ProductWrapper>
      <MDBRow>
        <MDBCol md="3">
          <MDBCard wide cascade>
            <MDBView cascade>
              <MDBCardImage
                hover
                overlay="white-slight"
                className="card-img-top"
                src={hotel.image}
                alt="Card cap"
              />
            </MDBView>

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>{hotel.name}</strong>
              </MDBCardTitle>

              <MDBCardText>{hotel.description}</MDBCardText>
              <p className="product-price">{hotel.price} KD</p>

              <Link to={`/BookNow/Hotel/${hotel.slug}`}>
                <MDBBtn hotelId={hotel.id}>BOOK NOW</MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </ProductWrapper>
  );
};

export default ProductItem;
