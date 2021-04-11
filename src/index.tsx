import React from 'react';
import ReactDOM from 'react-dom';
import { TurnProvider } from './hooks/useTurn';
import { App } from './App';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <TurnProvider>
      <App />
    </TurnProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);