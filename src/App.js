import Layout from "./Components/Layout/Layout";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import PageNotFound from './Pages/PageNotFound';
import Form from "./Pages/Form";
import Cart from "./Pages/Cart";
import LoginCart from "./Components/LoginCart";
import Review from "./Pages/Review";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/logincart" element={<LoginCart/>}></Route>
        <Route path="/review" element={<Review/>}></Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
