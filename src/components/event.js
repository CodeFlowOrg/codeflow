import useFirestore from "./hooks/useFirestore";
import "./styles/event.css";
import { useState } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { Alert } from "bootstrap";
import Customnav from "./customnavbar";
import team from "../assets/team.jpg";
import{ BsCalendar} from 'react-icons/bs'
const Events = () => {
  const { docs } = useFirestore("events");
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="events ">
      <Customnav color="" height="50px" padding="5vh" />
      {/* <div class="focus">Events</div>
      <div className=" ">
        <div className="row justify-content-center row-custom">
          {docs &&
            docs.map((doc) => (
              <div className="col-md-6 col-lg-3  col-sm-12 margin-card event-div">
                <Accordion defaultActiveKey="0">
                  <Card>
                  <div className="card-banner">
                    <img
                      src={doc.url}
                      className="img.fluid
                   "
                    />

                    <div className="text-white bg-warning p-2 title-div">
                      {" "}
                      {doc.title}
                    </div>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="info" eventKey="1" >
                        Know More !
                      </Accordion.Toggle>
                    </Card.Header>
                    </div>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <p>{doc.content}</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            ))}
        </div>
      </div> */}
      <div className="events__cardOutline">
      <div className="events__upcomingCard">
        <img src={team} alt="thumbnail" />
        <div className="events__upcomingCardinfo">
          <button className="events__upcomingCard-btn1">Register Now</button>
          <h2>Heading of the event</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            suscipit temporibus, eaque qui corrupti corporis{" "}
          </p>
          <button className="events__upcomingCard-btn2">Category</button>
          <div className="events__upcomingCardTiming">
             <BsCalendar className='events__upcomingCardIcon' />
             <div className="events__upcomingCardTime">
               <p>Date: 21stJan,2021</p>
               <p>Time: 4:00pm - 5:00pm</p>
             </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Events;
