import React, { useState } from "react";
import styles from "./Register.module.css";
import { Button, TextField, Grid } from "@material-ui/core";
import videoFile from "../../assets/video/video.webm";

const Register = () => {
  const [name, setName] = useState("");

  return (
    <div className={styles.container}>
      <Grid container className={styles.innerContainer}>
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
        <Grid lg={12} md={12} xs={12} className={styles.webcam} item>
          <video controls autoPlay src={videoFile} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
