import "../Stylesheets/ThirdCard.css";
import Pic5 from "../Images/Pic5.png";

const ThirdCard = () => {
  return (
    <div className="threecard">
      <div className="threecard-content">
        <p className="threecard-text">Lorem ipsum dolor sit amet, consetetur</p>
        <button className="threecard-btn white">LOREM IPSUM DOLOR SIT</button>
        <button className="threecard-btn transparent">
          LOREM IPSUM DOLOR SIT AMET
        </button>
      </div>
      <img src={Pic5} alt="pic5" className="threecard-image" />
    </div>
  );
};

export default ThirdCard;
