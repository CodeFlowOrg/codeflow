import "./styles/App.css";

import { HashRouter, Route, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Home from "./home";
import Team from "./team";
import Events from "./event";
import About from "./about";
import Contact from "./contact";
import Addevent from "./addevent";
import logo from "../assets/logo.png";
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar className=" justify-content-between">
          <Link to="/">
            <img src={logo} alt="logo" height="60px" className="m-1" />
          </Link>
          <div className=" navs">
            <Link className=" m-3 nav " to="/">
              Home
            </Link>
            <Link className=" m-3 nav" to="/about">
              About
            </Link>{" "}
            <Link className=" m-3 nav" to="/events">
              Events
            </Link>
            <Link className=" m-3 nav" to="/team">
              Team
            </Link>{" "}
            <Link className=" m-3 nav" to="/contact">
              Contact Us
            </Link>
          </div>
        </Navbar>
        <Route path="/" exact={true} component={Home} />
        <Route path="/team" exact={true} component={Team} />
        <Route path="/events" exact={true} component={Events} />
        <Route path="/about" exact={true} component={About} />
        <Route path="/contact" exact={true} component={Contact} />
        <Route path="/Add" exact={true} component={Addevent} />
      </div>
    </HashRouter>
  );
}

export default App;
