import React, { useState, createContext, useEffect, useContext } from 'react';
import { getMails } from '../apis/';
import { StartDateContext, EndDateContext } from '../context/';

export const MailsContext = createContext();

export const MailsContextProvider = ({ children }) => {
  const [mails, setMails] = useState([]);
  const { startSelectedDate } = useContext(StartDateContext);
  const { endSelectedDate } = useContext(EndDateContext);

  const [rows, setRows] = useState([]);

  const hundleFilter = () => {
    const resultFilter = mails.filter(({ date }) => {
      return startSelectedDate <= date && date <= endSelectedDate;
    });
    setRows(resultFilter);
  };

  useEffect(() => {
    getMails()
      .then((resp) => {
        setMails(resp);
        setRows(resp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <MailsContext.Provider value={{ mails, hundleFilter, rows }}>
      {children}
    </MailsContext.Provider>
  );
};

export default MailsContextProvider;
