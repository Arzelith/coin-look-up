import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

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
      pt={1}
      pb={2}
      textAlign={'center'}
    >
      <Img
        src='https://res.cloudinary.com/davzt8amc/image/upload/v1688581355/Assets/coin-look-up/jmqgtxy4uoupg5en9mtt.webp'
        alt='logo'
      />
      <Typography variant='h4' fontWeight={'Bold'}>
        Coin look up!
      </Typography>
      <Typography variant='h6' fontWeight={'400'}>
        Obtén información de mercado de tus criptomonedas favoritas.
      </Typography>
    </Box>
  );
};

export const MemoizedHero = React.memo(Hero);
export default Hero;
