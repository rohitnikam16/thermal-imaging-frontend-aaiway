import React from "react";
import styles from "./Database.module.css";
import { Grid } from "@material-ui/core";
import face1 from "../../assets/images/face1.jpg";
import face2 from "../../assets/images/face2.jpg";

const Database = () => {
  const faces = [
    {
      name: "Adam",
      photo: face1,
    },
    {
      name: "John",
      photo: face2,
    },
  ];

  return (
    <Grid container spacing={4} className={styles.container}>
      {faces.map((face, index) => (
        <Grid key={index} xs={6} md={4} item className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.faceImage}>
              <img src={face.photo} alt="face" />
            </div>
            <div className={styles.details}>
              <h4>{face.name}</h4>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Database;
