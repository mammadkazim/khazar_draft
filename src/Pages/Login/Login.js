import React, { useState } from "react";
import "./Login.css";
import Logo from "../../Assets/icons/logo.svg";
import errorIcon from "../../Assets/icons/error-icon.png";
import closeIcon from "../../Assets/icons/close-icon.png";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/userSlice";
import {themeCustom} from "../../Assets/styles/theme";
import { ThemeProvider } from "@emotion/react";
let c = console.log.bind(document);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState();
  const [showError, setShowError] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setAuth(false);
          setShowError(true);
          localStorage.removeItem("user");
        } else {
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/homepage");
          setAuth(true);
          setShowError(false);
          dispatch(
            login({ firstName: data.firstName, lastName: data.lastName })
          );
        }
      });
  };
  return (
    <ThemeProvider theme={themeCustom}>
      <div className="page">
        <div className="container">
          <div className="left-side">
            <div className="logo-container">
              <img src={Logo} alt="logo"></img>
            </div>
          </div>
          <div className="right-side">
            <form className="login-form" onSubmit={handleSubmit}>
              <TextField
                onChange={(e) => setUserName(e.target.value)}
                value={username}
                type="text"
                style={{ width: "100%" }}
                id="outlined-basic"
                label="İstifadəçi adı"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Şifrə"
                type={!showPassword ? "text" : "password"}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => {
                        setShowPassword((prev) => !prev);
                      }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              ></TextField>
              <Button
                // style={{ width: "100%", textTransform: "initial" }}
                variant="contained"
                type="submit"
              >
                Daxil ol
              </Button>
            </form>
          </div>
        </div>
        {!auth && showError && (
          <div className="error-message">
            <img className="error-icon" alt="error-icon" src={errorIcon}></img>
            <p>İstifadəçi adı və ya şifrə yanlış daxil edilib</p>
            <button onClick={() => setShowError(false)}>
              <img alt="close-icon" src={closeIcon}></img>
            </button>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Login;
