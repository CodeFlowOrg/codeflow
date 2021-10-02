import React, { useState } from "react";
import Customnav from "../layout/customnavbar";
import "../styles/hackathon.css";
import img1 from "../../assets/img1.png";
import HackCard from "../utilities/HackCard";
import Card from "../utilities/hackCard.json";

function Hackathon() {
  const [option, setOption] = useState("");
  const handleInput = (e) => {
    const selectedOne = e.target.value;
    setOption(selectedOne);
  };
  return (
    <>
      <div className="hackathon">
        {/* <Customnav color="" height="50px" padding="5vh" /> */}
        <div className="parent">
          <div class="col-7 daughter">
            <img src={img1} alt="loading" />
          </div>
          <div class="col-5 son">
            <div className="son__Para">
              <h3>
                <span>Codeflow</span>
              </h3>
              <h3> known for hackathons!</h3>
              <p>
                Codeflow is an organisatiom whose main motive is to empower
                student community by organising webinars, hackathons and open
                source events
              </p>
            </div>
          </div>
        </div>
        <div className="hackathon__cards">
          <select
            onChange={handleInput}
            name="Past"
            className="hackathon__select"
          >
            <option value="past"> Past</option>
            <option value="ongoing"> Ongoing</option>
            <option value="upcoming"> upcoming</option>
          </select>
          <div className="hackathon__Cards">
            {Card.filter((item) => {
              if (option === "") {
                return item;
              } else if (item.cat === option) {
                return item;
              }
            }).map((item) => {
              return (
                <HackCard
                  img={item.img}
                  heading={item.heading}
                  para={item.para}
                  cat={item.cat}
                  category={item.category}
                  timing={item.timing}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hackathon;
