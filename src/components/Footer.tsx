import React from 'react';
import { Box, Typography } from '@mui/material';

const FOOTER_HEIGHT = 36;

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        height: `${FOOTER_HEIGHT}px`,
        py: 0,
        textAlign: 'center',
        color: (theme) => theme.palette.text.primary,
        backgroundColor: 'background.default',
      }}
    >
      <Typography sx={{ fontSize: '0.75rem' }}>
        Drepturi de autor © 2025 RedactoPro | Toate drepturile rezervate
        <br />
        Politica de confidențialitate
      </Typography>
    </Box>
  );
};

export default Footer;
