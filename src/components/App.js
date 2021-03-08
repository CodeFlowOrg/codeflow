import "./styles/App.css";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import Team from "./team";
import Events from "./event";
import About from "./about";
import Contact from "./contact";
import Addevent from "./addevent";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>
            Codeflow
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href={process.env.PUBLIC_URL + "/"}>Home</Nav.Link>
            <Nav.Link href={process.env.PUBLIC_URL + "/about"}>About</Nav.Link>
            <Nav.Link href={process.env.PUBLIC_URL + "/event"}>Events</Nav.Link>
            <Nav.Link href={process.env.PUBLIC_URL + "/teams"}>Team</Nav.Link>
            <Nav.Link href={process.env.PUBLIC_URL + "/contact"}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar>

        <Route
          path="{process.env.PUBLIC_URL + '/'}"
          exact={true}
          component={Home}
        />
        <Route
          path={process.env.PUBLIC_URL + "/teams"}
          exact={true}
          component={Team}
        />
        <Route
          path={process.env.PUBLIC_URL + "/event"}
          exact={true}
          component={Events}
        />

        <Route
          path={process.env.PUBLIC_URL + "/about"}
          exact={true}
          component={About}
        />
        <Route
          path={process.env.PUBLIC_URL + "/contact"}
          exact={true}
          component={Contact}
        />

        <Route
          path={process.env.PUBLIC_URL + "/add"}
          exact={true}
          component={Addevent}
        />
      </div>
    </Router>
  );
}

export default App;
