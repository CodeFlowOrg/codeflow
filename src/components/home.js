import "./styles/Home.css";
import img1 from "../assets/img1.png";
import Customnav from "./customnavbar";

function Home() {
  return (
    <div className="Home" id="Home">
      <Customnav color="" height="50px" padding="5vh" />
      <div className="parent">
        <div class="col-5 son">
          <div className="son__Para">
            <h3>
              <span>Codeflow</span> Learning
            </h3>
            <h3>must go on</h3>
          </div>
        </div>
        <div class="col-7 daughter">
          <img src={img1} alt="loading" />
        </div>
      </div>
    </div>
  );
}

export default Home;
