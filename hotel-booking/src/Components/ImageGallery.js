import "../App.css";
import { Gallery } from "../Components/Styles";

function ImageGallery() {
  return (
    <Gallery>
      <>
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div class="hovereffect">
            <img
              class="img-responsive"
              src="http://placehold.it/350x200"
              alt=""
            />
            <div class="overlay">
              <h2>Hover effect 1</h2>
              <a class="info">link here</a>
            </div>
          </div>
        </div>
      </>
    </Gallery>
  );
}

export default ImageGallery;
