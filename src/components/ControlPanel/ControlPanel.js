import React, { useEffect, useState } from "react";
import styles from "./ControlPanel.module.css";
import {
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
  Switch,
  TextField,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";
import VideocamIcon from "@material-ui/icons/Videocam";
import StorageIcon from "@material-ui/icons/Storage";
import SettingsIcon from "@material-ui/icons/Settings";
import classNames from "classnames";

const ControlPanel = ({ history }) => {
  const [selected, setSelected] = useState({
    login: styles.nothing,
    register: styles.nothing,
    capture: styles.nothing,
    database: styles.nothing,
  });

  const [sunglasses, setSunglasses] = useState(false);
  const [emailToUser, setEmailToUser] = useState(true);
  const [saveOriginal, setOriginal] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [alarm, setAlarm] = useState(false);
  const [thermalView, setThermalView] = useState(true);

  const onClickButton = (location) => {
    history.push(`/${location}`);
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const submitSettingsForm = (e) => {
    e.preventDefault();
    alert("Hurry ");
  };

  useEffect(() => {
    // console.log(history.location);
    switch (history.location.pathname) {
      case "/":
        setSelected({ login: styles.whiteBg });
        break;
      case "/register":
        setSelected({ register: styles.whiteBg });
        break;
      case "/capture":
        setSelected({ capture: styles.whiteBg });
        break;
      case "/database":
        setSelected({ database: styles.whiteBg });
        break;
      case "/settings":
        setSelected({ settings: styles.whiteBg });
        break;
      default:
        setSelected({
          login: styles.nothing,
          register: styles.nothing,
          capture: styles.nothing,
          database: styles.nothing,
          settings: styles.nothing,
        });
        break;
    }
  }, [history.location]);

  return (
    <div className={styles.container}>
      <div className={classNames(styles.iconBtn, selected.login)}>
        <IconButton onClick={() => onClickButton("")}>
          <PersonIcon fontSize="large" />
        </IconButton>
      </div>
      <div className={classNames(styles.iconBtn, selected.register)}>
        <IconButton onClick={() => onClickButton("register")}>
          <AddIcon fontSize="large" />
        </IconButton>
      </div>
      <div className={classNames(styles.iconBtn, selected.capture)}>
        <IconButton onClick={() => onClickButton("capture")}>
          <VideocamIcon fontSize="large" />
        </IconButton>
      </div>
      <div className={classNames(styles.iconBtn, selected.database)}>
        <IconButton onClick={() => onClickButton("database")}>
          <StorageIcon fontSize="large" />
        </IconButton>
      </div>
      <div
        className={classNames(
          styles.iconBtn,
          open ? styles.whiteBg : styles.nothing
        )}
      >
        <IconButton onClick={() => setOpen(true)}>
          <SettingsIcon fontSize="large" />
        </IconButton>
      </div>
      <>
        <Dialog
          open={open}
          onClose={handleClose}
          className={styles.dialog}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle
            className={styles.dialogTitle}
            id="responsive-dialog-title"
          >
            {"Settings"}
          </DialogTitle>
          <form onSubmit={submitSettingsForm}>
            <FormControl component="fieldset" className={styles.settingsDialog}>
              <FormGroup aria-label="position" className={styles.settingsForm}>
                <FormControlLabel
                  className={styles.formComponent}
                  value={sunglasses}
                  control={<Switch color="primary" />}
                  checked={sunglasses}
                  label="Allow sunglasses"
                  labelPlacement="end"
                  onChange={() => setSunglasses(!sunglasses)}
                />
                <FormControlLabel
                  className={styles.formComponent}
                  value={emailToUser}
                  checked={emailToUser}
                  onChange={() => setEmailToUser(!emailToUser)}
                  control={<Switch color="primary" />}
                  label="Email to user"
                  labelPlacement="end"
                />
                <FormControlLabel
                  className={styles.formComponent}
                  value={saveOriginal}
                  checked={saveOriginal}
                  onChange={() => setOriginal(!saveOriginal)}
                  control={<Switch color="primary" />}
                  label="Save original image"
                  labelPlacement="end"
                />

                <TextField
                  className={classNames(styles.formComponent, styles.adminMail)}
                  value={adminEmail}
                  variant="standard"
                  type="email"
                  label="Admin email"
                  onChange={(e) => setAdminEmail(e.target.value)}
                />
                <FormControlLabel
                  className={styles.formComponent}
                  value={alarm}
                  checked={alarm}
                  onChange={() => setAlarm(!alarm)}
                  control={<Switch color="primary" />}
                  label="Sound alarm"
                  labelPlacement="end"
                />
                <FormControlLabel
                  className={styles.formComponent}
                  value={thermalView}
                  checked={thermalView}
                  onChange={() => setThermalView(!thermalView)}
                  control={<Switch color="primary" />}
                  label="Thermal view"
                  labelPlacement="end"
                />
                <Button type="submit" className={styles.saveBtn}>
                  Save
                </Button>
              </FormGroup>
            </FormControl>
          </form>
        </Dialog>
      </>
    </div>
  );
};

export default withRouter(ControlPanel);
