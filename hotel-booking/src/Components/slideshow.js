import { Carousel } from "react-bootstrap";
import React, { useState } from "react";

function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;
