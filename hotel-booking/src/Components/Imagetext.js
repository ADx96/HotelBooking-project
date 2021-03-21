import { Textblock } from "../Components/Styles";
import img4 from "../media/4.jpg";
import "../App.css";
function ImageText() {
  return (
    <div class="Image-container">
      <Textblock>
        <h4>Nature</h4>
        <p>What a beautiful sunrise</p>
      </Textblock>
      <img src={img4} alt="" style={{ width: "100%", height: "1000px" }} />
    </div>
  );
}

export default ImageText;
