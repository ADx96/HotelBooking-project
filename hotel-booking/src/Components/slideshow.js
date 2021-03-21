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
        <img className="d-block w-90" src='https://accommodation-med.com/wp-content/uploads/2016/08/Cheap-Hotels-Booking.jpg' alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-90" src='https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-90" src='https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;
