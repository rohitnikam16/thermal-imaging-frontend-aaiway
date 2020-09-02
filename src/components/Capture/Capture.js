import React, { useState, useRef, useCallback } from "react";
import styles from "./Capture.module.css";
import Webcam from "react-webcam";
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import downArrow from "../../assets/vectors/down-arrow.svg";
import { useParams } from "react-router";
import { withRouter } from "react-router-dom";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

const Capture = ({ history }) => {
  const { mode } = useParams();

  switch (mode) {
    case "in-out":
      return (
        <div className={styles.container}>
          <PersonCounting />
        </div>
      );
    case "attendance":
      return (
        <div className={styles.container}>
          <Options history={history} />
        </div>
      );
    case "thermal":
      return (
        <div className={styles.container}>
          <ThermalImaging />
        </div>
      );
    default:
      return (
        <div className={styles.container}>
          <Options history={history} />
        </div>
      );
  }
};

export default withRouter(Capture);

const Options = ({ history }) => {
  const [mode, setMode] = useState("");

  const handleSubmit = (location, e) => {
    e.preventDefault();
    alert("done");
    history.push(`/capture/${location}`);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(mode, e)}
      className={styles.optionsContainer}
    >
      <FormControl required className={styles.form}>
        <InputLabel className={styles.labelForSelect} id="select-mode-label">
          Select Mode
        </InputLabel>
        <Select
          variant="filled"
          value={mode}
          labelId="select-mode-label"
          id="select-mode"
          className={styles.selectField}
          onChange={(e) => setMode(e.target.value)}
        >
          <MenuItem value="in-out">Person In-Out</MenuItem>
          <MenuItem value="attendance">Attendance</MenuItem>
          <MenuItem value="thermal">Thermal Imaging</MenuItem>
          <MenuItem value="ppe">PPE Kit Check</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" className={styles.nextBtn} variant="contained">
        Next
      </Button>
    </form>
  );
};

const ThermalImaging = () => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    console.log(image);
  }, [webcamRef]);

  const videoConstraints = {
    width: 600,
    height: 450,
    facingMode: "selfie",
  };

  return (
    <div className={styles.thermalContainer}>
      <Button onClick={capture} className={styles.captureBtn}>
        Capture
        <CameraAltIcon fontSize="small" />
      </Button>
      <Webcam
        className={styles.webcam}
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
    </div>
  );
};

const PersonCounting = () => {
  return (
    <div className={styles.personContainer}>
      <div className={styles.counters}>
        <div className={styles.countIn}>
          <img src={downArrow} alt="in" />
          <h1>220</h1>
        </div>
        <div className={styles.countOut}>
          <img src={downArrow} alt="out" />
          <h1>180</h1>
        </div>
      </div>
      <div className={styles.camera}></div>
    </div>
  );
};
