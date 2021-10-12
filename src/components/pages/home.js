import "../styles/Home.css";
import img1 from "../../assets/img1.png";
// import Customnav from "../layout/customnavbar";
import team from "../../assets/team.jpg";
import youtube from "../../assets/youtube.png";
import opensource from "../../assets/opensource.jpg";
import TeamCard from "../utilities/TeamCard";
import Testimonials from "../utilities/Testimonials";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [contributors, setContributors] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.github.com/repos/codeflow201/codeflow/contributors?q=contributions&order=desc"
      )
      .then((response) => {
        setContributors(response);
        // console.log(response.data[0].avatar_url);
        // console.log(response.data[0].login);
        // console.log(response.data);
      });
  });

  return (
    <>
      <div className="Home" id="Home">
        <div className="parent">
          <div class="col-5 son">
            <div className="son__Para">
              <h3>
                <span>Codeflow</span>
              </h3>
              <h3> Learning must go on!</h3>
              <p>
                Codeflow is an organisatiom whose main motive is to empower
                student community by organising webinars, hackathons and open
                source events
              </p>
            </div>
          </div>
          <div class="col-7 daughter">
            <img src={img1} alt="loading" />
          </div>
        </div>
      </div>
      <div className="home__about">
        <div className="home__aboutInfo">
          <h3>
            <span>About</span> Us
          </h3>
          <p>
            An initiative to contribute to the Student community by providing
            opportunities, resources, and awareness about the possibilities in
            the field of software to students & professionals.
          </p>
        </div>
        <div className="home__aboutCards">
          <div className="home__aboutCards">
            <div className="home__aboutCard1">
              <img src={opensource} alt="thumbnail" />
              <h5>OpenSource</h5>
            </div>
            <div className="home__aboutCard1">
              <img src={team} alt="thumbnail" />
              <h5>Community building</h5>
            </div>
            <div className="home__aboutCard1">
              <img src={youtube} alt="thumbnail" />
              <h5>Events and Workshops</h5>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <div className="home__team">
        <h3>
          <span>Core</span> Team
        </h3>
        <div className="home__teamCards">

          <TeamCard
            image={"https://i.ibb.co/BqR6rTK/image.jpg"}
            name="Hargun Kaur"
            position="Founder"
          />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard
            image={youtube}
            name="Priyanshi Sinha"
            position="Program management lead"
          />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={"https://i.ibb.co/BqR6rTK/image.jpg"} name="Hargun Kaur" position="Founder" />
          <TeamCard image={"https://i.ibb.co/0GsNn01/harsh.jpg"} name="Harsh Chhabra" position="Founder" />
          <TeamCard image={"https://i.ibb.co/bJ8HHND/paras.jpg"} name="Paras Bansal" position="Web-dev Lead" />
          <TeamCard image={youtube} name="Yash Nitani" position="Opensource Lead" />
          <TeamCard image={"https://i.ibb.co/jz1C1V7/Whats-App-Image-2021-10-09-at-11-39-08-PM.jpg"} name="Priyanshi Sinha" position="Program Management Lead" />


        </div>
        <div className="home__teamCardsContributor">
          <h3>
            <span>Top</span> Contributors
          </h3>
          <div className="home__teamCards">
            {contributors ? (
              <React.Fragment>
                <TeamCard
                  image={contributors.data[0].avatar_url}
                  name={contributors.data[0].login}
                />
                <TeamCard
                  image={contributors.data[1].avatar_url}
                  name={contributors.data[1].login}
                />
                <TeamCard
                  image={contributors.data[2].avatar_url}
                  name={contributors.data[2].login}
                />
                <TeamCard
                  image={contributors.data[3].avatar_url}
                  name={contributors.data[3].login}
                />
                <TeamCard
                  image={contributors.data[4].avatar_url}
                  name={contributors.data[4].login}
                />
                <TeamCard
                  image={contributors.data[5].avatar_url}
                  name={contributors.data[5].login}
                />
              </React.Fragment>
            ) : (
              ``
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
