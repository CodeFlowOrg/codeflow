import "./styles/about.css";
// import "./styles/App.css";
import Customnav from "./customnavbar";
// import colla from "../assets/colla.png";
import team from "../assets/team.jpg";
import youtube from "../assets/youtube.png";
import opensource from "../assets/opensource.jpg";

function About() {
  return (
    <div>
      <Customnav color="#01bfd9" height="50px" />
      <div>
        {" "}
        <h6 className="Collabrated">Collaborated With</h6>
      </div>
      <div className=" justify-content-center">
        <div className="">
          {/* <img className="img-fluid" src={colla} alt="Image" /> */}
        </div>
      </div>

      <div className="focus">Our Focus Areas</div>
      <div className="container">
        <div className="row about__cards">
          <div className="about__card ">
            <img className="img1" src={team} alt="Image" />

            <div>
              <span className="caption orange ">Community Building</span>
            </div>
          </div>
          <div className="about__card ">
            <img className="img1 img-opensource" src={opensource} alt="Image" />
            <div>
              <span className="caption green">Open Source</span>
            </div>
          </div>
          <div className="about__card ">
            <img className="img1 img-youtube" src={youtube} alt="Image" />
            <div>
              <span className="caption orange">Youtube</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
