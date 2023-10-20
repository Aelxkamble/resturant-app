import React, { useEffect, useState } from "react";
import "./LoginCart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Layout from "./Layout/Layout";






export const LoginCart = () => {  

  //To get cart data
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/cart?userId=${sessionStorage.getItem("userId")}`
      )
      .then((response) => {
        setCartData(response.data);       
      })
      .catch((error)=>{
        console.log("Errors",error);
      })
    }, []);




  const [item, setItem] = useState();
  
  
  // Increment and Decrement----------
  const [count, setCount] = useState(1);

  function increment(item) {
    const newCount = count + 1;
    setCount(newCount);
    // Update the cart with the new quantity
    updateCartItemQuantity(item, count);
  }

  function decrement(item) {
    if (count <= 1) {
      removeItem(item);
    } else {
      const newCount = count - 1;
      setCount(newCount);
      // Update the cart with the new quantity
      updateCartItemQuantity(item, count);
    }
  }
  const[qty,setQty]=useState(1)


  // Function to update the cart item's quantity
function updateCartItemQuantity(item, newQuantity) {
  const userId = sessionStorage.getItem("userId");
   const updatedItem = {
    ...item,
    quantity: newQuantity,
  };
//   let totalQuantity = 0;

//   for (const cartItem of cart) {
//     totalQuantity += cartItem.quantity;
//   }

//   return totalQuantity;
// }

  axios
    .put(`http://localhost:3000/cart/${item.id}`, updatedItem)
    .then((response) => {
      // Handle the response from the server, e.g., updating the UI.
      console.log(response.data)
      setQty(response.data.quantity)
      console.log(response.data.quantity)
    })
    .catch((error) => {
      console.log("Errors",error);
    });
}



 //To remove product from cart

 function removeItem(product) {
  const userId = sessionStorage.getItem("userId");
  axios
    .delete(`http://localhost:3000/cart/${product.id}`)
    .then((response) => {
      // Handle the response from the server, e.g., updating the UI.
      window.location.href = "/logincart";
    })
    .catch((error) => {
      // Handle errors, e.g., display an error message.
    });
}




//Get the Total Price
  let[totalPrice,setTotalPrice]= useState(0);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/cart?userId=${sessionStorage.getItem("userId")}`
      )
      .then((response) => {
        setCartData(response.data);
        sessionStorage.setItem("cartLength", response.data.length);
        // Calculate the total price here
        const total = response.data.reduce((sum, item) => sum + (item.price)*(item.quantity), 0);
        setTotalPrice(total);        
      })
      .catch((error)=>{
        console.log("Errors",error);
      })
    }, []);
    

  //-------------------------
  let navigate = useNavigate();


  function goback() {
    navigate("/");
  }

  return (
    <>
    <Layout>
    <h1 className="h1" style={{background:'lightGrey',width:'100%',height:'200px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>...Shopping Cart...
        
        <hr className="hr"/>
        </h1>
      <div className="body">
        <header>
          <div className="continue-shopping">
            <img
              src="./Images/arrow.png"
              alt="arrow"
              className="arrow-icon"
              style={{ cursor: "pointer" }}
              onClick={() => goback()}
            />
            <h3>Continue Shopping</h3>
          </div>
          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>{qty}</p>
          </div>
        </header>
        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            You have{" "}
            <span className="total-items-count">
              {qty}
            </span>{" "}
            items in shopping cart
          </p>
          <div className="cart-items">
            <div className="cart-items-container">
              <Scrollbars>
                {cartData.map((item)=>{
                  return(
                    <div>
                    <div className="items-info">
                      <div className="product-img">
                        <img src={item.imageurl} alt="img" />
                      </div>
                      <div className="title">
                        <h2>{item.name}</h2>
                      </div>
                      <div className="add-minus-quantity">
                        <RemoveIcon
                          className="remove"
                          onClick={() => decrement(item)}
                        ></RemoveIcon>
                        <input type="text" placeholder={qty}></input>
                        <AddIcon
                          className="plus"
                          onClick={() => increment(item)}
                        ></AddIcon>
                      </div>
                      <div className="price">
                        <h3>₹  {item.price}</h3>
                      </div>
                      <div className="remove-item">
                        <DeleteIcon
                          className="delete"
                          onClick={() => removeItem(item)}
                          
                        ></DeleteIcon>
                      </div>
                    </div>
                    <hr />
                  </div>
                  )
                })}

              </Scrollbars>
            </div>
          </div>
          <div className="card-total">
            <h3>
              Cart Total:<span>₹ {totalPrice}</span>
            </h3>
            <button>Checkout</button>
            <button className="clear-cart">
              Clear Cart
            </button>
          </div>
        </section>
      </div>


      
      </Layout>
    </>
  );
};

export default LoginCart;