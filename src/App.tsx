import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login';
import About from './pages/About';

function App() {
  

  return (
    <ChakraProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </ChakraProvider>
  );
}

export default App;
