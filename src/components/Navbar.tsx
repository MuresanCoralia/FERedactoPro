import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import logo from '../assets/Logo_deschis.png';

const NAVBAR_HEIGHT = 65;

const Navbar: React.FC = () => {
  return (
    <AppBar
      elevation={1}
      sx={{
        backgroundColor: (theme) => theme.palette.text.primary,
        height: `${NAVBAR_HEIGHT}px`,
      }}
    >
      <Toolbar
        sx={{ justifyContent: 'center', position: 'relative', height: '100%' }}
      >
        <Box sx={{ position: 'absolute', left: 2 }}>
          <img src={logo} alt="Logo" style={{ height: 70 }} />
        </Box>
        <Typography
          sx={{
            color: (theme) => theme.palette.text.secondary,
            fontSize: '2rem',
          }}
        >
          Redactare Contract Notarial
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
