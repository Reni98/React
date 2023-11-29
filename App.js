import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Posts from './Posts';
import Details from './Details';
import Footer from './Footer';
import Create from './Create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Posts />}></Route>
          <Route path="/read/:id" element={<Details />}></Route>
          <Route path="/newblog" element={<Create />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
