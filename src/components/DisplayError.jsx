import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Paper } from '@mui/material';

const DisplayError = ({ errorMessage, code }) => {
  const location = useLocation();
  const navigate = useNavigate('/');
  const refresh = () => {
    if (location.pathname === '/') {
      window.location.reload(false);
    } else {
      navigate('/');
    }
  };
  return (
    <Container
      sx={{
        minHeight: '100svh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper variant='outlined' sx={{ width: 600 }}>
        <Box textAlign={'center'} pt={4} pb={4}>
          <Typography variant='h4' fontWeight={'bold'}>
            {code}
          </Typography>
          <Typography component={'p'} variant='h6' sx={{ mt: 1 }}>
            {errorMessage}
          </Typography>
          <Button onClick={refresh} sx={{ mt: 2 }} variant='contained'>
            Volver a índice
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default DisplayError;
