import React from "react";
import { DetailWrapper } from "../Components/Styles";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";
const HotelsDetails = (props) => {
  const hotelSlug = useParams().hotelslug;
  const hotel = props.hotels.find((hotel) => hotel.slug === hotelSlug);
  return (
    <DetailWrapper>
      <Link to={`/BookNow/`}>
        <p>Back Bookings</p>
      </Link>

      <h1>{hotel.hotelname}</h1>

      <img src={hotel.image} alt={hotel.name} />

      <p>{hotel.description}</p>
      <p>{hotel.price} KD</p>
      <p>{hotel.rating}</p>
      <p>{hotel.hotellocation}</p>
      <p>{hotel.room}</p>
      <Link to={`/BookingSubmission`}>
        <MDBBtn BOOK NOW></MDBBtn>
      </Link>
    </DetailWrapper>
  );
};

export default HotelsDetails;
