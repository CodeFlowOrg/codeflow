import "./styles/Home.css";
import img1 from "../assets/img1.png";
import Customnav from "./customnavbar";

function Home() {
  return (
    <div className="Home">
      <Customnav color="" height="60px" />
      <div className="container">
        <div className="row">
          <div className="col-4 ">
            {" "}
            hargun <br />
            helloo
          </div>
          <div className="col-8">
            <img src={img1} className="img-fluid h-70 w-80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
