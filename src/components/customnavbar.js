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
          <Link style={{paddingLeft: props.padding, 
            paddingRight: props.padding
          }} 
          className=" m-2 nav " to="/">
            HOME
          </Link>
          <Link style={{paddingLeft: props.padding, 
            paddingRight: props.padding
          }}  
          className=" m-2 nav" to="/about">
            ABOUT
          </Link>{" "}
          <Link style={{paddingLeft: props.padding, 
            paddingRight: props.padding
          }}  
          className=" m-2 nav" to="/events">
            EVENTS
          </Link>
          <Link style={{paddingLeft: props.padding, 
            paddingRight: props.padding
          }}  
          className=" m-2 nav" to="/team">
            TEAM
          </Link>{" "}
          <Link
          style={{paddingLeft: props.padding, 
            paddingRight: props.padding
          }}  
          className=" m-2 nav" to="/contact">
            CONTACT US
          </Link>
        </div>
      </Navbar>
    </div>
  );
};

export default Customnav;
