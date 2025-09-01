import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import logo from '../assets/Logo_deschis.png';

const NAVBAR_HEIGHT = 50;

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        height: `${NAVBAR_HEIGHT}px`,
        backgroundColor: (theme) => theme.palette.text.primary,
      }}
    >
      <Toolbar
        sx={{
          minHeight: `${NAVBAR_HEIGHT}px !important`,
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <img src={logo} alt="Logo" style={{ height: 40 }} />
        </Box>
        <Typography
          sx={{
            color: (theme) => theme.palette.text.secondary,
            fontSize: '1.5rem',
          }}
        >
          Redactare Contract Notarial
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
