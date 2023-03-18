import React from 'react';
import Grid from '@mui/material/Grid';
import InfoTarget from './InfoTarget';

const Target = () => {
  return (
    <Grid container direction="column">
      <Grid container direction="row">
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <InfoTarget />
          <InfoTarget />
          <InfoTarget />
          <InfoTarget />
        </Grid>
      </Grid>

      <Grid container direction="row">
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <InfoTarget />
          <InfoTarget />
          <InfoTarget />
          <InfoTarget />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Target;
