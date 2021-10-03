import { React } from "react";
import "../styles/App.css";
import useStorage from "../hooks/useStorage";
import { ProgressBar } from "react-bootstrap";
const ProBar = ({
  file,
  heading,
  description,
}) => {
  const { url, progress } = useStorage(file, heading, description);
  console.log(progress, url);
  return (
    <div>
      <div className="m-2 ">
        <ProgressBar animated now={progress} />
      </div>
    </div>
  );
};

export default ProBar;
