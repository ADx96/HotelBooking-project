import React from "react";
import { CardsContainer, CardsContainer2 } from "../Components/Styles";
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
import { H11 } from "./Styles";
import ReactStars from "react-rating-stars-component";
import img5 from "../media/5.jpg";
import { Link } from "react-router-dom";

const Cards = ({ hotel }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <CardsContainer>
      <H11> TOP HOTELS BOOKING </H11>
      <MDBRow>
        <MDBCol md="3">
          <MDBCard wide cascade>
            <MDBView cascade>
              <MDBCardImage
                hover
                overlay="white-slight"
                className="card-img-top"
                src="https://media-cdn.tripadvisor.com/media/photo-s/13/17/48/d5/montana-entrance.jpg"
                alt="Card cap"
              />
            </MDBView>

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong> MONTANA HOTEL </strong>
              </MDBCardTitle>

              <p className="font-weight-bold blue-text">UK, London</p>

              <MDBCardText>
                Montana Hotel is a unique 55-room boutique hotel situated in the
                heart of Kensington, Knightsbridge and Chelsea.{" "}
              </MDBCardText>

              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
              <Link to={`/BookingSubmission`}>
                <MDBBtn>BOOK NOW </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="3">
          <MDBCard>
            <MDBCardImage
              hover
              overlay="white-light"
              className="card-img-top"
              src={img5}
              alt="man"
            />

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>The Westin Grand</strong>
              </MDBCardTitle>
              <p className="font-weight-bold blue-text">Germany, Berlin</p>
              <MDBCardText>
                Back in 1987, the DDR government pulled out all the stops to
                celebrate the East German capital’s 750th birthday.{" "}
              </MDBCardText>

              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />

              <MDBBtn>BOOK NOW</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="3">
          <MDBCard>
            <MDBCardImage
              hover
              overlay="white-light"
              className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yBWVVOCQRfJmvNgOgIxez36qTw24uyST0w&usqp=CAU"
              alt="man"
            />

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>Luxury Hotel</strong>
              </MDBCardTitle>
              <p className="font-weight-bold blue-text"> Turkey, Antalya</p>
              <MDBCardText>
                Adam & Eve Hotels in Belek – Antalya, Turkey, offer an exclusive
                perspective on holidays. A luxury hotel.{" "}
              </MDBCardText>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
              <MDBBtn>BOOK NOW</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <CardsContainer2>
        <MDBRow>
          <MDBCol md="3">
            <MDBCard wide cascade>
              <MDBView cascade>
                <MDBCardImage
                  hover
                  overlay="white-slight"
                  className="card-img-top"
                  src="https://www.danfoss.com/media/7007/burj_khalifa_case_story_1120x747.jpg?anchor=center&mode=crop&width=520"
                  alt="Card cap"
                />
              </MDBView>

              <MDBCardBody cascade className="text-center">
                <MDBCardTitle className="card-title">
                  <strong>Burj Khalifa</strong>
                </MDBCardTitle>
                <p className="font-weight-bold blue-text">UAE, Dubai</p>
                <MDBCardText>
                  Burj Kahlifa, the tallest building in the world, has been in
                  movies and must-visit lists for a long time. It has modern
                  technology that used.{" "}
                </MDBCardText>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
                <MDBBtn>BOOK NOW</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard>
              <MDBCardImage
                hover
                overlay="white-light"
                className="card-img-top"
                src="https://cf.bstatic.com/xdata/images/hotel/270x200/184961180.jpg?k=0caf03d9c285bbc2593cbadff6cf505180749146a52dc6937f6aab67b65de468&o="
                alt="man"
              />

              <MDBCardBody cascade className="text-center">
                <MDBCardTitle className="card-title">
                  <strong>Country Inn</strong>
                </MDBCardTitle>
                <p className="font-weight-bold blue-text">Page, AZ, USA</p>
                <MDBCardText>
                  15 km from Antelope Canyon, Country Inn & Suites by Radisson,
                  Page, AZ provides accommodation.{" "}
                </MDBCardText>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
                <MDBBtn>BOOK NOW</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard>
              <MDBCardImage
                hover
                overlay="white-light"
                className="card-img-top"
                src="https://pix10.agoda.net/hotelImages/9953894/-1/9ffa20d4b69829af0867cb8a0ed79d6c.jpg?s=1024x768"
                alt="man"
              />

              <MDBCardBody cascade className="text-center">
                <MDBCardTitle className="card-title">
                  <strong>Liber Hotel</strong>
                </MDBCardTitle>
                <p className="font-weight-bold blue-text">Japan</p>
                <MDBCardText>
                  One of the famous Hotel in Japan, it has swwiming pool, famous
                  resturant Located at street ''.{" "}
                </MDBCardText>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
                <MDBBtn>BOOK NOW</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </CardsContainer2>
    </CardsContainer>
  );
};

export default Cards;
