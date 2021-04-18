import React, { useState } from 'react';

export const StartDateContext = React.createContext();

export const StartDateContextProvider = ({ children }) => {
  const [startSelectedDate, setStartSelectedDate] = useState(
    new Date('2020-01-01T00:00:00')
  );

  return (
    <StartDateContext.Provider
      value={{ startSelectedDate, setStartSelectedDate }}
    >
      {children}
    </StartDateContext.Provider>
  );
};

export default StartDateContextProvider;
