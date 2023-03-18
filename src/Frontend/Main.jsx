import React from 'react';
import Box from '@mui/material/Box';
import Target from './MainHelpers/Targets/Target';
import CentralBar from './MainHelpers/CentralBar';

const Main = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'fit-content',
        width: '100%',
      }}
    >
      <Target />
      <CentralBar />
    </Box>
  );
};

export default Main;
