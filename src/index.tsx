import React, { Suspense } from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';

import { App } from './components';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styles/GlobalStyle';
import { AppTheme } from './styles/Theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={null}>
        <ThemeProvider theme={AppTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();