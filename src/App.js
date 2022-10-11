import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Contest from './pages/Contest'
import Products from './pages/Products'
import Hoodie from './pages/Hoodie';
import Tshirt from './pages/Tshirt';
import Cap from './pages/Cap';
import ShoppingCart from './pages/ShoppingCart';
import Cart from './pages/Cart'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import Layout from './layout/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/contest' element={<Contest />} />
            <Route path='/products' element={<Products />} />
            <Route path='/hoodie' element={<Hoodie />} />
            <Route path='/tshirt' element={<Tshirt />} />
            <Route path='/cap' element={<Cap />} />
            <Route path='/shoppingcart/:id' element={<ShoppingCart />} />
            <Route path='/signup' element={<SignUpPage/>} />
            <Route path='/signin' element={<SignInPage/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
