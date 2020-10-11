import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./Register.module.css";
import { Button, TextField, Grid } from "@material-ui/core";
import videoFile from "../../assets/video/video.webm";
import Webcam from "react-webcam";
import io from "socket.io-client";
import UndoIcon from "@material-ui/icons/Undo";

const ENDPOINT = "localhost:5001";
let socket;

const Register = () => {
  const [name, setName] = useState("");
  const [nameWidth, setNameWidth] = useState(4);
  const [cameraWidth, setCameraWidth] = useState(8);
  const [photoFromSserver, setPhotoFromServer] = useState("");

  const onClickRegister = () => {
    setNameWidth(0);
    setCameraWidth(12);
  };

  const videoConstraints = {
    width: "100%",
    height: "100%",
    facingMode: "user",

    // facingMode: "selfie",
  };

  const cameraRef = useRef(null);

  const canvasRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = cameraRef.current.getScreenshot();
    return imageSrc;
  }, [cameraRef]);

  useEffect(() => {
    socket = io.connect(ENDPOINT);
    socket.on("connect", function () {
      socket.send("Client connected from React");
      socket.emit("stream-video", "Send it man");
    });

    socket.on("stream", (data) => {
      setPhotoFromServer(data.image);
    });

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "#000000";
    context.beginPath();
    context.ellipse(100, 100, 10, 15, 0, 0, Math.PI * 2);
    context.stroke();
    // while(socket.connected){

    // }
    // socket.on("connect", (msg) => {
    //   if (msg === "Client Connected, 1") console.log(capture());
    // });
  }, []);

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
        {nameWidth ? (
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
        ) : null}

        {cameraWidth ? (
          <Grid md={cameraWidth} className={styles.webcamContainer} item>
            {/* <Webcam
              className={styles.webcam}
              ref={cameraRef}
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            /> */}
            <div className={styles.faceTurn}>
              <UndoIcon className={styles.turnArrows} />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/1200px-Noto_Emoji_KitKat_263a.svg.png"
                alt="smily"
              />
              <UndoIcon className={styles.turnArrows} />
            </div>
            <canvas id="canvas" ref={canvasRef} className={styles.canvas} />
            <img src={photoFromSserver} alt="server" />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default Register;
