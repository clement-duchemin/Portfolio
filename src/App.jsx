import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Footer from './components/Footer/Footer';
//import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
  <div className="App">
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </div>
  );
}

export default App;
