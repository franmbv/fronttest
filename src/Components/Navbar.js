import "../Stylesheets/Navbar.css";
import PrbHeader from "../Images/PrbHeader.png";
import IconGrab from "../Images/icongrab.png";

const Navbar = () => {
  const routes = [
    { href: "#", info: "LOREM IPSUM" },
    { href: "#", info: "LOREM IPSUM" },
    { href: "#", info: "LOREM IPSUM" },
    { href: "#", info: "LOREM IPSUM" },
    { href: "#", info: "LOREM IPSUM" },
    { href: "#", info: "LOREM IPSUM" },
  ];
  return (
    <div>
      <nav>
        <img src={PrbHeader} alt="prb_header" className="nav-background" />
        <div className="nav-content">
          <div className="nav-header">
            <img src={IconGrab} alt="grab" className="nav-iconheader" />
            <div className="nav-contentbody">
              <div className="nav-route">
                {routes.map((route, index) => {
                  return (
                    <a key={index} href={route.href} className="route">
                      {route.info}
                    </a>
                  );
                })}
              </div>
              <div className="nav-body">
                <h1 className="nav-bodytitle">LOREM IPSUM</h1>
                <h1 className="nav-bodytitle2">LOREM IPSUM DOLOR &nbsp;</h1>
                <h1 className="nav-bodytitle">LOREM IPSUM</h1>
                <button className="nav-bodybutton">WHAT IS NEXT</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="nav-footer">
        <div className="nav-footer-contenttext">
          <p>Lorem ipsum dolor sit amet, consetetur</p>
        </div>
        <div className="nav-footer-contenttime">
          <div className="blockTime">
            <span className="blockCounter">170</span>
            <span className="blockSpan">days</span>
          </div>
          <hr className="divider" />
          <div className="blockTime">
            <span className="blockCounter">13</span>
            <span className="blockSpan">Hour</span>
          </div>
          <hr className="divider" />
          <div className="blockTime">
            <span className="blockCounter">39</span>
            <span className="blockSpan">Minutes</span>
          </div>
          <hr className="divider" />
          <div className="blockTime">
            <span className="blockCounter">29</span>
            <span className="blockSpan">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
