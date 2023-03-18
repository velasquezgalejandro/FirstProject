import React from 'react';
import Box from '@mui/material/Box';
import Target from './MainHelpers/Target';

const Main = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', bgcolor: 'red' }}>
      <Target />
    </Box>
  );
};

export default Main;
