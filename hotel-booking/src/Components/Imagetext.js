import { BigImage, Textblock } from "../Components/Styles";
import "../App.css";
function ImageText() {
  return (
    <div class="Image-container">
      <Textblock>
        <h4>Nature</h4>
        <p>What a beautiful sunrise</p>
        <BigImage alt="Image with Text " />
      </Textblock>
    </div>
  );
}

export default ImageText;
