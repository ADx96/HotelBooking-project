import Slider from "react-slick";
import "../App.css";

import img7 from "../media/7.jpg";
import img8 from "../media/8.jpg";
import img9 from "../media/9.jpg";
import img10 from "../media/10.jpg";

import ReactStars from "react-rating-stars-component";

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
} from "mdbreact";
function Slider1() {
  let settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="slidercontainer">
      <div>
        <Slider {...settings}>
          <div>
            <MDBCard wide cascade style={{ width: 400 }}>
              <MDBView cascade>
                <MDBCardImage
                  hover
                  overlay="white-slight"
                  className="card-img-top"
                  src={img9}
                  alt="Card cap"
                />
              </MDBView>

              <MDBCardBody cascade className="text-center">
                <MDBCardTitle className="card-title">
                  <strong> MONTANA HOTEL </strong>
                </MDBCardTitle>

                <p className="font-weight-bold blue-text">UK, London</p>

                <MDBCardText>
                  Montana Hotel is a unique 55-room boutique hotel situated in
                  the heart of Kensington, Knightsbridge and Chelsea.{" "}
                </MDBCardText>

                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
              </MDBCardBody>
            </MDBCard>
          </div>
          <div>
            <MDBRow>
              <MDBCard wide cascade style={{ width: 400 }}>
                <MDBView cascade>
                  <MDBCardImage
                    hover
                    overlay="white-slight"
                    className="card-img-top"
                    src={img7}
                    alt="Card cap"
                  />
                </MDBView>

                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle className="card-title">
                    <strong> HOTEL </strong>
                  </MDBCardTitle>

                  <p className="font-weight-bold blue-text">UK, London</p>

                  <MDBCardText>
                    Montana Hotel is a unique 55-room boutique hotel situated in
                    the heart of Kensington, Knightsbridge and Chelsea.{" "}
                  </MDBCardText>

                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBRow>
          </div>
          <div>
            <MDBRow>
              <MDBCard wide cascade style={{ width: 400 }}>
                <MDBView cascade>
                  <MDBCardImage
                    hover
                    overlay="white-slight"
                    className="card-img-top"
                    src={img8}
                    alt="Card cap"
                  />
                </MDBView>

                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle className="card-title">
                    <strong> HOTEL </strong>
                  </MDBCardTitle>

                  <p className="font-weight-bold blue-text">UK, London</p>

                  <MDBCardText>
                    Montana Hotel is a unique 55-room boutique hotel situated in
                    the heart of Kensington, Knightsbridge and Chelsea.{" "}
                  </MDBCardText>

                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBRow>
          </div>
          <div>
            <MDBRow>
              <MDBCard wide cascade style={{ width: 400 }}>
                <MDBView cascade>
                  <MDBCardImage
                    hover
                    overlay="white-slight"
                    className="card-img-top"
                    src={img7}
                    alt="Card cap"
                  />
                </MDBView>

                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle className="card-title">
                    <strong> HOTEL </strong>
                  </MDBCardTitle>

                  <p className="font-weight-bold blue-text">UK, London</p>

                  <MDBCardText>
                    Montana Hotel is a unique 55-room boutique hotel situated in
                    the heart of Kensington, Knightsbridge and Chelsea.{" "}
                  </MDBCardText>

                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBRow>
          </div>
          <div>
            <MDBRow>
              <MDBCard wide cascade style={{ width: 400 }}>
                <MDBView cascade>
                  <MDBCardImage
                    hover
                    overlay="white-slight"
                    className="card-img-top"
                    src={img10}
                    alt="Card cap"
                  />
                </MDBView>

                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle className="card-title">
                    <strong> HOTEL </strong>
                  </MDBCardTitle>

                  <p className="font-weight-bold blue-text">UK, London</p>

                  <MDBCardText>
                    Montana Hotel is a unique 55-room boutique hotel situated in
                    the heart of Kensington, Knightsbridge and Chelsea.{" "}
                  </MDBCardText>

                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBRow>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Slider1;
