import React from 'react';
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';

const Target = () => {
  return (
      <Paper
        elevation={2}
        sx={{
          width: '25%',
          height: '200px',
          bgcolor: '#777',
          m:1
        }}
      />
  );
};

export default Target;
