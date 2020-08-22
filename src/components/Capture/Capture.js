import React, { useRef, useCallback } from "react";
import styles from "./Capture.module.css";
import Webcam from "react-webcam";

const Capture = () => {
  const videoConstraints = {
    width: 600,
    height: 400,
    facingMode: "selfie",
  };

  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <div className={styles.container}>
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
    </div>
  );
};

export default Capture;
