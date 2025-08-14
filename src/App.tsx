import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Box } from '@mui/material';

const NAVBAR_HEIGHT = 65;

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Box
        sx={{
          pt: `${NAVBAR_HEIGHT}px`,
          minHeight: 'calc(100vh - 65px - 50px)',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
};

export default App;
