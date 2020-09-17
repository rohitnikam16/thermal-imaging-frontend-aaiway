import React, { useState, useRef, useCallback, useContext } from "react";
import styles from "./Capture.module.css";
import Webcam from "react-webcam";
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  Grid,
  FormControl,
  Avatar,
  CircularProgress,
} from "@material-ui/core";
import downArrow from "../../assets/vectors/down-arrow.svg";
import upArrow from "../../assets/vectors/up-arrow.svg";
import wrong from "../../assets/vectors/wrong.svg";
import correct from "../../assets/vectors/correct.svg";
import sunglasses from "../../assets/vectors/sunglasses.svg";
import { useParams } from "react-router";
import { withRouter } from "react-router-dom";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import photo from "../../assets/vectors/picture-thumbnail.svg";
import thermalAfterApi from "../../assets/images/therm1.jpg";
import visualAfterApi from "../../assets/images/visual1.jpg";
import thermo from "../../assets/vectors/thermo.svg";
import axios from "axios";
import GlobalContext from "../../context/GlobalContext";
import classNames from "classnames";

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
  const [name, setName] = useState("Name");
  const [status, setStatus] = useState("STATUS");
  const [glasses, setGlasses] = useState(false);
  const [temp, setTemp] = useState(37.0);
  const [imageUrl, setImageUrl] = useState(photo);
  const [thermalImage, setThermalImage] = useState(photo);
  const [originalImage, setOriginalImage] = useState(photo);
  const [progress, setProgress] = useState(false);

  const lowest = 35;
  const highest = 41;

  const {
    thermalAfterApi,
    visualAfterApi,
    setThermalAfterApi,
    setVisualAfterApi,
  } = useContext(GlobalContext);

  console.log(thermalAfterApi);

  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    console.log(image);
  }, [webcamRef]);

  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", url, url.name);
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
    setProgress(true);
    await axios
      .post("http://0.0.0.0:5001/thermal-screening", formData, {
        headers: { "content-type": "multipart/form-data" },
        method: "POST",
      })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then((data) => {
        setName(data.name);
        setTemp(data.temperature.toFixed(2));
        data.temperature <= 37 ? setStatus("PASS") : setStatus("FAIL");
        setGlasses(data.wearingGlass === "True" ? true : false);
        const thermal = data.thermalImg.slice(2, data.thermalImg.length - 1);
        const original = data.visualImg.slice(2, data.visualImg.length - 1);
        setThermalImage(`data:image/jpg;base64,${thermal}`);
        setOriginalImage(`data:image/jpg;base64,${original}`);
        setProgress(false);
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
      } else setImageUrl(photo);
    };
    try {
      reader.readAsDataURL(e.target.files[0]);
    } catch (error) {
      setImageUrl(photo);
    }
  };

  const thermalCameraRef = useRef(null);

  const videoConstraints = {
    width: 100,
    height: 100,
    // facingMode: "selfie",
  };

  const time = new Date();

  const getTempHeight = (i) => {
    return (100 / (highest - lowest)) * (i - lowest);
  };

  return (
    <div className={styles.thermalContainer}>
      <Grid container>
        <Grid item md={3} className={styles.leftData}>
          <div className={styles.details}>
            <div className={styles.title}>
              <h2>Thermal Imaging</h2>
            </div>
            <div className={styles.tempContainer}>
              <div className={styles.temperature}>
                <div
                  className={styles.reading}
                  style={{
                    height: `${getTempHeight(temp).toString()}%`,
                    background: temp <= 37 ? "green" : "rgb(172, 4, 4)",
                  }}
                >
                  <div className={styles.readingValue}>
                    <p>{temp}°C</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className={classNames(styles.tempCard, styles.card)}>
              <div className={styles.icon}>
                <img src={thermo} alt="thermometer" />
              </div>
              <div className={styles.tempValue}>
                <h1>
                  30<span>°C</span>
                </h1>
              </div>
            </div> */}
            <div className={classNames(styles.nameCard, styles.card)}>
              <div className={styles.icon}>
                <Avatar>A</Avatar>
              </div>
              <div className={styles.name}>
                <h3>{name}</h3>
                <p>
                  {time.getDate()}/{time.getMonth()}/{time.getFullYear()}
                </p>
              </div>
            </div>
            <div className={classNames(styles.glassesCard, styles.card)}>
              <div className={styles.icon}>
                <img src={sunglasses} alt="sunglasses" />
              </div>
              <div className={styles.name}>
                <h3>{glasses ? "Wearing" : "Not Wearing"}</h3>
              </div>
            </div>
            <div
              className={classNames(styles.statusCard, styles.card)}
              style={{ background: temp <= 37 ? "green" : "rgb(172,4,4)" }}
            >
              <h1>{status}</h1>
            </div>
            <div className={styles.progress}>
              <CircularProgress style={{ opacity: progress ? "1" : "0" }} />
            </div>
          </div>

          <form onSubmit={submitData} className={styles.captureBtnContainer}>
            <Button className={styles.captureBtn} component="label">
              Open File
              <CameraAltIcon fontSize="small" />
              <input
                required
                type="file"
                id="image"
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
        </Grid>
        <Grid item md={9}>
          {/* <div className={styles.camera}>
            <Webcam
              className={styles.webcam}
              ref={thermalCameraRef}
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div> */}
          <div className={styles.images}>
            <img src={thermalImage} alt="thermal" />
            <img src={originalImage} alt="thermal" />
          </div>
        </Grid>
      </Grid>
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
            <div key={item.name} className={styles.item}>
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
