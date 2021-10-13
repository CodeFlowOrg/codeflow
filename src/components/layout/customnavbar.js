import React, { useState, useEffect } from "react";
import "../styles/customnav.css";
import logo from "../../assets/logo.png";
import { Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineViewList } from "react-icons/hi";
import HomeIcon from "@mui/icons-material/Home";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CodeIcon from "@mui/icons-material/Code";
import EventIcon from "@mui/icons-material/Event";
import LaptopIcon from "@mui/icons-material/Laptop";

const Customnav = (props) => {
  const [showLinks, setShowLinks] = useState(false);

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  const size = useWindowSize();

  return (
    <div className="fixed">
      <div>
        <Navbar
          className="justify-content-between navbar"
        >
          <div className="headings-logos-buttons ">
            <Link to="/">
              <img src={logo} alt="logo" height={props.height} />
            </Link>
            <HiOutlineViewList
              style={{ color: "white" }}
              className="nav-dynamic-button"
              size={40}
              onClick={() => setShowLinks(!showLinks)}
            />
          </div>
          <div
            className="navs"
            id={showLinks && size.width <= "868" ? "hidden" : ""}
          >
            <NavLink
              activeClassName="nav_active"
              className=" m-2 nav navbar-link-css"
              to="/"
              onClick={() => setShowLinks(!showLinks)}
            >
              <HomeIcon />
              HOME
            </NavLink>
            <NavLink
              activeClassName="nav_active"
              className=" m-2 nav navbar-link-css"
              to="/events"
              onClick={() => setShowLinks(!showLinks)}
            >
              <EventIcon />
              EVENTS
            </NavLink>{" "}
            <NavLink
              activeClassName="nav_active"
              className=" m-2 nav navbar-link-css"
              to="/hackathon"
              onClick={() => setShowLinks(!showLinks)}
            >
              <CodeIcon />
              HACKATHONS
            </NavLink>{" "}
            <NavLink
              activeClassName="nav_active"
              className=" m-2 nav navbar-link-css"
              to="/openSource"
              onClick={() => setShowLinks(!showLinks)}
            >
              <LaptopIcon />
              OPEN SOURCE
            </NavLink>{" "}
            <NavLink
              activeClassName="nav_active"
              className=" m-2 nav navbar-link-css"
              to="/collaboration"
              onClick={() => setShowLinks(!showLinks)}
            >
              <GroupAddIcon />
              COLLABORATION
            </NavLink>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Customnav;
