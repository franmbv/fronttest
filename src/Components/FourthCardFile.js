import { FaRegCirclePlay } from "react-icons/fa6"
import "../Stylesheets/FourthCardFile.css"

const FourthCardFile = (props) => {
  return (
    <div className="fourcard-file">
      <FaRegCirclePlay className="icon"/>
      <img
        className="fourcard-files"
        src={props.image}
        alt="file"
      />
      <p className="fourcard-info">{props.info}</p>
    </div>
  );
};

export default FourthCardFile;
