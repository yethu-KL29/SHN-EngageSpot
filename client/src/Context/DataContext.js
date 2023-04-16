import { createContext } from 'react';
import React, { useState } from 'react';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState('yethu');

  return (
    <DataContext.Provider value={{ user, setUser }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
