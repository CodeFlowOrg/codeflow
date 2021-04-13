import useFirestore from "./hooks/useFirestore";
import "./styles/App.css";
import { useState } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { Alert } from "bootstrap";
import Customnav from "./customnavbar";
import UpCommingEvent from "./UpCommingEvent";
const Events = () => {
  const { docs } = useFirestore("events");
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="events ">
        <Customnav color="#01bfd9" height="50px" padding="5vh" />
        <UpCommingEvent/>
        <div class="focus">Events</div>
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
                          <Accordion.Toggle
                            as={Button}
                            variant="info"
                            eventKey="1"
                          >
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
        </div>
      </div>
    </>
  );
};

export default Events;
