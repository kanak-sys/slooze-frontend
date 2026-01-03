import { createContext, useContext, useState } from "react";

const users = [
  { email: "manager@slooze.com", password: "1234", role: "manager" },
  { email: "store@slooze.com", password: "1234", role: "storekeeper" }
];

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Load user from localStorage on refresh
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const login = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) return false;

    localStorage.setItem("user", JSON.stringify(foundUser));
    setUser(foundUser);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
