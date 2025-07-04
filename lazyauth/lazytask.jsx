/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";


const AuthContext = createContext(null);


export function AuthProvider({ children }) {
  const [user, setUser] = useState({ name: "Adwaidh" });

  const login = (name) => setUser({ name } ) ;
  const logout = () => {setUser(null); };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}


// Create an AuthContext to store user state.


// Build a custom hook useAuth to access context easily.


// Lazy load a Dashboard component that uses useAuth() to display the user name and logout button.