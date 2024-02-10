import "../Stylesheets/Header.css"
import { HiOutlineStatusOnline } from "react-icons/hi"
import { FaRegCirclePlay } from "react-icons/fa6"



const Header = () => {
  return (
    <header>
      <div>
        <span className="isLive">
          Live &nbsp;&nbsp; <HiOutlineStatusOnline /> {" "}
        </span>
        <span> Lorem ipsu dolor sit amet </span>
        <span className="isJoin">
          {" "}
          Join Now &nbsp;&nbsp;
          <FaRegCirclePlay />
        </span>
      </div>
    </header>
  );
};

export default Header;
