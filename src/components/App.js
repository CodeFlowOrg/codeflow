import './styles/App.css';

import { HashRouter, Route, Link } from 'react-router-dom';
import Home from './home';
import Team from './team';
import Events from './event';
import About from './about';
import Contact from './contact';
import Addevent from './addevent';
import Footer from './Footer';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route path="/" exact={true} component={Home} />
        <Route path="/team" exact={true} component={Team} />
        <Route path="/events" exact={true} component={Events} />
        <Route path="/about" exact={true} component={About} />
        <Route path="/contact" exact={true} component={Contact} />
        <Route path="/Add" exact={true} component={Addevent} />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
