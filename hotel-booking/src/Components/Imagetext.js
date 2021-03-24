import { Textblock } from "../Components/Styles";
import img4 from "../media/4.jpg";
import "../App.css";

let style = {
  marginLeft: "13%",
  height: "574px",
};
function ImageText() {
  return (
    <div class="Image-container">
      <img src={img4} alt="" style={style} />
    </div>
  );
}

export default ImageText;
