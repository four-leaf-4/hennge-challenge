import React from 'react';
import { render } from 'react-dom';
import {
  StartDateContextProvider,
  EndDateContextProvider,
  MailsContextProvider,
} from './context/';
import App from './App';

render(
  <StartDateContextProvider>
    <EndDateContextProvider>
      <MailsContextProvider>
        <App />
      </MailsContextProvider>
    </EndDateContextProvider>
  </StartDateContextProvider>,
  document.getElementById('root')
);
