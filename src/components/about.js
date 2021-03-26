import "./styles/about.css";
import Customnav from "./customnavbar";
import colla from "../assets/colla.png";
import team from "../assets/team.jpg";
import youtube from "../assets/youtube.png";
import opensource from "../assets/opensource.jpg";

function About() {
  return (
    <div>
      <Customnav color="#01bfd9" height="50px" />
      <div> <h6 class="Collabrated">Collaborated With</h6></div>
      <div class="d-flex justify-content-center">
        <div class=""><img class="img-fluid"src={colla} alt="Image"/></div>
        </div>
        
        
        <div class="focus">Our Focus Areas</div>
        <div class="container">
          <div class="row">
          <div class="col-md-4 item community-image-div"><img class="img1"src={team} alt="Image"/>
          <div><span class="caption orange">Community Building</span></div>
          </div>
          <div class="col-md-4 item"><img class="img1 img-opensource"src={opensource} alt="Image"/>
          <div><span class="caption green">Open Source</span></div>
          </div>
          <div class="youtube-div col-md-4 item"><img class="img1 img-youtube"  src={youtube} alt="Image"/>
          <div><span class="caption orange">Youtube</span></div>
          
          </div>
          </div>
          </div>
    </div>
  );
}

export default About;
