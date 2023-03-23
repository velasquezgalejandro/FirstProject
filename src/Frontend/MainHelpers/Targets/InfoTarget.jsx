import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

const InfoTarget = () => {
  return (
    <Box
      sx={{
        width: '25%',
        '& :hover': {
          transform: 'translateY(-5px) scale(1.005) translateZ(0)',
          boxShadow: '0 15px 24px rgba(0,0,0,0.11)',
        },
      }}
    >
      <Card
        elevation={2}
        sx={{
          position: 'relative',
          height: '200px',
          bgcolor: '#777',
          p: 1,
          m: 1,
        }}
      >
        aa
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            left: 0,
            bottom: 10,
            width: '100%',
            height: '20px',
            bgcolor: 'rgba(0,0,0,0.4)',
          }}
        >
          NOMBRE
        </Box>
      </Card>
    </Box>
  );
};

export default InfoTarget;
