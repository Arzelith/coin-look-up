import { Box, Paper, Container } from '@mui/material';
import DisplayError from './DisplayError';

const Wrapper = ({ children, isPageWrapper, apiError }) => {
  if (isPageWrapper && !apiError) {
    return (
      <Container
        maxWidth={'lg'}
        sx={{
          pt: 10,
          pb: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight:'100svh'
        }}
      >
        {children}
      </Container>
    );
  }
  if (isPageWrapper && apiError) {
    return <DisplayError code={apiError.code} errorMessage={apiError.errorMessage} />;
  }
  return (
    <Box
      maxWidth={'1000px'}
      width={'100%'}
      display={'flex'}
      flexDirection={'column'}
      paddingTop={1}
      paddingBottom={1}
    >
      <Paper sx={{ p: 3 }} variant='outlined'>
        {children}
      </Paper>
    </Box>
  );
};

export default Wrapper;
