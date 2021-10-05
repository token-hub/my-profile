import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './assets/theme/customTheme';
import {ThemeProvider} from '@mui/material/styles';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
