import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    allVariants: {
      color: '#f9fafb',
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: '#111827',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1f2937',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#111827',

          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#111827',
            width: '10px',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            backgroundColor: '#64748b',
            borderColor: '#fff',
            minHeight: 24,
            borderRadius: '10px',
          },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
