import SlideShow from "../Components/slideshow";
import "../App.css";
import ImageText from "../Components/Imagetext";
import Cards from "../Components/Cards";
import ImageGallery from "../Components/ImageGallery";
import Slider1 from "../Components/slider";
import Contact from "../Components/Contact";
function HomePage() {
  return (
    <div className="Slider-container">
      <SlideShow />
      <Cards />
      <ImageGallery />
      <ImageText />
      <Slider1 />
      <Contact />
    </div>
  );
}

export default HomePage;
