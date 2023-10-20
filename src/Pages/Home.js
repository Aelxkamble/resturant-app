import React from "react";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../Images/banner.jpeg";
import "../Styles/HomeStyle.css";
import img1 from '../Images/bg1.jpg';
import {bgimg} from '../Data/Cardbgimg';
import { Card, CardActionArea, CardMedia } from "@mui/material";
import Slidder from '../Components/Layout/Slidder';




const Home = () => {

  
  
  
  return (
    <Layout>
      <div className="home" >
        <div className="headerContainer">
          <h1>Food WebSite</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="h1" style={{background:'lightGrey',width:'100%',height:'200px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>Featured Dishes
        
        <hr className="hr"/>
        </h1>
        
      <Slidder></Slidder>
      </div>

      <div className="menu-section">
        <div className="head">
          <h4>OUR MENU</h4>
          <span className="divider-cont">
           <span className="divider"></span>
          <h1>Get Relax. Eat.</h1>
           <span className="divider"></span>

          </span>
          <p>
            Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit.
            Bibendum tincidunt a scelerisque consectetur ultrices elementum
            pulvinar non.
          </p>
        </div>
        <div className="menu">
          <div className="left-menu">
            <ul>
              <li>
                LEMON AND GARLIC GREEN BEANS - 15.00
                <br />
                <span>Lemon / Garlic / Beans</span>
              </li>
              <li>
                {" "}
                BACON-WRAPPED SHRIMP WITH GARLIC - 21.50
                <br />
                <span>Bacon / Shrimp / Garlic</span>
              </li>
              <li>
                {" "}
                LAMB-BEEF KOFKA SKEWERS WITH TZATZIKI - 18.50
                <br />
                <span>Lamb / Wine / Butter</span>
              </li>
              <li>
                {" "}
                IMPORTED OYSTERS GRILL (5 PIECES) - 20.00
                <br />
                <span>Oysters / Veggie / Ginger</span>
              </li>
              <li>
                {" "}
                LEMON AND GARLIC GREEN BEANS - 15.00
                <br />
                <span>Lemon / Garlic / Beans</span>
              </li>
            </ul>
          </div>
          <div className="right-menu">
            <ul>
              <li>
                LEMON AND GARLIC GREEN BEANS - 15.00
                <br />
                <span>Lemon / Garlic / Beans</span>
              </li>
              <li>
                {" "}
                BACON-WRAPPED SHRIMP WITH GARLIC - 21.50
                <br />
                <span>Bacon / Shrimp / Garlic</span>
              </li>
              <li>
                {" "}
                LAMB-BEEF KOFKA SKEWERS WITH TZATZIKI - 18.50
                <br />
                <span>Lamb / Wine / Butter</span>
              </li>
              <li>
                {" "}
                IMPORTED OYSTERS GRILL (5 PIECES) - 20.00
                <br />
                <span>Oysters / Veggie / Ginger</span>
              </li>
              <li>
                {" "}
                LEMON AND GARLIC GREEN BEANS - 15.00
                <br />
                <span>Lemon / Garlic / Beans</span>
              </li>
            </ul>
          </div>

          
        </div>
        <div className="btn">
          <span className="divider-cont">
          <span className="divider"></span>
         
          <button > <Link to="/menu" className="link"> More Menu </Link></button>
         
          <span className="divider"></span>
          </span>
          </div>
      </div>
      <div className="signature-menu" style={{backgroundImage: `url(${Banner})`}}>
        <div className="head">
          <h4>HOMEMADE</h4>
          <h1>Signature Menu</h1>
          <p>
            Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit.
            Bibendum tincidunt a scelerisque consectetur ultrices elementum
            pulvinar non.
          </p>
        </div>
        </div>
        <div className="photos-grid">
          {bgimg.map((bg)=>(
          <Card sx={{maxWidth:'390px',display:'flex',margin:'30px'}}>
            <CardActionArea >
              <CardMedia  sx={{ minHeight: "400px" }}
                component={"img"}
                src={bg.link}
                />
            </CardActionArea>
          </Card>
          ))}
        </div>
    </Layout>
  );
};

export default Home;
