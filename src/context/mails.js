import React, { useState, createContext, useEffect, useContext } from 'react';
import { getMails } from '../apis/';
import {
  StartDateContext,
  EndDateContext,
  SearchSubjectContext,
} from '../context/';

export const MailsContext = createContext();

export const MailsContextProvider = ({ children }) => {
  const [mails, setMails] = useState([]);
  const { startSelectedDate } = useContext(StartDateContext);
  const { endSelectedDate } = useContext(EndDateContext);
  const { searchText } = useContext(SearchSubjectContext);

  const [rows, setRows] = useState([]);

  const hundleFilter = () => {
    const resultDateFilter = mails.filter(({ date }) => {
      return startSelectedDate <= date && date <= endSelectedDate;
    });
    if (searchText && searchText.length > 0) {
      const re = new RegExp(searchText, 'ig');
      const resultSearchTextFilter = resultDateFilter.filter(({ subject }) =>
        re.test(subject.headline)
      );
      setRows(resultSearchTextFilter);
    } else {
      setRows(resultDateFilter);
    }
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
