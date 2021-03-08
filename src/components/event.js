import useFirestore from "./hooks/useFirestore";
import "./styles/App.css";
import { useState } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { Alert } from "bootstrap";
const Events = () => {
  const { docs } = useFirestore("events");
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="m-4">
      Events
      <div className="container">
        {docs &&
          docs.map((doc) => (
            <div className="col-5">
              <Accordion defaultActiveKey="0">
                <Card>
                  <img src={doc.url} className="col-12 " />

                  <div className="text-white bg-warning p-2"> {doc.title}</div>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="info" eventKey="1">
                      Know More !
                    </Accordion.Toggle>
                  </Card.Header>
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
  );
};

export default Events;
