import { Box, Typography } from '@mui/material';

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
