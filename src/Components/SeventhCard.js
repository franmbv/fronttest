import "../Stylesheets/SeventhCard.css";
import Slider from "./Slider";
import Pic7 from "../Images/Pic7.png";
import Pic8 from "../Images/Pic8.png";
import Pic9 from "../Images/Pic9.png";
import Pic10 from "../Images/Pic10.png";
const SeventhCard = () => {

  const images = [Pic7, Pic8, Pic9, Pic10]

  return (
    <div className="sevencard">
      <h1 className="sevencard-title">Lorem ipsum dolor sit amet</h1>
      <div className="images-container">
        <Slider images={images}/>
      </div>
      <button className="btnstandar-seven">VIEW ALL</button>
    </div>
  );
};

export default SeventhCard;
