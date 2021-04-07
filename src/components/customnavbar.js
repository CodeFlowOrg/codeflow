import React, { useState } from "react";
import "./styles/customnav.css";
import logo from "../assets/logo.png";
import { Navbar } from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import { HiOutlineViewList } from "react-icons/hi";

const Customnav = (props) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div>
      <Navbar
        className="justify-content-between"
        style={
          showLinks ? { background: "#01bfd9" } : { background: props.color }
        }
      >
        <div className="headings-logos-buttons">
          <HiOutlineViewList
            className="nav-dynamic-button"
            size={40}
            onClick={() => setShowLinks(!showLinks)}
          />
          <Link to="/">
            <img src={logo} alt="logo" height={props.height} />
          </Link>
        </div>
        <div className="navs" id={showLinks ? "hidden" : ""}>
          <NavLink activeClassName='nav_active'
            className=" m-2 nav navbar-link-css"
            to="/"
            onClick={() => setShowLinks(!showLinks)}
          >
            HOME
          </NavLink>
          <NavLink activeClassName='nav_active'
            className=" m-2 nav navbar-link-css"
            to="/about"
            onClick={() => setShowLinks(!showLinks)}
          >
            ABOUT
          </NavLink>{" "}
          <NavLink activeClassName='nav_active'
            className=" m-2 nav navbar-link-css"
            to="/events"
            onClick={() => setShowLinks(!showLinks)}
          >
            EVENTS
          </NavLink>
          <NavLink activeClassName='nav_active'
            className=" m-2 nav navbar-link-css"
            to="/team"
            onClick={() => setShowLinks(!showLinks)}
          >
            TEAM
          </NavLink>{" "}
          <NavLink activeClassName='nav_active'
            className=" m-2 nav navbar-link-css"
            to="/contact"
            onClick={() => setShowLinks(!showLinks)}
          >
            CONTACT US
          </NavLink>
        </div>
      </Navbar>
    </div>
  );
};

export default Customnav;
