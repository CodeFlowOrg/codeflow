import "./styles/customnav.css";
import logo from "../assets/logo.png";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Customnav = (props) => {
  return (
    <div>
      <Navbar
        className="justify-content-between"
        style={{ background: props.color }}
      >
        <Link to="/">
          <img src={logo} alt="logo" height={props.height} />
        </Link>
        <div className=" navs">
          <Link className=" m-2 nav " to="/">
            Home
          </Link>
          <Link className=" m-2 nav" to="/about">
            About
          </Link>{" "}
          <Link className=" m-2 nav" to="/events">
            Events
          </Link>
          <Link className=" m-2 nav" to="/team">
            Team
          </Link>{" "}
          <Link className=" m-2 nav" to="/contact">
            Contact Us
          </Link>
        </div>
      </Navbar>
    </div>
  );
};

export default Customnav;
