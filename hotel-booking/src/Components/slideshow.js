import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import img1 from "../media/1.jpg";
import img2 from "../media/2.jpg";
import img3 from "../media/3.jpg";

function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-90" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-90" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-90" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;
