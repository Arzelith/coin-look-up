import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import logo from '../assets/images/cryptologov2.png';

const Hero = () => {
  const Img = styled('img')({
    width: 120,
    height: 128,
  });
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      pt={3}
      pb={3}
      textAlign={'center'}
    >
      <Img src={logo} alt='logo' />
      <Typography variant='h2' fontWeight={'Bold'}>
        Coin look up!
      </Typography>
      <Typography variant='h5' fontWeight={''}>
        Obtén información de mercado de tus criptomonedas favoritas.
      </Typography>
    </Box>
  );
};

export default Hero;
