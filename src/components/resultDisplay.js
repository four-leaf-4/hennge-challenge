import 'date-fns';
import React, { useContext } from 'react';
import { Divider, Typography } from '@material-ui/core';
import { MailsContext } from '../context/';

export const ResultDisplay = () => {
  const { mails } = useContext(MailsContext);
  const mailcounts = mails ? mails.length : 0;
  return (
    <>
      <Typography>result: {mailcounts} mail(s)</Typography>
      <Divider />
    </>
  );
};

export default ResultDisplay;
