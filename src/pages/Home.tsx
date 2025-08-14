import React, { useState } from 'react';
import {
  Container,
  Box,
  Select,
  MenuItem,
  Button,
  FormControl,
  Typography,
} from '@mui/material';

const Home: React.FC = () => {
  const [tipContract, setTipContract] = useState('');

  const handleSelectChange = (event: any) => {
    setTipContract(event.target.value);
  };

  const handleButtonClick = () => {
    console.log('Contract selectat:', tipContract);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        pt: '100px',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          Tipul contractului
        </Typography>

        <FormControl fullWidth sx={{ mb: 3 }}>
          <Select
            value={tipContract}
            onChange={handleSelectChange}
            displayEmpty
            renderValue={(selected) =>
              selected ? (
                selected === 'vanzare-cumparare' ? (
                  'Vânzare-Cumpărare'
                ) : selected === 'donatie' ? (
                  'Donație'
                ) : (
                  'Procura minor'
                )
              ) : (
                <Box sx={{ color: 'text.secondary' }}>
                  Alege tipul contractului
                </Box>
              )
            }
            sx={{
              backgroundColor: 'background.paper',
              color: 'text.secondary',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: (theme) => theme.palette.success.main,
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: (theme) => theme.palette.success.main,
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: (theme) => theme.palette.success.main,
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: 'background.default',
                  border: '1px solid',
                  borderColor: 'text.primary',
                  '& .MuiMenuItem-root': {
                    color: 'text.primary',
                    '&:hover': {
                      backgroundColor: 'background.paper',
                    },
                    '&.Mui-selected': {
                      backgroundColor: '#E1C3A3',
                      '&:hover': {
                        backgroundColor: 'background.paper',
                      },
                    },
                  },
                },
              },
            }}
          >
            <MenuItem value="vanzare-cumparare">Vânzare-Cumpărare</MenuItem>
            <MenuItem value="donatie">Donație</MenuItem>
            <MenuItem value="procura-minor">Procura minor</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
          sx={{ fontWeight: 'bold', textTransform: 'none' }}
        >
          Mai departe
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
