import React, { useState } from "react";
import styles from "./Login.module.css";
import { withRouter } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import loginImage from "../../assets/images/heroLogin.svg";

export const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = () => {
    history.push("/mode");
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.formContainer}>
          <form onSubmit={submitForm}>
            <div className={styles.card}>
              <div className={styles.heading}>
                <h1>Login</h1>
                {/* <p>Please login here to continue</p> */}
              </div>
              <TextField
                className={styles.textField}
                required
                value={username}
                type="email"
                onChange={(e) => setUsername(e.target.value)}
                label="Username"
                variant="outlined"
              />
              <TextField
                className={styles.textField}
                required
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                variant="outlined"
              />
              <Button
                className={styles.submitBtn}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
        {/* <div className={styles.heroImage}>
          <img src={loginImage} alt="hero-login" />
        </div> */}
      </div>
    </div>
  );
};

export default withRouter(Login);
