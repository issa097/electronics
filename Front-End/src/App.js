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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
