import React,{useEffect, useState} from 'react';
// import Layout from '../Components/Layout/Layout';
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
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';





const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [rememberMe,setRememberMe] = useState();



  const navigate=useNavigate()
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [formValid, setFormValid] = useState();
  const [success, setSucess] = useState();
const [data,setData]=useState([])

  useEffect(
    ()=>{
      axios.get(`http://localhost:3000/user`)
      .then((response)=>{
        setData(response.data)
      })
    },[]
  )
  
  const validateUser=(emailInput,passwordInput)=>{
    let isValid=false
    // console.log(emailInput,passwordInput)
    data && data.map((val)=>{
      if(val.email==emailInput && val.password==passwordInput){
        console.log("data"+val.email)
        console.log("data"+val.password)
        isValid=true
        navigate("/")

        sessionStorage.setItem("userId", val.id);
        sessionStorage.setItem("useName", val.username);
        console.log("ok")
      }
      else{
        console.log("incorrect")
      }
    })
  
   
  }

  

  

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
    validateUser(emailInput,passwordInput)
    console.log("Email : " + emailInput);
    console.log("Password : " + passwordInput);
    console.log("Remember : " + rememberMe);
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
      <div align="left">
      <Checkbox
      onChange={(event)=>setRememberMe(event.target.checked)}
      inputProps={{ 'aria-label': 'controlled' }}
    />Remember Me
      </div>
      <p>
        <Button
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          startIcon={<LoginIcon />}
        >
          Login
        </Button>
      </p>
      <p>{formValid && <Alert severity="error">{formValid}</Alert>}</p>
      <p>{success && <Alert severity="success">{success}</Alert>}</p>
   </div>
  )
}

export default Login
