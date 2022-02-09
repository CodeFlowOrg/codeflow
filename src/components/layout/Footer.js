import logo from "../../assets/logo.png";
import img from "../../assets/Qr-code.png";
import { Link } from "react-router-dom";
import "../styles/footer.css";

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
              Facebook
            </a>
            <a href="https://twitter.com/codefloworg" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a
              href="https://www.instagram.com/codefloworg/"
              target="_blank"
              rel="noreferrer">
              Instagram
            </a>
          </div>
          <div className="footer-link-group other-links">
            <h3>Other Links</h3>
            <a href="https://github.com/CodeFlowOrg" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href="https://www.linkedin.com/company/codefloworg/"
              target="_blank"
              rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:codefloworg@gmail.com" target="_blank" rel="noreferrer">
              Email Us
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
