import React from "react";
import { DetailWrapper } from "../Components/Styles";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, MDBCardImage, MDBView } from "mdbreact";
import hotelsmobx from "./HotelsMobx";
import { observer } from "mobx-react";
import Movieslist from "./MovieList";
import BookingSubmission from "../pages/BookingSubmission";

const HotelsDetails = () => {
  const { hotelslug } = useParams();
  if (hotelsmobx.loading) return <h1>loading</h1>;

  const hotel = hotelsmobx.hotels.find((hotel) => hotel.slug === hotelslug);
  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <Link to={`/BookNow/`}>
        <Button variant="contained" color="primary" disableElevation>
          Back to Bookings{" "}
        </Button>
      </Link>

      <h1>Hotel Name:{hotel.hotelname}</h1>
      <MDBView cascade>
        <div style={{ justifyContent: "center" }}>
          <img
            style={{ marginLeft: "30%", width: 800 }}
            hover
            overlay="white-slight"
            className="card-img-top"
            src="https://images-ext-2.discordapp.net/external/Hm1HRMg52ewxkoGIdlE3yh96p9p0zgeo9Es2y6bImz8/%3Fixlib%3Drb-1.2.1%26ixid%3DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D1950%26q%3D80/https/images.unsplash.com/photo-1543968332-f99478b1ebdc?width=986&height=658"
            alt="Card cap"
          />{" "}
        </div>
      </MDBView>

      <div>
        <p>discription:{hotel.description}</p>
        <p>
          <h2>Price:</h2>
          {hotel.price} KD
        </p>
        <p>
          <h2>Rating:</h2>
          {hotel.rating}
        </p>
        <p>
          <h2>Location:</h2>
          {hotel.hotellocation}
        </p>
      </div>
      <BookingSubmission />
      <Movieslist />
    </div>
  );
};

export default observer(HotelsDetails);
