import { Chip } from "@mui/material";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Alert from "@mui/material/Alert";
import axios from "axios";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const formValidate=(formData)=>{

      axios
      .post(`http://localhost:3000/user`,formData)
      .then((response)=>{
        console.log("success",response.data)
      })
}

function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);

  const [usernameInput, setUsernameInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [formValid, setFormValid] = useState();
  const [success,setSucess] = useState();

  const handleUsername = () => {
    if (
      !usernameInput ||
      usernameInput.length < 5 ||
      usernameInput.length > 20
    ) {
      setUsernameError(true);
      return;
    }
    setUsernameError(false);
  };

  const handleEmail = () => {
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };

  const handlePassword = () => {
    if (
      !passwordInput ||
      passwordInput.length < 5 ||
      passwordInput.length > 20
    ) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSucess(null);

    if (usernameError || !usernameInput) {
      setFormValid("Username is Between 5-15 characters long. Please Re-enter");
      return;
    }

    if (emailError || !emailInput) {
      setFormValid("Email is Invalid. Please Re-enter");
      return;
    }

    if (passwordError || !passwordInput) {
      setFormValid("Password is set to 5-20 characters. Please Re-enter");
      return;
    }

    setFormValid(null);
    setSucess("Form Submitted Succesfully");
    const formData={
      username:usernameInput,
      email:emailInput,
      password:passwordInput
    }

    formValidate(formData)

    console.log("Name : "+usernameInput);
    console.log("Email : "+emailInput);
    console.log("Password : " +passwordInput);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <p>
        <TextField
          id="standard-basic"
          error={usernameError}
          label="Username"
          value={usernameInput}
          onChange={(event) => setUsernameInput(event.target.value)}
          onBlur={handleUsername}
          variant="standard"
          fullWidth
          size="small"
        />
      </p>
      <p>
        <TextField
          id="standard-basic"
          error={emailError}
          label="Email"
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
          onBlur={handleEmail}
          variant="standard"
          fullWidth
          size="small"
        />
      </p>
      <p>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel
            error={passwordError}
            htmlFor="standard-adornment-password"
          >
            Password
          </InputLabel>
          <Input
            fullWidth
            error={passwordError}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            value={passwordInput}
            onChange={(event) => setPasswordInput(event.target.value)}
            onBlur={handlePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </p>
      <p>
        <Button
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          startIcon={<LoginIcon />}
        >
          Sign Up
        </Button>
      </p>
      <p>{formValid && <Alert severity="error">{formValid}</Alert>}</p>
      <p>{success && <Alert severity="success">{success}</Alert>}</p>
    </div>
  );
}

export default SignUp;
