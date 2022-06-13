import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';

const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#BE6C30'
    }
  },

  breakpoints: {
    values: {
      xxs:0,
      xs: 350,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ThemeProvider theme={globalTheme}>
      <App />
    </ThemeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
