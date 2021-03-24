import "../App.css";
import { Gallery } from "../Components/Styles";
import img1 from "../media/6.jpeg";
import img2 from "../media/9.jpg";
import img3 from "../media/10.jpg";
function ImageGallery() {
  return (
    <Gallery>
      <>
        <div className="gallarycontainer">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="hovereffect">
              <img className="img-responsive" src={img2} alt="" />
              <div className="overlay">
                <h2>Hover effect 1</h2>
                <a className="info">Check details here</a>
              </div>
            </div>
          </div>
        </div>
        <div className="gallarycontainer">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="hovereffect">
              <img className="img-responsive" src={img3} alt="" />
              <div className="overlay">
                <h2>Hover effect 1</h2>
                <a className="info">Check details here</a>
              </div>
            </div>
          </div>
        </div>
        <div className="gallarycontainer">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="hovereffect">
              <img className="img-responsive" src={img1} alt="" />
              <div className="overlay">
                <h2>Hover effect 1</h2>
                <a className="info">Check details here</a>
              </div>
            </div>
          </div>
        </div>
        <div className="gallarycontainer">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="hovereffect">
              <img className="img-responsive" src={img1} alt="" />
              <div className="overlay">
                <h2>Hover effect 1</h2>
                <a className="info">Check details here</a>
              </div>
            </div>
          </div>
        </div>
      </>
    </Gallery>
  );
}

export default ImageGallery;
