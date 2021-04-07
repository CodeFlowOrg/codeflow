import "./styles/App.css";
import Customnav from "./customnavbar";
import Testimonials from "./Testimonials";

function Team() {
  return (
    <div>
      <Customnav color="#01bfd9" height="50px" padding="5vh" />
      <Testimonials />
      <div className="focus">Coming soon !!</div>
    </div>
  );
}

export default Team;
