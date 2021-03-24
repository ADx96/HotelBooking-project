import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBTooltip,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
} from "mdbreact";

import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "../App.css";

const HotelItem = ({ hotel }) => {
  return (
    <div>
      <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce>
        <MDBCardImage
          cascade
          top
          src={
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/belt.jpg"
          }
          waves
        />
        <MDBCardBody cascade className="text-center">
          <MDBCardTitle tag="h5">{hotel.hotelname}</MDBCardTitle>
          <MDBCardTitle>
            <a href="#!">
              <strong>{hotel.hotellocation}</strong>
            </a>
          </MDBCardTitle>
          <MDBCardText>{hotel.discription}</MDBCardText>
          <MDBCardText>Price:{hotel.price}</MDBCardText>
          <MDBCardFooter>
            <span className="float-left">Rating:{hotel.rating}</span>
            <span className="float-right">Location:{hotel.hotellocation}</span>
            <MDBTooltip placement="top">
              <MDBBtn
                tag="a"
                color="transparent"
                size="lg"
                className="p-1 m-0 z-depth-0"
              ></MDBBtn>
              <div></div>
            </MDBTooltip>
          </MDBCardFooter>
          <Link to={`/BookNow/Hotel/${hotel.slug}`}>
            <MDBBtn hotelId={hotel.id}>BOOK NOW</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default observer(HotelItem);
