import React from 'react';
import { render } from 'react-dom';
import { StartDateContextProvider, EndDateContextProvider } from './context/';
import App from './App';

render(
  <StartDateContextProvider>
    <EndDateContextProvider>
      <App />
    </EndDateContextProvider>
  </StartDateContextProvider>,
  document.getElementById('root')
);
