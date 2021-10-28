import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer class="footer">    
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <h1> About the company</h1> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
      ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
    </p>
    <div class="icons">
      <a href="https://www.facebook.com/"><i class="icon-facebook"></i></a>
      <a href="https://www.twitter.com/"><i class="icon-twitter"></i></a>
      <a href="https://www.linkedin.com/"><i class="icon-linkedin"></i></a>
      <a href="https://www.github.com/"><i class="icon-github"></i></a>
      <a href="https://www.instagram.com/"><i class="icon-instagram"></i></a>
    </div>
  </div>
  
  <div class="footer-center col-md-4 col-sm-6">
  
    <div>
      <i class="icon-map-marker"></i>
      <p><span> Street name and number</span> City, Country</p>
    </div>
    <div>
      <i class="icon-phone"></i>
      <p> (+00) 0000 000 000</p>
    </div>
    <div>
      <i class="icon-envelope"></i>
      <p> Codeflow@company.com</p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    
    <p class="menu">
    <Link to="/"> Home</Link> <br></br> 
    <Link to="/events"> Events</Link> <br></br>
    <Link to="/Hackathons"> Hackathons</Link> <br></br>
    <Link to="/"> Open Source</Link> <br></br>
    <Link to="/"> Collaborations</Link> <br></br>
    <Link to="/"> Terms and Conditions</Link> 
    </p>
    <p class="name"> Codeflow &copy; 2021</p>
  </div>
</footer>
  );
};

export default Footer;
