import React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';

const Navbar = () => {
  return (
    <Grid sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: '#85E3E9', borderRadius: '10px' }}
      >
        <Toolbar>
          <Grid container sx={{ height: '100%', width: '100%' }}>
            <Grid xs={3} item>
              Logo
            </Grid>
            <Grid xs={7} item>
              Nombre (por definir) icono icono icono
            </Grid>
            <Grid xs={2} item>
              Catalogo
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
