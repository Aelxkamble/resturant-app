import React, { useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import BgImage from "../Images/restimage1.jpg";
import '../Styles/About.css';
import axios from "axios";
import { Button } from "bootstrap";
import { useState } from "react";

const About = () => {
  const [Chef,setChef]=useState([]);
  useEffect(
    ()=>{
      axios.get(`http://localhost:3000/chefs`)
      .then((response)=>{
        setChef(response.data)
        console.log(response.data)
      })
    },[]
  )
  const [logos,setLogo]=useState([]);
  useEffect(
    ()=>{
      axios.get(`http://localhost:3000/brandLogos`)
      .then((response)=>{
        setLogo(response.data)
        console.log(response.data)
      })
    },[]
  )


  return (
    <Layout>
      <div className="About" style={{backgroundImage:`url(${BgImage})`}}>
      <h1 className="h1" style={{background:'lightGrey',width:'100%',height:'200px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>...About Us...
        
        <hr className="hr"/>
        </h1>
      <Box sx={{my:20,
       textAlign:'center',
       height:600,
       p:2,
       color:'white',
       "& h4":{
        fontWeight:"bold",
        my:4,
        fontSize:'4rem'
      },
      "& p":{
        textAlign:'justify',
        fontSize:'1.5rem'
      },
      "@media (max-width:600px)":
      {
        mt:0,
        "& h4":{
          fontSize:'1rem',
        }
      }
      }}>
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          If you’re looking for the best sushi in Michigan, look no further than
          BBQ restaurant in Birmingham. Our globally influenced
          Japanese-inspired restaurant is located in the beautiful Victorian
          Peabody Mansion and led by Executive Chef Lloyd Roberts, who brings
          years of experience and innovative technique to the kitchen. At BBQ,
          we offer a wide range of gastronomic adventures with small and large
          plates, specialty craft cocktails, and a full sushi bar featuring
          sashimi and nigiri options flown fresh from Japan.
          <br/> 
          Our commitment to
          quality is evident in the fresh, locally and internationally sourced
          ingredients we use in all of our dishes. We take a vibe-driven
          approach to fine dining, emphasizing the social experience in our
          dining room, sushi lounge, and cocktail bar. Our chic ambiance and
          decor create a fun atmosphere that’s perfect for any occasion, whether
          you’re joining us for dinner, cocktails, a private party, or a special
          event. At BBQ, we pride ourselves on world-class hospitality and
          promise to make your experience special and memorable. Join us today
          and taste the best sushi in Michigan!
        </p>
      </Box>
      </div>
      <h1 className="h1" style={{background:'lightGrey',width:'100%',height:'200px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>...Our Chef...
        <hr className="hr"/>
        </h1>
        <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {Chef && Chef.map((item) => (
          <Card sx={{ maxWidth: "350px", border:'2px solid orange',maxHeight:'700px', display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'row',m: 2,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "350px" }}
                component={"img"}
                src={item.cheflink}
              />
              <Typography variant="h3" style={{fontSize:'26px',padding:'1rem'}}>
                {item.name}
              </Typography>
              <Typography variant="h6" style={{fontSize:'20px',padding:'1rem'}}>
                {item.position}
              </Typography>
            </CardActionArea>
          </Card>
        ))}
        </Box>
        <h1 className="h1" style={{background:'lightGrey',width:'100%',height:'200px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>...Recommended By...
        </h1>
        <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {logos && logos.map((item) => (
          <Card sx={{ maxWidth: "250px",className:"card", maxHeight:'90px', display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'row',m: 2,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "50px" }}
                component={"img"}
                src={item.logoLink}
                className="logo"
              />
            </CardActionArea>
          </Card>
        ))}
        </Box>
        
    </Layout>
  );
};

export default About;
