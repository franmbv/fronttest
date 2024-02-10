import "../Stylesheets/FirstCard.css";
import Pic1 from "../Images/Pic1.png";

const FirstCard = () => {
  return (
    <div className="firstcard">
      <div className="firstcard-text">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit
        </p>
      </div>
      <div>
        <img src={Pic1} alt="pic1" className="firstcard-image" />
      </div>
    </div>
  );
};

export default FirstCard;
