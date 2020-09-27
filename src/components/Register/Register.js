import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./Register.module.css";
import { Button, TextField, Grid } from "@material-ui/core";
import videoFile from "../../assets/video/video.webm";
import Webcam from "react-webcam";
import { SocketProvider } from "socket.io-react";
import io from "socket.io-client";

const ENDPOINT = "localhost:5001";
let socket;

const Register = () => {
  const [name, setName] = useState("");
  const [nameWidth, setNameWidth] = useState(4);
  const [cameraWidth, setCameraWidth] = useState(8);

  const onClickRegister = () => {
    setNameWidth(4);
    setCameraWidth(8);
  };

  const videoConstraints = {
    width: "100%",
    height: "100%",
    facingMode: "user",

    // facingMode: "selfie",
  };

  const cameraRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = cameraRef.current.getScreenshot();
    return imageSrc;
  }, [cameraRef]);

  useEffect(() => {
    socket = io.connect(ENDPOINT);
    socket.on("connect", function () {
      // socket.send("Client Connected");
    });
    // while(socket.connected){

    // }
    // socket.on("connect", (msg) => {
    //   if (msg === "Client Connected, 1") console.log(capture());
    // });
  }, [io, ENDPOINT]);

  return (
    <div className={styles.container}>
      <Grid container spacing={4} className={styles.innerContainer}>
        {/* <Grid className={styles.inputCard} item lg={3} md={3} xs={12}>
          <div className={styles.heading}>
            <h2>Register Face</h2>
            <p>You can start capturing images here to register new face.</p>
          </div>
          <div className={styles.inputName}>
            <TextField
              className={styles.inputField}
              type="text"
              value={name}
              label="Name"
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
            />
            <Button variant="contained" className={styles.nextBtn}>
              Next
            </Button>
          </div>
          <div className={styles.angleFace}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/1200px-Noto_Emoji_KitKat_263a.svg.png"
              alt="smily"
            />
            <div className={styles.buttons}>
              <Button className={styles.prevButton} variant="contained">
                Prev
              </Button>
              <Button className={styles.nextButton} variant="contained">
                Next
              </Button>
            </div>
          </div>
        </Grid> */}
        <Grid item md={nameWidth}>
          <div className={styles.registerDetails}>
            <h4>Enter Details</h4>
            <TextField
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className={styles.inputField}
              label="Name"
            />
            <Button
              onClick={onClickRegister}
              className={styles.regBtn}
              variant="contained"
            >
              Register
            </Button>
          </div>
        </Grid>
        {cameraWidth ? (
          <Grid md={cameraWidth} className={styles.webcamContainer} item>
            <Webcam
              className={styles.webcam}
              ref={cameraRef}
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default Register;
