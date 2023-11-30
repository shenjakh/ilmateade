import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%', 
  maxWidth: '400px',
  bgcolor: '#FFFFFF',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  margin: '1em',
};

const titleStyle = {
  textAlign: 'center',
  color: '#2D3E40',
  padding: '1em',
  fontWeight: 'bold',
};

const buttonStyle = {
    backgroundColor: '#387373',
    color: '#FFFFFF',
    marginTop: '1em',
    '&:hover': {
        backgroundColor: '#387373'},
  };

  const inputStyle = {
    '&.focused': {
      borderBottomColor: '#387373',
    },
  };

function ModalCoordinates({ onSearch }) {
  const [open, setOpen] = useState(false);
  const [kohanimi, setKohanimi] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearch = () => {
    onSearch({ kohanimi, lat, lon });
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} style={{backgroundColor: '#387373', margin: '1em', color: '#FFFFFF'}}>Lisa</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography sx={titleStyle} id="modal-modal-title" variant="h6" component="h2">
            Lisa koordinaadid
          </Typography>
          <FormControl variant="standard" sx={{ width: '100%' }}>
            <Input
              id="kohanimi"
              value={kohanimi}
              onChange={(e) => setKohanimi(e.target.value)}
              placeholder="Kohanimi"
              fullWidth
              margin="1em"
              sx={inputStyle}
            />
            <Input
              id="lat"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              placeholder="Laiuskraad(Latitude)"
              fullWidth
              margin="1em"
              sx={inputStyle}
            />
            <Input
              id="lon"
              value={lon}
              onChange={(e) => setLon(e.target.value)}
              placeholder="Pikkuskraad(Longitude)"
              fullWidth
              margin="1em"
              sx={inputStyle}
            />
            <Button onClick={handleSearch} fullWidth variant="contained" sx={buttonStyle}>
              Otsi
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalCoordinates;