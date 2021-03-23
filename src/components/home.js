import "./styles/Home.css";
import img1 from "../assets/img1.png";
import Customnav from "./customnavbar";

function Home() {
  return (
    <div className="Home" id="Home">
      <Customnav color="" height="80px" padding="5vh"/>  
    <div className="parent">
      <div class="col-5 son"> 
        <span id="codeflow-text" className="codeflow-text"><b>Codeflow</b></span>
        <span id="learning-text" className="learning-text"><b>Learning</b></span>
        <span className="break"></span>
        <span id="learning-text" className="learning-text"><b>must go on</b></span>
      </div> 
      <div class="col-7 daughter"> 
        <img src={img1} alt="loading"/>
      </div>
    </div>
    </div>
  );
}

export default Home;
