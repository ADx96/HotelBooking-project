import React from "react";
import { DetailWrapper } from "../styles";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const HotelsDetails = (props) => {
  const hotelSlug = useParams().hotelSlug;
  const hotel = props.hotels.find((hotel) => hotel.slug === hotelSlug);
  return (
    <DetailWrapper>
      <Link to={`/BookNow/`}>
        <p>Back to Products</p>
      </Link>

      <h1>{hotel.name}</h1>

      <img src={hotel.image} alt={hotel.name} />

      <p>{hotel.description}</p>
      <p>{hotel.price} KD</p>
      
    </DetailWrapper>
 

  );
};

export default HotelsDetails;
