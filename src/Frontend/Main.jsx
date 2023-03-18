import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Target from './MainHelpers/Target';

const Main = () => {
  return (
    <Box sx={{ display:'flex',flexDiection:'column', height: 'fit-content', width: '100%' }}>

      <Grid container direction='column'>
        <Grid container direction="row">
           <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between'}} >
             <Target />
             <Target />
             <Target />
             <Target />
             <Target />
           </Grid>
        </Grid>


        <Grid container direction="row">
           <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between'}} >
             <Target />
             <Target />
             <Target />
             <Target />
             <Target />
          </Grid>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Main;
