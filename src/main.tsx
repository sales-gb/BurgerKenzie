import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/theme';
import App from './App';
import { UserProvider } from './providers/UserContext';
import { ShopProvider } from './providers/ShopContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <ShopProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ShopProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
