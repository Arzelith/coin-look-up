import { Box, Typography } from '@mui/material';
import logo from '../assets/images/cryptologo.png';

const Hero = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      gap={1}
      pt={3}
      pb={3}
      textAlign={'center'}
    >
      <img src={logo} style={{ width: 120 }} />
      <Typography variant='h2' fontWeight={''}>
        Coin look up!
      </Typography>
      <Typography variant='h5' fontWeight={''}>
        Obtén información de mercado de tus cryptomonedas favoritas.
      </Typography>
    </Box>
  );
};

export default Hero;
