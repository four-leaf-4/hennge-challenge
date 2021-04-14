import 'date-fns';
import React from 'react';
import { Container } from '@material-ui/core';
import { SearchForm } from './components/searchForm';
import { ResultDisplay } from './components/resultDisplay';
import { MailList } from './components/mailList';

const App = () => {
  return (
    <Container maxWidth="lg">
      <SearchForm />
      <ResultDisplay />
      <MailList />
    </Container>
  );
};

export default App;
