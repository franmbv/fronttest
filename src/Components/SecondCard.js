import "../Stylesheets/SecondCard.css";
import Pic2 from "../Images/Pic2.png";
import Pic3 from "../Images/Pic3.png";
import Pic4 from "../Images/Pic4.png";

const SecondCard = () => {
  const cards = [
    { id: 1, image: Pic2, text: "Lorem Ipsum" },
    { id: 2, image: Pic3, text: "Lorem Ipsum" },
    { id: 3, image: Pic4, text: "Lorem Ipsum" },
  ];

  return (
    <div className="secondcard">
      <h1 className="secondcard-title">Lorem ipsum</h1>
      <p className="secondcard-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <div className="secondcard-content">
        {cards.map((card) => {
          return (
            <div key={card.id} className="card">
              <img src={card.image} alt={card.image} className="card-image" />
              <button className="btnCard">{card.text}</button>
            </div>
          );
        })}
      </div>
      <button className="btn-secondcard">LEARN MORE</button>
    </div>
  );
};

export default SecondCard;
