import { React, useState, useEffect } from "react";
import "../styles/App.css";
import Customnav from "../layout/customnavbar";
import { Form, Alert, Button } from "react-bootstrap";
import ProBar from "../utilities/progressbar";

const Addevent = () => {
  const [selectedfile, setSelectedFile] = useState(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(null);
  const [heading, setHeading] = useState(null);
  const [description, setDescription] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];
  const changehandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setSelectedFile(selected);

      setError("");
    } else {
      setSelectedFile(null);
      setError("Please select image of type (png, jpg, jpeg)");
    }
  };
  const changedescription = (e) => {
    let title = e.target.value;
    if (title) {
      setDescription(title);
    }
  };
  const changeheading = (e) => {
    let title = e.target.value;
    if (title) {
      setHeading(title);
    }
  };
  const submithandler = (e) => {
    if (selectedfile && heading && description) {
      setFile(selectedfile);
      setError("");
    } else {
      setError("Please select image ");
    }
  };
  useEffect(() => {
    if (!selectedfile) {
      setPreview(null);
      return;
    }
    console.log("hi!");

    const objectUrl = URL.createObjectURL(selectedfile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedfile]);

  return (
    <div>
      <Customnav color="#01bfd9" height="30px" />
      <div className="container">
        <div className="row m-3">
          <div className="col-6">
            <div className="output">
              {error && (
                <Alert className="m-4" variant="danger">
                  Pls input image file of vaild format (.png , .jpeg , .jpg) !!
                </Alert>
              )}
            </div>
            <Form className="border p-3 ">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Heading</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="heading of the event"
                  onChange={changeheading}
                />
              </Form.Group>

              <Form.Group>
                <Form.File
                  type="file"
                  id="exampleFormControlFile1"
                  label="Thumbnail / Poster:"
                  onChange={changehandler}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={changedescription}
                />
              </Form.Group>
              <Button variant="primary" onClick={submithandler}>
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-6">
            <div className="output">
              {selectedfile && (
                <img src={preview} alt="not available" className="col-12" />
              )}
              {file && (
                <ProBar
                  file={file}
                  setFile={setFile}
                  heading={heading}
                  description={description}
                  setHeading={setHeading}
                  setDescription={setDescription}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addevent;
