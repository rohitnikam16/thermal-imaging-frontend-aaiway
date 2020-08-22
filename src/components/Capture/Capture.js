import React, { useRef, useCallback } from "react";
import styles from "./Capture.module.css";
import Webcam from "react-webcam";
import { Button } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

const Capture = () => {
  const videoConstraints = {
    width: 600,
    height: 450,
    facingMode: "selfie",
  };

  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    console.log(image);
  }, [webcamRef]);

  return (
    <div className={styles.container}>
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

export default Capture;
