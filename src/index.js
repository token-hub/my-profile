import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './assets/theme/customTheme';
import {ThemeProvider} from '@mui/material/styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
