import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import FacebookIcon from '@mui/icons-material/Facebook';

const Social = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'center',
        justifyContent: 'center',
        m: 1,
      }}
    >
      <IconButton>
        <FacebookIcon />
      </IconButton>
      <IconButton>
        <TwitterIcon />
      </IconButton>
      <IconButton>
        <InstagramIcon />
      </IconButton>
      <IconButton>
        <RedditIcon />
      </IconButton>
    </Box>
  );
};

export default Social;
