import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@mui/material';

interface IDEntry {
  file: File | null;
  married: boolean;
}

interface LabeledRowProps {
  label: string;
  children: React.ReactNode;
  labelWidth?: string;
}

const LabeledRow: React.FC<LabeledRowProps> = ({
  label,
  children,
  labelWidth = '120px',
}) => (
  <Grid container alignItems="center" sx={{ mb: 2, display: 'flex' }}>
    <Grid item xs="auto" sx={{ width: labelWidth }}>
      <Typography textAlign="left">{label}</Typography>
    </Grid>
    <Grid item xs sx={{ flexGrow: 1 }}>
      {children}
    </Grid>
  </Grid>
);

interface IDInputProps {
  entry: IDEntry;
  index: number;
  role: 'cumparator' | 'vanzator';
  handleFileChange: (index: number, file: File | null) => void;
  handleMarriedChange: (index: number, married: boolean) => void;
}

const IDInput: React.FC<IDInputProps> = ({
  entry,
  index,
  role,
  handleFileChange,
  handleMarriedChange,
}) => (
  <Box sx={{ mb: 3, borderBottom: '1px solid #ccc', pb: 2 }}>
    <Typography sx={{ mb: 1 }}>
      {role === 'cumparator' ? 'ID Cumpărător' : 'ID Vânzător'} {index + 1}
    </Typography>
    <Button
      variant="outlined"
      component="label"
      sx={{
        mb: 1,
        color: 'success.main',
        borderColor: 'background.paper',
        backgroundColor: 'text.secondary',
        textTransform: 'none',
        fontWeight: 'bold',
      }}
    >
      {entry.file
        ? `Fișier: ${entry.file.name}`
        : 'Încarcă imagine cu buletinul'}
      <input
        type="file"
        hidden
        onChange={(e) =>
          handleFileChange(index, e.target.files ? e.target.files[0] : null)
        }
      />
    </Button>

    <Box sx={{ mt: 1 }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={entry.married}
            onChange={(e) => handleMarriedChange(index, e.target.checked)}
            sx={{
              color: 'background.paper',
              '&.Mui-checked': { color: 'background.paper' },
              '&:hover': { backgroundColor: 'transparent' },
            }}
          />
        }
        label="Căsătorit(ă)"
        sx={{ color: 'text.primary' }}
      />
    </Box>
  </Box>
);

const Details: React.FC = () => {
  const { tipContract } = useParams<{ tipContract: string }>();
  const navigate = useNavigate();

  const contractLabels: Record<string, string> = {
    vanzare: 'Vânzare',
    donatie: 'Donație',
  };

  const [carteFunciara, setCarteFunciara] = useState('');
  const [creditIpotecar, setCreditIpotecar] = useState('');
  const [openDialog, setOpenDialog] = useState<
    null | 'cumparator' | 'vanzator'
  >(null);
  const [numIDs, setNumIDs] = useState(1);
  const [idEntries, setIdEntries] = useState<IDEntry[]>([]);

  const initializeIDEntries = (count: number) => {
    setIdEntries(
      Array.from({ length: count }, () => ({ file: null, married: false })),
    );
  };

  const handleFileChange = (index: number, file: File | null) => {
    setIdEntries((prev) =>
      prev.map((e, i) => (i === index ? { ...e, file } : e)),
    );
  };

  const handleMarriedChange = (index: number, married: boolean) => {
    setIdEntries((prev) =>
      prev.map((e, i) => (i === index ? { ...e, married } : e)),
    );
  };

  const handleSubmitIDs = () => {
    console.log('Submitted IDs:', idEntries);
    setOpenDialog(null);
  };

  const handleGenerare = () => {
    console.log('Generare button clicked');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        pt: '25px',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Button onClick={() => navigate('/')} sx={{ mr: 2 }}>
            ← Înapoi
          </Button>
          <Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Detalii contract:{' '}
            <Box component="span" sx={{ color: 'success.main' }}>
              {contractLabels[tipContract || ''] || 'Necunoscut'}
            </Box>
          </Typography>
        </Box>

        <LabeledRow label="ID Cumpărător:">
          <Button
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: 'text.secondary',
              color: 'success.main',
              borderColor: 'background.paper',
              textTransform: 'none',
              fontWeight: 'bold',
            }}
            onClick={() => {
              setNumIDs(1);
              setOpenDialog('cumparator');
              initializeIDEntries(1);
            }}
          >
            Încarcă datele
          </Button>
        </LabeledRow>

        <LabeledRow label="ID Vânzător:">
          <Button
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: 'text.secondary',
              color: 'success.main',
              borderColor: 'background.paper',
              textTransform: 'none',
              fontWeight: 'bold',
            }}
            onClick={() => {
              setNumIDs(1);
              setOpenDialog('vanzator');
              initializeIDEntries(1);
            }}
          >
            Încarcă datele
          </Button>
        </LabeledRow>

        <LabeledRow label="Carte funciară:">
          <TextField
            fullWidth
            variant="outlined"
            value={carteFunciara}
            onChange={(e) => setCarteFunciara(e.target.value)}
          />
        </LabeledRow>

        <LabeledRow label="Credit ipotecar:">
          <TextField
            fullWidth
            variant="outlined"
            value={creditIpotecar}
            onChange={(e) => setCreditIpotecar(e.target.value)}
          />
        </LabeledRow>

        {/* Generare Button */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerare}
            sx={{ fontWeight: 'bold', textTransform: 'none' }}
          >
            Generare
          </Button>
        </Box>
      </Container>

      <Dialog
        open={!!openDialog}
        onClose={() => setOpenDialog(null)}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: { sx: { backgroundColor: 'background.default' } },
        }}
      >
        <DialogTitle>
          {openDialog === 'cumparator' ? 'ID Cumpărător' : 'ID Vânzător'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: '10px' }}>
            <TextField
              type="number"
              label="Număr ID-uri"
              value={numIDs}
              onChange={(e) => {
                const count = Math.max(1, parseInt(e.target.value) || 1);
                setNumIDs(count);
                initializeIDEntries(count);
              }}
              onWheel={(e: React.WheelEvent<HTMLDivElement>) => {
                (e.target as HTMLInputElement).blur();
              }}
              fullWidth
              sx={{
                mb: 3,
                '& .MuiInputLabel-root': { color: 'background.paper' },
                '& .MuiOutlinedInput-root': {
                  color: 'text.primary',
                  '& fieldset': { borderColor: 'background.paper' },
                  '&:hover fieldset': { borderColor: 'background.paper' },
                  '&.Mui-focused fieldset': { borderColor: 'background.paper' },
                },
              }}
            />

            {idEntries.map((entry, index) => (
              <IDInput
                key={index}
                entry={entry}
                index={index}
                role={openDialog!}
                handleFileChange={handleFileChange}
                handleMarriedChange={handleMarriedChange}
              />
            ))}
          </Box>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => setOpenDialog(null)}
            sx={{
              '&:hover': {
                color: 'background.paper',
              },
            }}
          >
            Închide
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmitIDs}
            sx={{
              '&:hover': {
                backgroundColor: 'success.main',
              },
            }}
          >
            Salvează
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Details;
