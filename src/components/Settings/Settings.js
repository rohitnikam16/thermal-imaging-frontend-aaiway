import React, { useState } from "react";
import styles from "./Settings.module.css";
import PropTypes from "prop-types";
import {
  Button,
  TextField,
  Switch,
  Paper,
  Tab,
  Tabs,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Slider,
  Fab,
  IconButton,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const Settings = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.outerContainer}>
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
          className={styles.tabsContainer}
        >
          <Tab label="Detection Settings" />
          <Tab label="Database Settings" />
          <Tab label="Application Settings" />
        </Tabs>
        <TabPanel className={styles.fullHeight} value={value} index={0}>
          <DetectionSettings />
        </TabPanel>
        <TabPanel className={styles.fullHeight} value={value} index={1}>
          <DatabaseSettings />
        </TabPanel>
        <TabPanel className={styles.fullHeight} value={value} index={2}>
          <ApplicationSettings />
        </TabPanel>
      </Paper>
    </div>
  );
};

export default Settings;

const DetectionSettings = () => {
  const [sunglasses, setSunglasses] = useState(false);
  const [emailToUser, setEmailToUser] = useState(true);
  const [adminEmail, setAdminEmail] = useState("admin@mail.com");
  const [alarm, setAlarm] = useState(false);
  const [tempTest, setTempTest] = useState(false);
  const [thermalView, setThermalView] = useState(true);
  const [guestRecord, setGuestRecord] = useState(true);
  const [scene, setScene] = useState("indoor");

  const submitSettingsForm = (e) => {
    e.preventDefault();
    alert("Hurry ");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitSettingsForm}>
        <Fab className={styles.fab} color="secondary" aria-label="edit">
          <IconButton type="submit">
            <CheckIcon />
          </IconButton>
        </Fab>
        <div className={styles.row}>
          <h4 onClick={() => setEmailToUser(!emailToUser)}>Email to user</h4>
          <Switch
            checked={emailToUser}
            onChange={(e) => setEmailToUser(e.target.checked)}
          />
        </div>

        <div className={styles.row}>
          <h4 onClick={() => setTempTest(!tempTest)}>Body temperature test</h4>
          <Switch
            checked={tempTest}
            onChange={(e) => setTempTest(e.target.checked)}
          />
        </div>
        <div className={styles.row}>
          <FormControl className={styles.sceneSelection}>
            <InputLabel id="scene-selection">Scene Selection</InputLabel>
            <Select
              labelId="scene-selection"
              id="scene-selection"
              value={scene}
              onChange={(e) => setScene(e.target.value)}
            >
              <MenuItem value="indoor">Indoor</MenuItem>
              <MenuItem value="outdoor">Outdoor</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles.row}>
          <TextField
            className={styles.textField}
            label="Admin Email"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            variant="standard"
          />
        </div>
        <div className={styles.row}>
          <h4 onClick={() => setAlarm(!alarm)}>Body temperature alarm</h4>
          <Switch
            checked={alarm}
            onChange={(e) => setAlarm(e.target.checked)}
          />
        </div>
        <div className={styles.row}>
          <h4 onClick={() => setSunglasses(!sunglasses)}>Allow sunglasses</h4>
          <Switch
            checked={sunglasses}
            onChange={(e) => setSunglasses(e.target.checked)}
          />
        </div>
        <div className={styles.row}>
          <h4 onClick={() => setGuestRecord(!guestRecord)}>Guest Record</h4>
          <Switch
            checked={guestRecord}
            onChange={(e) => setGuestRecord(e.target.checked)}
          />
        </div>
        <div className={styles.row}>
          <h4 onClick={() => setThermalView(!thermalView)}>Thermal View</h4>
          <Switch
            checked={thermalView}
            onChange={(e) => setThermalView(e.target.checked)}
          />
        </div>
      </form>
    </div>
  );
};

const DatabaseSettings = () => {
  const [saveOriginal, setOriginal] = useState(true);
  const [guestRecord, setGuestRecord] = useState(false);

  return (
    <div className={styles.container}>
      <form onSubmit={() => alert("Hurry!")}>
        <Fab className={styles.fab} color="secondary" aria-label="edit">
          <IconButton type="submit">
            <CheckIcon />
          </IconButton>
        </Fab>
        <div className={styles.row}>
          <h4 onClick={() => setOriginal(!saveOriginal)}>
            Save original image
          </h4>
          <Switch
            checked={saveOriginal}
            onChange={(e) => setOriginal(e.target.checked)}
          />
        </div>
        <div className={styles.row}>
          <h4 onClick={() => setGuestRecord(!guestRecord)}>Guest Record</h4>
          <Switch
            checked={guestRecord}
            onChange={(e) => setGuestRecord(e.target.checked)}
          />
        </div>
      </form>
    </div>
  );
};

const ApplicationSettings = () => {
  const [brightness, setBrightness] = useState(50);

  return (
    <div className={styles.container}>
      <form onSubmit={() => alert("Hurray Application !")}>
        <Fab className={styles.fab} color="secondary" aria-label="edit">
          <IconButton type="submit">
            <CheckIcon />
          </IconButton>
        </Fab>
        <div className={styles.col}>
          <h4>Brightness</h4>
          <Slider
            defaultValue={brightness}
            aria-labelledby="discrete-slider-custom"
            step={10}
            valueLabelDisplay="auto"
            onChange={(e) => setBrightness(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
