import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';


const Footer = () => {
  return (
  <div className="footer-styling">
    <footer>
      <div className="container">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Codeflow logo" width="100" />
          </Link>
          <div className="footer-logo-text">
            <h2>Codeflow</h2>
            <p>Learning must go on!</p>
          </div>
        </div>
        <div className="footer-link-group">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/hackathon">Hackathons</Link>
          <Link to="/">Open Source</Link>
          <Link to="/">Collaborations</Link>
        </div>
        
        <div className="footer-button-group">
          <IconButton href="https://www.facebook.com/"  target="_blank" rel="noreferrer">
            <FacebookIcon fontSize="large"/>
          </IconButton>
          <IconButton  href="https://www.twitter.com/"  target="_blank" rel="noreferrer">
            <TwitterIcon fontSize="large"/>
          </IconButton>
          <IconButton href="https://www.instagram.com/"  target="_blank" rel="noreferrer" >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton href="https://www.github.com/"  target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="large"/>
          </IconButton>
          <IconButton href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <LinkedInIcon fontSize="large"/>
          </IconButton>
          <IconButton href="mailto:" target="_blank" rel="noreferrer">
            <EmailIcon fontSize="large"/>
          </IconButton>
        </div>

      </div>
    </footer>
  </div>
  );
};

export default Footer;
