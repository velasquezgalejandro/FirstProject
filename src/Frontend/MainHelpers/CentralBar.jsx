import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CentralBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          bgcolor: '#6ab6ba',
          width: '80%',
          height: '70%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
        }}
      >
        <Button sx={{ color: 'black' }}>Leído</Button>
        <Button sx={{ color: 'black' }}>Siguiendo</Button>
        <Button sx={{ color: 'black' }}>Favoritos</Button>
        <Button sx={{ color: 'black' }}>Abandonados</Button>
      </Box>
    </Box>
  );
};

export default CentralBar;
