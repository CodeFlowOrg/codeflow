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
          />
          <Link to="/">
            <img src={logo} alt="logo" height={props.height} />
          </Link>
        </div>
        <div className="navs" >
          <NavLink activeClassName='nav_active'
            className=" m-2 nav navbar-link-css"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink activeClassName='nav_active'
            className=" m-2 nav navbar-link-css"
            to="/about"
          >
            ABOUT
          </NavLink>{" "}
          <NavLink activeClassName='nav_active'
            className=" m-2 nav navbar-link-css"
            to="/events"
          >
            EVENTS
          </NavLink>
          <NavLink activeClassName='nav_active'
            className=" m-2 nav navbar-link-css"
            to="/team"
          >
            TEAM
          </NavLink>{" "}
          <NavLink activeClassName='nav_active'
            className=" m-2 nav navbar-link-css"
            to="/contact"
          >
            CONTACT US
          </NavLink>
        </div>
      </Navbar>
    </div>
  );
};

export default Customnav;
