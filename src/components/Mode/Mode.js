import React from "react";
import styles from "./Mode.module.css";
import { withRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";
import camera from "../../assets/vectors/camera.svg";
import attendance from "../../assets/vectors/attendance.svg";
import mask from "../../assets/vectors/mask.svg";

const Mode = ({ history }) => {
  const goToLocation = (location) => {
    history.push(`/${location}`);
  };

  return (
    <div className={styles.container}>
      <Grid container spacing={6}>
        <Grid
          xs={6}
          md={6}
          item
          onClick={() => goToLocation("in-out")}
          className={styles.inOut}
        >
          <div className={styles.roundCard}>
            <div className={styles.hero}>
              <h1>10</h1>
            </div>
            <div className={styles.label}>
              <h5>
                Person
                <br />
                Counting
              </h5>
            </div>
          </div>
        </Grid>
        <Grid
          xs={6}
          md={6}
          item
          onClick={() => goToLocation("attendance")}
          className={styles.attendance}
        >
          <div className={styles.roundCard}>
            <div className={styles.hero}>
              <img src={attendance} alt="attendance" />
            </div>
            <div className={styles.label}>
              <h5>
                Attendance
                <br />
                System
              </h5>
            </div>
          </div>
        </Grid>
        <Grid
          xs={6}
          md={6}
          item
          onClick={() => goToLocation("thermal")}
          className={styles.thermal}
        >
          <div className={styles.roundCard}>
            <div className={styles.hero}>
              <img src={camera} alt="camera" />
            </div>
            <div className={styles.label}>
              <h5>
                Thermal
                <br />
                Imaging
              </h5>
            </div>
          </div>
        </Grid>
        <Grid
          xs={6}
          md={6}
          item
          onClick={() => goToLocation("ppe")}
          className={styles.ppe}
        >
          <div className={styles.roundCard}>
            <div className={styles.hero}>
              <img src={mask} alt="ppe-kit-check" />
            </div>
            <div className={styles.label}>
              <h5>
                PPE
                <br />
                Kit Check
              </h5>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Mode);
