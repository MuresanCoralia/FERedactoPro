import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Details from './pages/Details';
import { Box } from '@mui/material';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Navbar />
        <Box
          component="main"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalii/:tipContract" element={<Details />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </HashRouter>
  );
};

export default App;
