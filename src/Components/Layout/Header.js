import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../Styles/HeaderStyle.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../Images/logo.svg";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Header = () => {
  //Go Back
  function goback() {
    navigate("/");
  }

  let navigate = useNavigate();

  // const[isLoggedIn,setIsloggedin]=useState(false)

  // function checkLogin(){
  //     setIsloggedin(sessionStorage.getItem('userId'))
  // }
  
  function cartNavigation(){
    if(sessionStorage.getItem("userId"))
    {
      window.location.href='/logincart';
    }
    else
    {
      window.location.href='/form'
    }
  }

  function logout(){
    sessionStorage.clear();
    alert("Logged out ....!")
    
  }
  const [mobileOpen, setMobileOpen] = useState(false);
  //Handle Menu Click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //Menu Drawer
  const drawer = (
    <Box onCLick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="Logo" height={"50px"} width={"200px"} onClick={() => goback()}  />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/menu"}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/about"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/contact"}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/form"}>
            Login
          </NavLink>
        </li>
        <li>
                  <NavLink activeClassName="active" onClick={()=>logout()} >
                    LogOut
                  </NavLink>

                </li>
        <li className="cart-trolley">
            <ShoppingBagIcon onClick={()=> cartNavigation()}  className="cart-trolley-link"/>
            <span className="cart-total-items">0</span>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
            <LunchDiningIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1,cursor:'pointer' }}
            >
              <img src={Logo} alt="Logo" height={"70px"} width={"250px"} onClick={() => goback()} />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/menu"}>
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/about"}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/contact"}>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/form"}>
                    Login
                  </NavLink>

                </li>
                <li>
                  <NavLink activeClassName="active" onClick={()=>logout()}>
                    LogOut
                  </NavLink>

                </li>
                <li className="cart-trolley">
                  <NavLink activeClassName="active" >
                    <ShoppingBagIcon onClick={()=> cartNavigation()}  className="cart-trolley-link" />
                    <span className="cart-total-items">0</span>
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrwer-paper": { boxSizing: "border-box", width: "240px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
