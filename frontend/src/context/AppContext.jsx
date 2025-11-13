// frontend/src/context/AppContext.jsx
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AppContext.Provider>
  );
};
