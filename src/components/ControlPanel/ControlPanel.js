import React, { useEffect, useState } from "react";
import styles from "./ControlPanel.module.css";
import { IconButton } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";
import VideocamIcon from "@material-ui/icons/Videocam";
import StorageIcon from "@material-ui/icons/Storage";
import SettingsIcon from "@material-ui/icons/Settings";
import MultilineChartIcon from "@material-ui/icons/MultilineChart";
import classNames from "classnames";

const ControlPanel = ({ history }) => {
  const [selected, setSelected] = useState({
    login: styles.nothing,
    mode: styles.nothing,
    register: styles.nothing,
    capture: styles.nothing,
    database: styles.nothing,
    settingbs: styles.nothing,
  });

  const onClickButton = (location) => {
    history.push(`/${location}`);
  };

  useEffect(() => {
    // console.log(history.location);
    switch (history.location.pathname) {
      case "/":
        setSelected({ login: styles.whiteBg });
        break;
      case "/mode":
        setSelected({ mode: styles.whiteBg });
        break;
      case "/register":
        setSelected({ register: styles.whiteBg });
        break;
      case "/capture/thermal":
      case "/capture/attendance":
      case "/capture/in-out":
      case "/capture/ppe":
      case "/capture/select":
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
          mode: styles.nothing,
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
      <div className={classNames(styles.iconBtn, selected.mode)}>
        <IconButton onClick={() => onClickButton("mode")}>
          <MultilineChartIcon fontSize="large" />
        </IconButton>
      </div>
      <div className={classNames(styles.iconBtn, selected.register)}>
        <IconButton onClick={() => onClickButton("register")}>
          <AddIcon fontSize="large" />
        </IconButton>
      </div>
      <div className={classNames(styles.iconBtn, selected.capture)}>
        <IconButton onClick={() => onClickButton("capture/select")}>
          <VideocamIcon fontSize="large" />
        </IconButton>
      </div>
      <div className={classNames(styles.iconBtn, selected.database)}>
        <IconButton onClick={() => onClickButton("database")}>
          <StorageIcon fontSize="large" />
        </IconButton>
      </div>
      <div className={classNames(styles.iconBtn, selected.settings)}>
        <IconButton onClick={() => onClickButton("settings")}>
          <SettingsIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default withRouter(ControlPanel);
