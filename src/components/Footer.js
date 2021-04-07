import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./styles/footer.css";

const Footer = () => {
  return (
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
          <Link to="/">Hackathons</Link>
          <Link to="/">Open Source</Link>
          <Link to="/">Collaborations</Link>
        </div>
        <div className="footer-link-group">
          <h3>Social Media Links</h3>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <div className="footer-link-group">
          <h3>Other Links</h3>
          <a href="https://www.github.com/" target="_blank" rel="noreferrer">
            Github
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:" target="_blank" rel="noreferrer">
            Email Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
