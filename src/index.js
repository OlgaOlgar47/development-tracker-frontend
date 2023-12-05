import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import store from './store';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5A9BFF',
    },
    secondary: {
      main: '#FF0200',
    },
    default: {
      main: '#1D6BF3',
    },
  }
});

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
