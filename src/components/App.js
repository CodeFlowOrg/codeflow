import "./styles/App.css";

import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Events from "./pages/event";
import Hackathon from "./pages/Hackathon";
import Contact from "./pages/collaboration";
import Addevent from "./pages/addevent";
import OpenSource from "./pages/openSource"
import Footer from "../components/layout/Footer";

import ScrollButton from "./utilities/ScrollButton";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route path="/" exact={true} component={Home} />
        <Route path="/events" exact={true} component={Events} />
        <Route path="/openSource" exact={true} component={OpenSource} />
        <Route path="/hackathon" exact={true} component={Hackathon} />
        <Route path="/contact" exact={true} component={Contact} />
        <Route path="/Add" exact={true} component={Addevent} />
        <Footer />
      </div>
      <ScrollButton />
    </HashRouter>
  );
}

export default App;
