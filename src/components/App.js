import './styles/App.css';

import { HashRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Team from './pages/team';
import Events from './pages/event';
import Hackathon from './pages/Hackathon';
import Contact from './pages/contact';
import Addevent from './pages/addevent';
import Footer from '../components/layout/Footer';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route path="/" exact={true} component={Home} />
        <Route path="/team" exact={true} component={Team} />
        <Route path="/events" exact={true} component={Events} />
        <Route path="/hackathon" exact={true} component={Hackathon} />
        <Route path="/contact" exact={true} component={Contact} />
        <Route path="/Add" exact={true} component={Addevent} />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
