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
const Cards = () => {
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
                src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                alt="Card cap"
              />
            </MDBView>

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>Alice Mayer</strong>
              </MDBCardTitle>

              <p className="font-weight-bold blue-text">Photographer</p>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.{" "}
              </MDBCardText>
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
              src="https://mdbcdn.b-cdn.net/img/Photos/Others/men.jpg"
              alt="man"
            />

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>Billy Coleman</strong>
              </MDBCardTitle>

              <p className="font-weight-bold blue-text">Wev developer</p>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.{" "}
              </MDBCardText>

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
              src="https://mdbcdn.b-cdn.net/img/Photos/Others/men.jpg"
              alt="man"
            />

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>Billy Coleman</strong>
              </MDBCardTitle>

              <p className="font-weight-bold blue-text">Wev developer</p>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.{" "}
              </MDBCardText>

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
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                  alt="Card cap"
                />
              </MDBView>

              <MDBCardBody cascade className="text-center">
                <MDBCardTitle className="card-title">
                  <strong>Alice Mayer</strong>
                </MDBCardTitle>

                <p className="font-weight-bold blue-text">Photographer</p>

                <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.{" "}
                </MDBCardText>
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
                src="https://mdbcdn.b-cdn.net/img/Photos/Others/men.jpg"
                alt="man"
              />

              <MDBCardBody cascade className="text-center">
                <MDBCardTitle className="card-title">
                  <strong>Billy Coleman</strong>
                </MDBCardTitle>

                <p className="font-weight-bold blue-text">Wev developer</p>

                <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.{" "}
                </MDBCardText>

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
                src="https://mdbcdn.b-cdn.net/img/Photos/Others/men.jpg"
                alt="man"
              />

              <MDBCardBody cascade className="text-center">
                <MDBCardTitle className="card-title">
                  <strong>Billy Coleman</strong>
                </MDBCardTitle>

                <p className="font-weight-bold blue-text">Wev developer</p>

                <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.{" "}
                </MDBCardText>

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
