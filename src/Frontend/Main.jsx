import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid/';
import Target from './MainHelpers/Targets/Target';
import CentralBar from './MainHelpers/CentralBar';
import Social from './MainHelpers/Social';
import SuggestCard from './MainHelpers/SuggestCard';

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
      <Grid container>
        <Grid item xs={8}>
          <Target />
        </Grid>
        <Grid item xs={4}>
          <SuggestCard />
        </Grid>
      </Grid>
      <CentralBar />
      <Social />
    </Box>
  );
};

export default Main;
