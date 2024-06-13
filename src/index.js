import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';

import About from './pages/About'
import Blog from './pages/Blogs'
import Gallery from './pages/Gallery'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomeTemplates from './templates/HomeTemplates';
import Register from './pages/Register';
import AdminTemplates from './templates/AdminTemplates';
import Product from './pages/Product';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path='' element={<HomeTemplates />}>
        <Route index element={<Home />}></Route>
        <Route path="Home" element={<Home />} ></Route>
        <Route path="About" element={<About />} ></Route>
        <Route path="Blog" element={<Blog />} ></Route>
        <Route path="Gallery" element={<Gallery />} ></Route>
        <Route path="*" element={<Navigate to="/" />} ></Route>
        <Route path="Register" element={<Register />} ></Route>
      </Route>
      <Route path='AdminTemplates' element={<AdminTemplates />}>
        <Route path="Product" element={<Product />} ></Route>
      </Route>
    </Routes>
  </BrowserRouter>


);


