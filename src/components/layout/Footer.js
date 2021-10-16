import logo from "../../assets/logo.png";
import img from "../../assets/Qr-code.png";
import { Link } from "react-router-dom";
import "../styles/footer.css";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import GithubIcon from '@mui/icons-material/GiteOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/EmailOutlined';

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
          <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/hackathon">Hackathons</Link>
            <Link to="/">Open Source</Link>
            <Link to="/">Collaborations</Link>
          </div>
          <div className="footer-link-group social-media-links">
            <h3>Social Media Links</h3>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer">
              <InstagramIcon />
            </a>
          </div>
          <div className="footer-link-group other-links">
            <h3>Other Links</h3>
            <a href="https://www.github.com/codeflow201" target="_blank" rel="noreferrer">
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:codefloworg@gmail.com" target="_blank" rel="noreferrer">
              <EmailIcon />
            </a>
          </div>
          <div>
          <img src={img} width="200px" height="200px" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
