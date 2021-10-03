import { React, useState, useEffect, useRef } from "react";
import "../styles/App.css";
import Customnav from "../layout/customnavbar";
import { Form, Alert, Button } from "react-bootstrap";
import ProBar from "../utilities/progressbar";

const Addevent = () => {
  const selectedFileRef = useRef();

  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [fieldData, setFieldData] = useState({
    selectedfile: null,
    heading: '',
    description: '',
  });

  const handleSelectedFile = (event) => {
    const types = ["image/png", "image/jpeg", "image/jpg"];
    let selected = event.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFieldData((prev) => ({
        ...prev,
        selectedfile: selected,
      }));
    } else {
      setError("Please select image of type (png, jpg, jpeg)");
    }
  };
  
  const handleChangeFields = (event) => {
    setFieldData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fieldData.selectedfile) {
      return setError("Please select image ");
    }

    setFile(fieldData.selectedfile);  
    // empty the field after the form is submitted
    selectedFileRef.current.value = '';
    setFieldData((prev) => ({
      ...prev,
      heading: '', description: '',
    }));

    setError(null);
  };

  useEffect(() => {
    if (!fieldData.selectedfile) {
      return setPreview(null);
    }

    const objectUrl = URL.createObjectURL(fieldData.selectedfile);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [fieldData.selectedfile]);

  return (
    <div>
      <Customnav color="#01bfd9" height="30px" />
      <div className="container">
        <div className="row m-3">
          <div className="col-6">
            <div className="output">
              {error && (
                <Alert className="m-4" variant="danger">{error}</Alert>
              )}
            </div>
            <Form className="border p-3" onSubmit={handleSubmit}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Heading</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="heading of the event"
                  name="heading"
                  value={fieldData.heading}
                  onChange={handleChangeFields}
                />
              </Form.Group>

              <Form.Group>
                <Form.File
                  type="file"
                  id="exampleFormControlFile1"
                  label="Thumbnail / Poster:"
                  ref={selectedFileRef}
                  onChange={handleSelectedFile}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={fieldData.description}
                  onChange={handleChangeFields}
                />
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </div>
          <div className="col-6">
            <div className="output">
              {fieldData.selectedfile && (
                <img src={preview} alt="not available" className="col-12" />
              )}
              {file && (
                <ProBar
                  file={file}
                  heading={fieldData.heading}
                  description={fieldData.description}
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
