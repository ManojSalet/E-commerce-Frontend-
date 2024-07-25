import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Footer from './components/Footer/Footer.js';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum debitis saepe laborum magni maiores. Eius facere suscipit, illum accusamus esse, quo assumenda deleniti doloribus reiciendis pariatur lorem100 </h1>
        } 
          />
        <Route path="/category" element={<h1>Category</h1>} />
        <Route path="/wishlist" element={<h1>Whishlist</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        
      </Routes>
    </BrowserRouter> 
    <Footer />

    </>
  );
}

export default App;
