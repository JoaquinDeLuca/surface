import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Contest from './pages/Contest'
import Products from './pages/Products'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contest' element={<Contest />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
