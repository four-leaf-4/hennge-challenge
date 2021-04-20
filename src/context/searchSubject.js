import React, { useState } from 'react';

export const SearchSubjectContext = React.createContext();

export const SearchSubjectContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchSubjectContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchSubjectContext.Provider>
  );
};

export default SearchSubjectContextProvider;
