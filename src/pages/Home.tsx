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
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [tipContract, setTipContract] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const contractLabels: Record<string, string> = {
    vanzare: 'Vânzare',
    donatie: 'Donație',
  };

  const handleSelectChange = (event: any) => {
    setTipContract(event.target.value);
    if (showMessage) setShowMessage(false);
  };

  const contractDetails = () => {
    if (tipContract) {
      navigate(`/detalii/${tipContract}`);
    } else {
      setShowMessage(true);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
          Tipul contractului
        </Typography>

        <FormControl fullWidth sx={{ mb: 1 }}>
          <Select
            value={tipContract}
            onChange={handleSelectChange}
            displayEmpty
            renderValue={(selected) =>
              selected
                ? contractLabels[selected] || 'Necunoscut'
                : 'Alege tipul contractului'
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
            {Object.keys(contractLabels).map((key) => (
              <MenuItem key={key} value={key}>
                {contractLabels[key]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography
          sx={{
            color: 'success.main',
            minHeight: '24px',
            mb: 2,
            fontWeight: 'bold',
          }}
        >
          {showMessage ? 'Te rog să alegi un tip de contract' : ''}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={contractDetails}
          sx={{ fontWeight: 'bold', textTransform: 'none' }}
        >
          Mai departe
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
