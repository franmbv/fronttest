import "../Stylesheets/FifthCard.css";
import JoinUs from "../Images/JoinUs.png";

const FifthCard = () => {
  return (
    <div className="fivecard">
      <img className="fivecard-background" src={JoinUs} alt="background" />
      <div className="fivecard-form">
        <h1 className="join-text" style={{ fontSize: "56px", paddingTop: "45px" }}>JOIN US.</h1>
        <h1 className="join-text" style={{ fontSize: "16px" }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        </h1>
        <form className="form">
          <div className="form-inputbox">
            <input
              type="text"
              className="form-input"
              placeholder="Name"
              style={{ marginRight: "0px", width: "100%" }}
            />
            <input
              type="text"
              className="form-input"
              placeholder="Username"
            />
          </div>
          <div className="form-inputbox">
            <input
              type="text"
              className="form-input"
              placeholder="Phone"
              style={{ marginRight: "0px" }}
            />
            <input type="text" className="form-input" placeholder="Email" />
          </div>
          <input
            type="text"
            className="form-input"
            placeholder="Departament"
          />
          <textarea className="form-input" placeholder="Mensaje"></textarea>
          <button className="btnstandar-five">I’M IN</button>
        </form>
        <p className="form-footer">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
      </div>
    </div>
  );
};

export default FifthCard;
