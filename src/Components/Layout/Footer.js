import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "../../Images/logo.svg";
import { NavLink } from "react-router-dom";
import '../../Styles/Footer.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <>
    
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <div className="footer-up">
          <div className="about-test">
            <div className="logo">
              <img src={Logo} alt="Logo" height={"50px"} width={"200px"} />
            </div>
            <div className="about">
              <p>
                If you’re looking for the best sushi in Michigan, look no
                further than BBQ restaurant in Birmingham.
              </p>
            </div>
          </div>
          <div className="our-loaction">
            <h3>Our Location</h3>
            <address>
              3 E 19th St, 123 Fifth Avenue, NY 10160, New York, USA 1 234 567
              890
            </address>
            <div className="location">
            <span><LocationOnIcon></LocationOnIcon></span>
            <span className="get-loaction">Get Location</span>
            </div>
          </div>
          <div className="Quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to={'/'} className='link'>Home</NavLink></li>
            <li><NavLink to={'/menu'} className='link'>Menu</NavLink></li>
            <li><NavLink to={'/about'} className='link'>About</NavLink></li>
            <li><NavLink to={'/contact'} className='link'>Contact</NavLink></li>
            <li><NavLink to={'/form'} className='link'>Login</NavLink></li>
          </ul>
          </div>
        </div>
        <hr />
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "30px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon />
          <YouTubeIcon />
          <TwitterIcon />
          <FacebookIcon />
          <GitHubIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}
        >
          All Rights Reserved &copy; Techinfo YT
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
