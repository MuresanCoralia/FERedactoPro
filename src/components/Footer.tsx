import React from 'react';
import { Box, Typography } from '@mui/material';

const FOOTER_HEIGHT = 36;

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        color: (theme) => theme.palette.text.primary,
        py: 2,
        textAlign: 'center',
        height: `${FOOTER_HEIGHT}px`,
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
