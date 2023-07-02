import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';

import './index.css';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
