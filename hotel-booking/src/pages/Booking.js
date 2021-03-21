import image1 from "./media/banner.jpeg";
import { Banner, H1 } from "../Components/Styles";

function Booking() {
  return (
    <div>
      <Banner>
        <img src={image1} alt="banner" style={{ width: "100%" }} />
      </Banner>

      <H1>Choose your booking</H1>
    </div>
  );
}

export default Booking;
