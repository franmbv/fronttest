import "../Stylesheets/FourthCard.css";
import FourthCardFile from "./FourthCardFile";
import Pic1 from "../Images/Pic1.png";

const FourthCard = () => {
  const files = [
    { video: Pic1, info: "Lorem ipsum dolor sit amet, consetetur" },
    { video: Pic1, info: "Lorem ipsum dolor sit amet, consetetur" },
    { video: Pic1, info: "Lorem ipsum dolor sit amet, consetetur" },
    { video: Pic1, info: "Lorem ipsum dolor sit amet, consetetur" },
    { video: Pic1, info: "Lorem ipsum dolor sit amet, consetetur" },
    { video: Pic1, info: "Lorem ipsum dolor sit amet, consetetur" },
  ];
  return (
    <div className="fourcard">
      <h1 className="fourcard-title">Latest videos</h1>
      <div className="fourcard-content">
        {files.map((file, index) => {
          return <FourthCardFile key={index} image={file.video} info={file.info} />;
        })}
      </div>
      <button className="fourcard-btn">VIEW ALL</button>
    </div>
  );
};

export default FourthCard;
