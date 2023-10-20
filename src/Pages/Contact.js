import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import {
  Check,
  FormatBold,
  FormatItalic,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { ListItemDecorator } from "@mui/joy";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SendIcon from "@mui/icons-material/Send";
import { useFormAction, useNavigate } from "react-router-dom";
import '../Styles/Contact.css'


const Contact = () => {
  const [italic, setItalic] = useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);


  let navigate = useNavigate();
  function review(){
    navigate('/review')
  }

 






  return (
    <>
      
      <div style={{ marginTop: "2rem" }}>
        <h1
          className="h1"
          style={{
            background: "lightGrey",
            width: "100%",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          ...Contact...
          <hr className="hr" />
        </h1>
      </div>
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39740.19396869639!2d-0.26389061209209624!3d51.49923259794277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760558d3710195%3A0xe1338379ae56c891!2sLaunceston%20Place!5e0!3m2!1sen!2sin!4v1697518225221!5m2!1sen!2sin"
          width="100%"
          height="450"

          style={{border:"2px solid grey",borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'3rem',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Paper
        elevation={12}
        style={{
          padding: "5% ",
          margin: "15%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ paddingBottom: "1rem" }}>For Online Inquiries</h2>
        <p>
          Excepteur, porttitor provident repudiandae nisi nisi. Lorem
          cupiditate.
        </p>
        <div  >
        <div >
        <form action="https://formspree.io/f/xjvqjdkp" method="POST" >
          <label>User Name:</label>
          <input  name='username' type="text" placeholder="username" required autoComplete="off" />
          <label>Email ID:</label>
          <input  name='email' type="email" placeholder="example email@gmail.com" required autoComplete="off" />
          <label>Contact No:</label>
          <input  name='phone' type="phone" placeholder="example +91" required autoComplete="off" />
          <textarea name="message" placeholder="Enter Your Message" cols="30" rows="10" required autoComplete="off"></textarea>
          <button type="submit" value="Send" >Send</button>
        </form>
        </div>
        </div>
      </Paper>

      <Layout>
        <Box
          sx={{
            my: 5,
            ml: 10,
            "& h4": { fontWeight: "bold", mb: 2 },
          }}
        >
          <Typography variant="h4" style={{ fontFamily: "Berkshire Swash" }}>
            Contact My Resturant
          </Typography>
          <p>
            Yummygum is an Amsterdam-based design studio that specializes in
            digital products made by startups. It's no surprise that this
            brand's Contact Us page balances both form and function flawlessly.
          </p>
        </Box>
        <Box
          sx={{
            m: 3,
            width: "600px",
            ml: 10,
            "@media (max-width:600px)": {
              width: "300px",
            },
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-lable="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      bgcolor: "black",
                      width: "100%",
                      color: "white",
                      fontFamily: "Berkshire Swash",
                    }}
                    align="center"
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} />{" "}
                    123456(tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{ color: "skyblue", pt: 1 }} />
                    helpdesk@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: "green", pt: 1 }} />
                    +91 234856521
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Layout>
    </>
  );
};

export default Contact;
