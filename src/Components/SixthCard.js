import "../Stylesheets/SixthCard.css"
import Pic6 from "../Images/Pic6.png"

const SixthCard = () => {
  return (
    <div>
      <div class="sixcard">
        <img
          className="sixcard-image"
          src={Pic6}
          alt="background"
        />
        <div className="sixcard-content">
          <h1 className="sixcard-title">Lorem ipsum</h1>
          <p className="sixcard-info">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <button class="btnstandar-six">
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default SixthCard;
