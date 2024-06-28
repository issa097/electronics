import './App.css';

import React, { useState } from 'react';
import './index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Register from './components/register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { UserProvider, CatProvider, SubCatProvider, ProductProvider } from './usecontext/Usecontext';
import Category from './page/Category';
import Product from './page/Product';
import Details from './page/Details';
import Cart from './page/Cart';

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  console.log(isLoginOpen)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  console.log(isRegisterOpen)
  return (
    <UserProvider>
      <CatProvider>
        <SubCatProvider>
          <ProductProvider>

            <Router>
              <div>
                <Navbar setIsLoginOpen={setIsLoginOpen} setIsRegisterOpen={setIsRegisterOpen} />

                <Routes>
                  <Route path="/register" element={<Register isOpen={isRegisterOpen} onRequestClose={() => setIsRegisterOpen(false)} />} />
                  <Route path="/login" element={<Login isOpen={isLoginOpen} onRequestClose={() => setIsLoginOpen(false)} />} />
                  <Route path="/category" element={<Category />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/details/:product_id" element={<Details />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
              </div>
            </Router>
          </ProductProvider>
        </SubCatProvider>
      </CatProvider >

    </UserProvider>
  );
}

export default App;
