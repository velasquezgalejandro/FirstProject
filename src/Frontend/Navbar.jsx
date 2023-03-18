import React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';

const Navbar = () => {
  return (
    <Grid sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container sx={{ height: '100%', width: '100%' }}>
            <Grid xs={3} item>
              Logo
            </Grid>
            <Grid xs={7} item>
              Nombre (por definir)
            </Grid>
            <Grid xs={2} item>
              Usuario
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
