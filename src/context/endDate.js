import React, { useState } from 'react';

export const EndDateContext = React.createContext();

export const EndDateContextProvider = ({ children }) => {
  const [endSelectedDate, setEndSelectedDate] = useState(
    new Date('2020-01-01T00:00:00')
  );

  return (
    <EndDateContext.Provider value={{ endSelectedDate, setEndSelectedDate }}>
      {children}
    </EndDateContext.Provider>
  );
};

export default EndDateContextProvider;
