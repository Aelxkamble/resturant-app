import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import axios from "axios";

import {
  Box,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Hidden,
  Typography,
} from "@mui/material";
import { MenuList } from "../Data/data";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import '../Styles/Menu.css'

const Menu = () => {
  let navigate = useNavigate();

  //Get Menu
  const [menu1, setMenu] = useState([]);
  const[category,setCategory]=useState('');
  const[filteredItems,setFilteredItems]=useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/products`).then((response) => {
      setMenu(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(()=>{
    const filtered=menu1.filter((item)=>

      item.category.toLowerCase().startsWith(category)
      
    );
      setFilteredItems(filtered);
    },[menu1 ,category]);
    


  //Add to cart ---------------------

  function addToCart(menu) {
    if (sessionStorage.getItem("userId")) {
      menu["userId"] = sessionStorage.getItem("userId");
      menu["qty"] = 1;
      axios.post(`http://localhost:3000/cart`, menu);
      navigate("/logincart");
    } else {
      navigate("/form");
    }
  }

  return (
    <Layout>
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
        ...Menu...
        <hr className="hr" />
      </h1>
      <div style={{margin:'1rem',display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",}}>
        <Button
          style={{ padding: "0.5rem",background:'#33CBFF',margin:'0.5rem' }}
          color="tertiary"
          disabled={false}
          variant="filled"
          onClick={()=>setCategory('')}
          
        >
          All
        </Button>
        <Button
          style={{ padding: "0.5rem",background:'#33CBFF',margin:'0.5rem' }}
          color="tertiary"
          disabled={false}
          variant="filled"
          onClick={()=>setCategory('breakfast')}
        >
          BreakFast
        </Button>
        <Button
          style={{ padding: "0.5rem",background:'#33CBFF',margin:'0.5rem' }}
          color="tertiary"
          disabled={false}
          variant="filled"
          onClick={()=>setCategory('lunch')}
        >
          Lunch
        </Button>
        <Button
          style={{ padding: "0.5rem",background:'#33CBFF',margin:'0.5rem' }}
          color="tertiary"
          disabled={false}
          variant="filled"
          onClick={()=>setCategory('snacks')}
        >
          Snacks
        </Button>
        <Button
          style={{ padding: "0.5rem",background:'#33CBFF',margin:'0.5rem' }}
          color="tertiary"
          disabled={false}
          variant="filled"
          onClick={()=>setCategory('dinner')}
        >
          Dinner
        </Button>
      </div>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredItems &&
          filteredItems.map((item) => (
            <Card
              sx={{
                maxWidth: "350px",
                border: "2px solid goldenrod",
                maxHeight: "700px",
                display: "flex",
                m: 2,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <CardActionArea className="card">
                <CardMedia
                  sx={{ minHeight: "350px" }}
                  component={"img"}
                  src={item.imageurl}
                  alt={item.name}
                  

                />
                <CardContent className="card-body">
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" style={{padding:'1.5rem'}}>{item.description}</Typography>
                  <Typography>{item.price}</Typography>
                  <Typography>
                    <Button
                      variant="contained"
                      sx={{ padding: "10px", margin: "20px" }}
                    >
                      <Link
                        to={"/menu"}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        See More
                      </Link>
                    </Button>
                    <Button variant="outlined" onClick={() => addToCart(item)}>
                      Add To Cart
                    </Button>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </Box>
    </Layout>
  );
};

export default Menu;
