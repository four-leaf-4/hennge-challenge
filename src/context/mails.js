import React, { useState, createContext, useEffect } from 'react';
import { getMails } from '../apis/';

export const MailsContext = createContext();

export const MailsContextProvider = ({ children }) => {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    getMails()
      .then((resp) => {
        setMails(resp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <MailsContext.Provider value={{ mails }}>{children}</MailsContext.Provider>
  );
};

export default MailsContextProvider;
