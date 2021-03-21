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

const Cards = () => {

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
              Montana Hotel is a unique 55-room boutique hotel situated in the heart of Kensington, Knightsbridge and Chelsea.{" "}
              </MDBCardText>

             
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
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
              src="data:image/jpeg;base64,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"
              alt="man"
            />

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>The Westin Grand</strong>
              </MDBCardTitle>

              <p className="font-weight-bold blue-text">Germany, Berlin</p>

              <MDBCardText>
              Back in 1987, the DDR government pulled out all the stops to celebrate the East German capital’s 750th birthday.{" "}
              </MDBCardText>
            
             
             
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,


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
              src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yBWVVOCQRfJmvNgOgIxez36qTw24uyST0w&usqp=CAU"
              alt="man"
            />

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>Luxury Hotel</strong>
              </MDBCardTitle>

              <p className="font-weight-bold blue-text"> Turkey, Antalya</p>

              <MDBCardText>
              Adam & Eve Hotels in Belek – Antalya, Turkey, offer an exclusive perspective on holidays. A luxury hotel.{" "}
              </MDBCardText>

           
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
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
              Burj Kahlifa, the tallest building in the world, has been in movies and must-visit lists for a long time. It has modern technology that used. {" "}
                </MDBCardText>

              
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
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
               15 km from Antelope Canyon, Country Inn & Suites by Radisson, Page, AZ provides accommodation.{" "}
                </MDBCardText>

              
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,

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
                  One of the famous Hotel in Japan, it has swwiming pool, famous resturant Located at street ''.{" "}
                </MDBCardText>
            
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
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
