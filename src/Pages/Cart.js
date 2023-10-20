import React from 'react'
import Layout from '../Components/Layout/Layout';
import Image from '../Images/cartimage.jpg';
import Button from '@mui/material/Button';
import '../Styles/Cart.css';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <Layout>
      <div className='cart1'>
        <div className='image-div'>
        <img src={Image}/>
        </div>
        <div className='signup-section'>
        <img src='https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg' style={{width:'400px',height:'300px'}} />
        <h2>Your Cart is Empty</h2>
        <div className='button'>
        <Button variant="contained"> <NavLink to={'/form'}  style={{textDecoration:'none'}}>Sign In</NavLink></Button>
        <Button variant="np"><NavLink to={'/form'} style={{textDecoration:'none'}}>Sign Up</NavLink></Button>
        </div>
        </div>
      </div>

      </Layout>
      
    </div>

  )
}

export default Cart
