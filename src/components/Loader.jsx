import { CircularProgress, Box, Paper, Fade } from '@mui/material';
const Loader = ({ height, isBox }) => {
  return (
    <Box
      component={isBox ? Box : Paper}
      display={'flex'}
      height={height}
      justifyContent={'center'}
      alignItems={'center'}
      variant='outlined'
    >
      <Fade in={true}>
        <CircularProgress size={100} />
      </Fade>
    </Box>
  );
};

export default Loader;
