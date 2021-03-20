import SlideShow from "../Components/slideshow";
import "../App.css";
import ImageText from "../Components/Imagetext";
import Cards from "../Components/Cards";
import ImageGallery from "../Components/ImageGallery";

function HomePage() {
  return (
    <div className="Slider-container">
      <SlideShow />;
      <ImageText />
      <Cards />
      <ImageGallery />
    </div>
  );
}

export default HomePage;
