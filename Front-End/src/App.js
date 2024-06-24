import './App.css';

import React from 'react';
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
import { UserProvider } from './usecontext/Usecontext';
import Category from './page/Category';
import Product from './page/Product';

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product" element={<Product />} />
          </Routes>
          <Footer />
        </div>
      </Router>

    </UserProvider>
  );
}

export default App;
