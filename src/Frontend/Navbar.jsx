import React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkCss = { textDecoration: 'none' };

  const cssButtons = {
    bgcolor: '#D6F1EE',
    borderRadius: 2,
    textDecoration: 'none',
    mr: 1,
    ':hover': { bgcolor: '#1BAAD6', color: 'black' },
  };

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
            <Grid
              xs={7}
              item
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              Nombre (por definir)
              <Box>
                <Link to={'/tendencias'} style={linkCss}>
                  <Button sx={cssButtons}>Tendencias </Button>
                </Link>
                <Link to={'/ultimos-agregados'} style={linkCss}>
                  <Button sx={cssButtons}>Últimos agregados</Button>
                </Link>
              </Box>
            </Grid>
            <Grid xs={2} item>
              <Link to={'/catalogo'} style={linkCss}>
                <Button sx={{ ...cssButtons, ml: 2 }}>Catálogo</Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
