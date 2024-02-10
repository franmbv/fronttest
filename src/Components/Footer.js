import "../Stylesheets/Footer.css";
import IconGrab from "../Images/icongrab.png";

const Footer = () => {
  return (
    <footer className="finalFooter">
      <p className="footerText" style={{ width: "300px" }}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
      </p>
      <img className="footerImage" src={IconGrab} alt="prb_header" />
      <p className="footerText" style={{ width: "200px" }}>All rights reserved to Lorem Ipsum© 2022</p>
    </footer>
  );
};

export default Footer;
