import { NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Navigation = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Box
          display={'flex'}
          component={NavLink}
          to='/'
          color={'inherit'}
          sx={{ textDecoration: 'none' }}
        >
          <Typography component={'h1'} fontSize={30} fontWeight={'bold'} align='center'>
            Coin look up!
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
