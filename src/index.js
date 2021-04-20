import React from 'react';
import { render } from 'react-dom';
import {
  StartDateContextProvider,
  EndDateContextProvider,
  MailsContextProvider,
  SearchSubjectContextProvider,
} from './context/';
import App from './App';

render(
  <SearchSubjectContextProvider>
    <StartDateContextProvider>
      <EndDateContextProvider>
        <MailsContextProvider>
          <App />
        </MailsContextProvider>
      </EndDateContextProvider>
    </StartDateContextProvider>
  </SearchSubjectContextProvider>,
  document.getElementById('root')
);
