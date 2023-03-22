import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const SuggestCard = () => {
  //TODO: organizar altura luego
  return (
    <Card
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        m: 1,
        p: 1,
        width: 'auto',
        height: '95%',
      }}
    >
      <Grid container direction="column" sx={{ height: '100%' }}>
        <Grid item xs={6}>
          <Box sx={{ bgcolor: '#6ab6ba', borderRadius: '10px', p: 1 }}>
            <Typography>Title</Typography>
          </Box>
          <Typography>suggest</Typography>
          <Typography>suggest</Typography>
          <Typography>suggest</Typography>
          <Typography>suggest</Typography>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ bgcolor: '#6ab6ba', borderRadius: '10px', p: 1 }}>
            <Typography>Title</Typography>
          </Box>
          <Typography>new</Typography>
          <Typography>new</Typography>
          <Typography>new</Typography>
          <Typography>new</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SuggestCard;
