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
import upArrow from "../../assets/vectors/up-arrow.svg";
import wrong from "../../assets/vectors/wrong.svg";
import correct from "../../assets/vectors/correct.svg";
import { useParams } from "react-router";
import { withRouter } from "react-router-dom";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import photo from "../../assets/vectors/picture-thumbnail.svg";
import axios from "axios";

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
    case "ppe":
      return (
        <div className={styles.container}>
          <PPE />
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
    // alert("done");
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

  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState(photo);

  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    console.log(image);
  }, [webcamRef]);

  const submitData = async () => {
    const formData = new FormData();
    formData.append("file", url, url.name);
    // await fetch("http://0.0.0.0:5001/thermal-screening", {
    //   method: "POST",
    //   mode: "no-cors",
    //   body: formData,
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // })
    //   .then((response) => {
    //     return response.text();
    //   })
    //   .then((data) => {
    //     // resolve(data ? JSON.parse(data) : {})
    //     const temp = JSON.parse(data);
    //     console.log(temp);
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
    await axios
      .post(
        "https://cors-anywhere.herokuapp.com/0.0.0.0:5001/thermal-screening",
        formData,
        {
          headers: { "content-type": "multipart/form-data" },
          method: "POST",
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  const changeImageUrl = (e) => {
    let reader = new FileReader();
    setUrl(e.target.files[0]);
    // const temp = e.target.files[0];
    reader.onloadend = () => {
      if (reader.result) {
        setImageUrl(reader.result);
        console.log("api called");
      } else setImageUrl(photo);
    };
    try {
      reader.readAsDataURL(e.target.files[0]);
    } catch (error) {
      setImageUrl(photo);
    }
  };

  const videoConstraints = {
    width: 600,
    height: 450,
    facingMode: "selfie",
  };

  return (
    <div className={styles.thermalContainer}>
      <form onSubmit={submitData} className={styles.captureBtnContainer}>
        <Button className={styles.captureBtn} component="label">
          Capture
          <CameraAltIcon fontSize="small" />
          <input
            required
            type="file"
            id="file"
            name="image"
            onChange={changeImageUrl}
            accept="image/jpg, image/png, image/jpeg"
            style={{ opacity: "0", width: "0" }}
          />
        </Button>
        <Button type="submit" className={styles.captureBtn}>
          Submit
        </Button>
      </form>

      <div className={styles.thermalImage}>
        <h2>Thermal Image</h2>
        <img src={photo} alt="thermal" />
      </div>
      <div className={styles.originalImage}>
        <h2>Original Image</h2>
        <img src={photo} alt="original" />
      </div>
    </div>
  );
};

const PersonCounting = () => {
  const personCamRef = useRef(null);

  const videoConstraints = {
    width: 600,
    height: 450,
    facingMode: "selfie",
  };

  return (
    <div className={styles.personContainer}>
      <div className={styles.counters}>
        <div className={styles.countIn}>
          <img src={downArrow} alt="in" />
          <div className={styles.desc}>
            <h1>220</h1>
            <p>No. of people in</p>
          </div>
        </div>
        <div className={styles.countOut}>
          <img src={upArrow} alt="out" />
          <div className={styles.desc}>
            <h1>180</h1>
            <p>No. of people out</p>
          </div>
        </div>
      </div>
      <div className={styles.camera}>
        <Webcam
          className={styles.webcam}
          ref={personCamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      </div>
    </div>
  );
};

const PPE = () => {
  const ppeCamRef = useRef(null);

  const videoConstraints = {
    width: 600,
    height: 450,
    facingMode: "selfie",
  };

  const list = [
    {
      name: "Mask",
      image: "",
      status: true,
    },
    {
      name: "Gloves",
      image: "",
      status: true,
    },
    {
      name: "Suit",
      image: "",
      status: false,
    },
    {
      name: "Shoes",
      image: "",
      status: true,
    },
  ];

  return (
    <div className={styles.ppeContainer}>
      <div className={styles.details}>
        <div className={styles.heading}>
          <h2>Equipments</h2>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.list}>
          {list.map((item) => (
            <div className={styles.item}>
              <img src={item.image} alt="ppe-check-list-item" />
              <h3>{item.name}</h3>
              <div className={styles.statusImage}>
                {item.status ? (
                  <img src={correct} alt="present" />
                ) : (
                  <img src={wrong} alt="not-present" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cameraPPE}>
        <Webcam
          className={styles.webcam}
          ref={ppeCamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      </div>
    </div>
  );
};
